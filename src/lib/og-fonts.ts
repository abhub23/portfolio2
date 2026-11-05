import { readFile } from "node:fs/promises";
import { join } from "node:path";

interface OgFontData {
  funnelDisplayRegular: ArrayBuffer;
  funnelDisplaySemibold: ArrayBuffer;
}

let cachedFonts: OgFontData | null = null;

const toArrayBuffer = (buffer: Buffer): ArrayBuffer =>
  buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer;

/**
 * Loads the OpenGraph image fonts from the public directory.
 *
 * We read from disk instead of using fetch(new URL(..., import.meta.url)),
 * because Turbopack compiles that pattern into an asset URL that cannot be
 * fetched during build-time prerendering.
 */
export async function loadOgFonts(): Promise<OgFontData | null> {
  if (cachedFonts) return cachedFonts;

  try {
    const [funnelDisplayRegular, funnelDisplaySemibold] = await Promise.all([
      readFile(join(process.cwd(), "public/fonts/FunnelDisplay-Regular.woff")),
      readFile(join(process.cwd(), "public/fonts/FunnelDisplay-Semibold.woff")),
    ]);

    cachedFonts = {
      funnelDisplayRegular: toArrayBuffer(funnelDisplayRegular),
      funnelDisplaySemibold: toArrayBuffer(funnelDisplaySemibold),
    };
    return cachedFonts;
  } catch (error) {
    console.error("Failed to load fonts:", error);
    return null;
  }
}
