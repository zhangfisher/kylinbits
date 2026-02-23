const { defineConfig } = require('tsup');

module.exports = defineConfig([
    {
        entry: ['src/index.ts'],
        outDir: 'dist',
        format: ['esm', 'iife'],
        splitting: false,
        dts: true,
        sourcemap: true,
        clean: false,
        noExternal: [],
    },
]);
