import { readFileSync } from "node:fs";
import { builtinModules } from "node:module";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const pkg = JSON.parse(readFileSync(resolve(__dirname, "package.json"), "utf-8"));

export default defineConfig(({ mode }) => {
  return {
    appType: "custom",
    build: {
      ssr: true,
      target: "node16.17.0",
      minify: mode === "development" ? false : "esbuild",
      watch: mode === "development" ? {} : null,
      polyfillModulePreload: false,
      reportCompressedSize: false,
      rollupOptions: {
        input: {
          index: resolve(__dirname, "src/index.ts")
        },
        output: {
          strict: false,
          generatedCode: "es2015"
        },
        external: [...builtinModules.flatMap((m) => [m, `node:${m}`]), ...Object.keys(pkg?.dependencies ?? {}), ...Object.keys(pkg?.devDependencies ?? {})]
      }
    }
  };
});
