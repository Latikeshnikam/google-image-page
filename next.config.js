module.exports = {
    env: {
      ENVIRONMENT: "development",
    },
    webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(gif)(\?[a-z0-9=.]+)?$/,
      use: {
        loader: 'url-loader?limit=100000',
      }
    }
  )

    return config
  },
  };
