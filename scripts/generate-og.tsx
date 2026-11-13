import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

const publicFile = (path: string) => readFile(join(process.cwd(), "public", path));

const [regular, semibold, avatar] = await Promise.all([
  publicFile("fonts/FunnelDisplay-Regular.woff"),
  publicFile("fonts/FunnelDisplay-Semibold.woff"),
  publicFile("pf.jpg"),
]);

const avatarSrc = `data:image/jpeg;base64,${avatar.toString("base64")}`;

const styles = {
  outer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    padding: "72px 80px",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    fontFamily: "Funnel Display",
  },
  top: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "48px",
    width: "100%",
  },
  identity: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "800px",
  },
  pill: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    borderRadius: "999px",
    border: "1px solid #e5e5e5",
    backgroundColor: "#f5f5f5",
    padding: "10px 22px",
    color: "#404040",
    fontSize: "24px",
    fontWeight: 400,
  },
  dot: {
    display: "flex",
    width: "12px",
    height: "12px",
    borderRadius: "999px",
    backgroundColor: "#22c55e",
  },
  title: {
    marginTop: "34px",
    color: "#0a0a0a",
    fontSize: "84px",
    fontWeight: 600,
    lineHeight: 1.05,
    letterSpacing: "-0.035em",
  },
  role: {
    marginTop: "22px",
    color: "#525252",
    fontSize: "34px",
    fontWeight: 400,
    lineHeight: 1.3,
  },
  avatarRing: {
    display: "flex",
    flexShrink: 0,
    marginTop: "40px",
    padding: "5px",
    borderRadius: "999px",
    border: "1px solid #e5e5e5",
    backgroundColor: "#ffffff",
    boxShadow: "0 18px 50px rgba(0, 0, 0, 0.12)",
  },
  avatar: {
    display: "flex",
    width: "178px",
    height: "178px",
    borderRadius: "999px",
    objectFit: "cover",
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  bio: {
    color: "#525252",
    fontSize: "28px",
    fontWeight: 400,
    lineHeight: 1.45,
    maxWidth: "880px",
  },
  metaRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginTop: "26px",
    color: "#737373",
    fontSize: "24px",
    fontWeight: 400,
  },
  metaDivider: {
    display: "flex",
    width: "4px",
    height: "4px",
    borderRadius: "999px",
    backgroundColor: "#a3a3a3",
  },
  url: {
    color: "#171717",
    fontWeight: 600,
  },
} as const;

const image = new ImageResponse(
  <div style={styles.outer}>
    <div style={styles.top}>
      <div style={styles.identity}>
        <div style={styles.pill}>
          <div style={styles.dot} />
          <span>Mumbai, India</span>
        </div>
        <div style={styles.title}>Abdullah Mukri</div>
        <div style={styles.role}>Full stack Software Engineer</div>
      </div>
      <div style={styles.avatarRing}>
        <img src={avatarSrc} alt="Abdullah Mukri" style={styles.avatar} />
      </div>
    </div>
    <div style={styles.bottom}>
      <div style={styles.bio}>
        Previously Founding Engineer at Sylow AI. I build products used by thousands of
        developers.
      </div>
      <div style={styles.metaRow}>
        <span style={styles.url}>abdullahtech.dev</span>
        <div style={styles.metaDivider} />
        <span>Portfolio &amp; Blog</span>
      </div>
    </div>
  </div>,
  {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Funnel Display", data: regular, weight: 400, style: "normal" },
      { name: "Funnel Display", data: semibold, weight: 600, style: "normal" },
    ],
  }
);

await writeFile("public/og-image.png", Buffer.from(await image.arrayBuffer()));
console.log("Generated public/og-image.png (1200x630)");
