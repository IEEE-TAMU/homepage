import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { readFileSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';

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

async function uploadAll() {
  const files = readdirSync(PHOTO_DIR).filter((f) =>
    ALLOWED_EXTS.has(extname(f).toLowerCase())
  );

  if (files.length === 0) {
    console.log(`No photos found in ${PHOTO_DIR}/`);
    return;
  }

  console.log(
    `Uploading ${files.length} photos from ${PHOTO_DIR}/ to R2 bucket '${BUCKET}'...`
  );

  for (const file of files) {
    const filePath = join(PHOTO_DIR, file);
    console.log(`  Uploading ${file}...`);
    const cmd = new PutObjectCommand({
      Bucket: BUCKET,
      Key: file,
      Body: readFileSync(filePath),
      ContentType: `image/${extname(file).slice(1).replace('jpg', 'jpeg')}`,
    });
    await client.send(cmd);
  }

  console.log(`Done! Uploaded ${files.length} photos.`);
}

uploadAll().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
