import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon() {
  const icon = await readFile(join(process.cwd(), 'app', 'icon.svg'));
  return new ImageResponse(
    (
      // embed the svg in an image response
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}
      >
        <img
          src={`data:image/svg+xml;base64,${Buffer.from(icon).toString('base64')}`}
          width={size.width}
          height={size.height}
          alt="App Icon"
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
