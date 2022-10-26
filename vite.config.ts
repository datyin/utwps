import { readFileSync } from "node:fs";
import { builtinModules } from "node:module";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const pkg = JSON.parse(readFileSync(resolve(__dirname, "package.json"), "utf-8"));

export default defineConfig(({ mode }) => {
  return {
    appType: "custom",
    build: {
      minify: mode === "development" ? false : "esbuild",
      watch: mode === "development" ? {} : null,
      modulePreload: {
        polyfill: false,
      },
      reportCompressedSize: false,
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        fileName: "index",
        formats: ["cjs", "es"]
      },
      rollupOptions: {
        external: [
          ...builtinModules.flatMap((m) => [m, `node:${m}`]),
          ...Object.keys(pkg?.dependencies ?? {}),
          ...Object.keys(pkg?.devDependencies ?? {})
        ]
      }
    }
  };
});
