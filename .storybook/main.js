module.exports = {
  stories: ['../stories/*.stories.@(js|mdx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-css-modules-preset',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ]
}