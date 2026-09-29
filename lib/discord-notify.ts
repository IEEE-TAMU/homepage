const NOTIFY_TIMEOUT_MS = 5000;

export async function notifyDiscord(
  content: string,
  source = process.env.DISCORD_NOTIFY_SOURCE
): Promise<void> {
  const baseUrl = process.env.DISCORD_BOT_URL;

  if (!baseUrl) {
    console.warn('DISCORD_BOT_URL is not set; skipping Discord notification');
    return;
  }

  try {
    const response = await fetch(`${baseUrl.replace(/\/+$/, '')}/notify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source, content }),
      signal: AbortSignal.timeout(NOTIFY_TIMEOUT_MS),
    });

    if (!response.ok) {
      console.error(
        `Discord notification failed: ${response.status} ${await response.text()}`
      );
    }
  } catch (error) {
    console.error('Discord notification error:', error);
  }
}
