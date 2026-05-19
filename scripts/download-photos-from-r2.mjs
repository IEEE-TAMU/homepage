import {
  GetObjectCommand,
  ListObjectsV2Command,
  S3Client,
} from '@aws-sdk/client-s3';
import { createWriteStream, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pipeline } from 'node:stream/promises';

const BUCKET = 'officer-photos';
const PHOTO_DIR = 'public/officer_photos';

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

if (!accountId || !accessKeyId || !secretAccessKey) {
  console.error(
    'Error: Missing required env vars: CLOUDFLARE_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY'
  );
  console.error(
    'Create R2 API tokens at: https://dash.cloudflare.com -> R2 -> Manage R2 API Tokens'
  );
  process.exit(1);
}

const client = new S3Client({
  region: 'auto',
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId, secretAccessKey },
});

async function downloadAll() {
  mkdirSync(PHOTO_DIR, { recursive: true });

  console.log(
    `Downloading photos from R2 bucket '${BUCKET}' to ${PHOTO_DIR}/...`
  );

  let count = 0;
  let continuationToken;

  do {
    const listCmd = new ListObjectsV2Command({
      Bucket: BUCKET,
      ContinuationToken: continuationToken,
    });
    const response = await client.send(listCmd);

    for (const obj of response.Contents ?? []) {
      const key = obj.Key;
      const destPath = join(PHOTO_DIR, key);
      mkdirSync(dirname(destPath), { recursive: true });

      console.log(`  Downloading ${key}...`);
      const getCmd = new GetObjectCommand({ Bucket: BUCKET, Key: key });
      const { Body } = await client.send(getCmd);
      await pipeline(Body, createWriteStream(destPath));
      count++;
    }

    continuationToken = response.NextContinuationToken;
  } while (continuationToken);

  console.log(`Done! Downloaded ${count} photos.`);
}

downloadAll().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
