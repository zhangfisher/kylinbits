import { defineConfig } from "tsup";
//@ts-expect-error
import copy from "esbuild-copy-files-plugin";
export default defineConfig([
    {
        entry: ["src/index.ts"],
        outDir: "dist",
        format: ["esm", "iife"],
        splitting: false,
        dts: true,
        sourcemap: true,
        clean: true,
        platform: "browser",
        target: "es2020",
        noExternal: [],
        esbuildPlugins: [
            copy({
                source: ["./src/themes"],
                target: "./dist",
                copyWithFolder: true,
            }),
        ],
    },
]);
