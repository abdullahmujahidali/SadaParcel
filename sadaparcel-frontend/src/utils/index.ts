const baseUrl = 'http://example.com';

export function urlWithArgs(
    url: string,
    args: Record<string, any>,
    params?: Record<string, any>,
) {
  const newUrl = url.replace(/:(\w+)/g, (_, key) => args[key] ?? '');
  if (!params) return newUrl;

  const urlObj = new URL(newUrl, baseUrl);

  for (const [key, val] of Object.entries(params)) {
    urlObj.searchParams.set(key, val);
  }

  return urlObj.toString().replace(new RegExp(`^${baseUrl}`), '');
}
