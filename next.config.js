/** @type {import('next').NextConfig} */

import { readdirSync } from "fs";
import { resolve, sep } from "path";

const getTSModules = () =>
  ["@swc-next"]
    .map((scope) =>
      readdirSync(resolve(`.${sep}node_modules${sep}${scope}`)).map(
        (pkgName) => `${scope}/${pkgName}`
      )
    )
    .flat();

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  distDir: "out",
  transpilePackages: getTSModules(),
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.module.rules.push({
      test: /\.(js)$/,
      loader: "string-replace-loader",
      options: {
        search: /customElements\.define\("(.*?)"/,
        replace: (_match, p1) => {
          return `!customElements.get("${p1}")&&customElements.define("${p1}"`;
        },
        flags: "g",
      },
    });
    return config;
  },
};

export default nextConfig;
