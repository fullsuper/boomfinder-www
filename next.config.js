const path = require('path');

module.exports = {
  serverRuntimeConfig: {},
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
        },
      ],
    });

    config.resolve.alias['@'] = path.join(__dirname, 'src');

    return config;
  }
};