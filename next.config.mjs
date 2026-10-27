import os from "node:os";
import { withContentCollections } from "@content-collections/next";

/**
 * Dev server access from other devices (phone, tablet, another laptop) is
 * blocked unless the requesting host is listed in `allowedDevOrigins`.
 * Your LAN IP changes whenever the router reassigns it, so instead of
 * hardcoding it we read every non-internal IPv4 address of this machine at
 * startup. Restart the dev server after switching networks.
 */
function getLocalIPv4Addresses() {
  return [
    ...new Set(
      Object.values(os.networkInterfaces())
        .flat()
        .filter(
          (iface) =>
            iface &&
            (iface.family === "IPv4" || iface.family === 4) &&
            !iface.internal &&
            !iface.address.startsWith("169.254.")
        )
        .map((iface) => iface.address)
    ),
  ];
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["localhost", ...getLocalIPv4Addresses()],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
