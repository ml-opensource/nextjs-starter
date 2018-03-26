const withTypescript = require('@zeit/next-typescript');
module.exports = withTypescript({
  webpack(config, options) {
    // Ensure babel-loader cache is cleared so ENV vars aren't cached
    // See https://github.com/zeit/next.js/issues/1103 for potentially better solutions
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });

    return config
  },
  typescriptLoaderOptions: {
    transpileOnly: false
  }
})