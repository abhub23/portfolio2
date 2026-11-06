import { ImageResponse } from "next/og";
import { ogBackground } from "@/lib/og-background";
import { loadOgFonts } from "@/lib/og-fonts";

export const alt = "Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const styles = {
  outerWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#121216",
    position: "relative",
    padding: "80px",
    overflow: "hidden",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundImage: ogBackground.fade,
  },
  grain: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundImage: ogBackground.grain,
    backgroundRepeat: "repeat",
    backgroundSize: "180px 180px",
    opacity: 0.45,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
    position: "relative",
    zIndex: 1,
  },
  title: {
    fontFamily: "Funnel Display",
    fontSize: "88px",
    fontWeight: "600",
    lineHeight: "1.1",
    textAlign: "left",
    color: "#ffffff",
    marginBottom: "16px",
    letterSpacing: "-0.02em",
    maxWidth: "960px",
  },
  description: {
    fontFamily: "Funnel Display",
    fontSize: "32px",
    fontWeight: "400",
    lineHeight: "1.5",
    textAlign: "left",
    maxWidth: "920px",
    color: "#c9c9d2",
    marginBottom: "32px",
    textWrap: "balance",
  },
} as const;

export default async function Image() {
  try {
    const fontData = await loadOgFonts();
    const title = "Blog";
    const description = "Thoughts on software development, life, and more.";

    return new ImageResponse(
      <div style={styles.outerWrapper}>
        <div style={styles.gradient} />
        <div style={styles.grain} />
        <div style={styles.mainContainer}>
          <div style={styles.title}>{title}</div>
          {description && <div style={styles.description}>{description}</div>}
        </div>
      </div>,
      {
        ...size,
        fonts: fontData
          ? [
              {
                name: "Funnel Display",
                data: fontData.funnelDisplayRegular,
                weight: 400,
                style: "normal",
              },
              {
                name: "Funnel Display",
                data: fontData.funnelDisplaySemibold,
                weight: 600,
                style: "normal",
              },
            ]
          : undefined,
      }
    );
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);
    return new Response(
      `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
      {
        status: 500,
      }
    );
  }
}
