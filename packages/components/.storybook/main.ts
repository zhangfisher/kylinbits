import type { StorybookConfig } from "@storybook/web-components-vite";
import { fileURLToPath } from "url";
import { dirname } from "path";

// ES Module 环境下模拟 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@storybook/addon-docs", "./addons/kylinbits-tools/preset.js"],
    framework: {
        name: "@storybook/web-components-vite",
        options: {},
    },
    viteFinal: async (config) => {
        const path = await import("path");
        config.resolve = config.resolve || {};
        config.resolve.alias = {
            // @ts-ignore
            ...config.resolve.alias,
            "@": path.resolve(__dirname, "../src"),
        };
        return config;
    },
};
export default config;
