/**
 * Prefix for GitHub Pages: /Singer-Songwriter-Website-Client when deployed.
 * Empty in dev so paths stay as /albums/...
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return base + "/" + path;
  return base + path;
}
