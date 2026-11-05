const grainSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"/></filter><rect width="180" height="180" filter="url(#noise)"/></svg>`;

/**
 * Shared background layers for the generated OG images.
 *
 * `fade` is a soft gradient that fades into the card color, and `grain` is an
 * inline SVG noise tile so the gradient does not look like a flat band.
 */
export const ogBackground = {
  fade: "linear-gradient(180deg, rgba(99, 102, 241, 0.16) 0%, rgba(250, 250, 250, 0) 60%), radial-gradient(80% 90% at 92% 0%, rgba(168, 85, 247, 0.12) 0%, rgba(250, 250, 250, 0) 55%)",
  grain: `url("data:image/svg+xml,${encodeURIComponent(grainSvg)}")`,
} as const;
