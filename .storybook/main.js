const path = require('path');
module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  features: {
    interactionsDebugger: true, 
  },
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {

   
    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ];
    // Return the altered config
    return config;
 
  },
}