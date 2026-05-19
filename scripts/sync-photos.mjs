import {
  DeleteObjectCommand,
  ListObjectsV2Command,
  S3Client,
} from '@aws-sdk/client-s3';
import { existsSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';
import * as readline from 'node:readline';

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

const ALLOWED_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

async function listRemotePhotos() {
  const photos = [];
  let continuationToken;
  do {
    const cmd = new ListObjectsV2Command({
      Bucket: BUCKET,
      ContinuationToken: continuationToken,
    });
    const response = await client.send(cmd);
    for (const obj of response.Contents ?? []) {
      if (ALLOWED_EXTS.has(extname(obj.Key).toLowerCase())) {
        photos.push(obj.Key);
      }
    }
    continuationToken = response.NextContinuationToken;
  } while (continuationToken);
  return photos;
}

async function listLocalPhotos() {
  if (!existsSync(PHOTO_DIR)) return [];
  return readdirSync(PHOTO_DIR).filter((f) =>
    ALLOWED_EXTS.has(extname(f).toLowerCase())
  );
}

async function main() {
  const [remotePhotos, localPhotos] = await Promise.all([
    listRemotePhotos(),
    listLocalPhotos(),
  ]);

  const localSet = new Set(localPhotos);
  const orphaned = remotePhotos.filter((f) => !localSet.has(f));

  if (orphaned.length === 0) {
    console.log('No orphaned photos found. Remote matches local.');
    return;
  }

  console.log(`Found ${orphaned.length} photo(s) in R2 that do not exist locally:\n`);
  for (const file of orphaned) {
    console.log(`  - ${file}`);
  }
  console.log();

  const answer = await ask('Delete these photos from R2? (yes/no): ');
  rl.close();

  if (answer.trim().toLowerCase() !== 'yes' && answer.trim().toLowerCase() !== 'y') {
    console.log('Cancelled. No photos were deleted.');
    return;
  }

  console.log(`\nDeleting ${orphaned.length} photo(s)...`);
  for (const file of orphaned) {
    console.log(`  Deleting ${file}...`);
    await client.send(
      new DeleteObjectCommand({ Bucket: BUCKET, Key: file })
    );
  }

  console.log(`Done! Deleted ${orphaned.length} photo(s).`);
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
