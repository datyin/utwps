import { readFileSync, writeFileSync } from "node:fs";
import { builtinModules } from "node:module";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const packageJsonPath = resolve(__dirname, "package.json");

function readPackageJson() {
  return JSON.parse(readFileSync(packageJsonPath, "utf-8"));
}

const pkg = readPackageJson();

export default defineConfig(({ mode }) => {
  return {
    appType: "custom",
    build: {
      minify: mode === "development" ? false : "esbuild",
      watch: mode === "development" ? {} : null,
      modulePreload: {
        polyfill: false
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
    },
    plugins: [
      {
        name: "vite-plugin-package-json",
        enforce: "post",
        apply(config, env) {
          return env.mode === "production" && !config.build.watch;
        },
        writeBundle(options) {
          const pkg = readPackageJson();

          const generated = {
            name: pkg.name,
            version: pkg.version,
            description: pkg.description,
            type: pkg.type,
            main: pkg.main,
            module: pkg.module,
            typings: pkg.typings,
            types: pkg.types,
            exports: pkg.exports,
            author: pkg.author,
            license: pkg.license,
            repository: pkg.repository,
            readme: pkg.readme,
            bugs: pkg.bugs,
            keywords: pkg.keywords
          };

          const path = resolve(options.dir, "package.json");
          writeFileSync(path, JSON.stringify(generated, undefined, 2), "utf-8");
        }
      }
    ]
  };
});
