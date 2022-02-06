const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const preprocess = require("svelte-preprocess");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-svelte-csf"],
  framework: "@storybook/svelte",
  svelteOptions: {
    preprocess: preprocess(),
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    config.plugins.push(new VanillaExtractPlugin());

    // Return the altered config
    return config;
  },
};
