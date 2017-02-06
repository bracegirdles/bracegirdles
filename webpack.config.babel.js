const resolve = require('path').resolve;
const webpackValidator = require('webpack-validator');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const getIfUtils = require('webpack-config-utils').getIfUtils;

module.exports = env => {
  const { ifProd, ifNotProd } = getIfUtils(env);

  const config = webpackValidator({
    context: resolve('client'),
    entry: {
      profile: './profileIndex.jsx',
      landing: './landingIndex.jsx',
      feed: './feedIndex.jsx',
      signup: './signupIndex.jsx',
      settings: './settingsIndex.jsx'
    },
    output: {
      filename: 'bundle.[name].js',
      path: resolve('dist'),
      pathinfo: ifNotProd()   // this is for debugging import statements in dev mode
    },
    devtool: ifProd('source-map', 'eval'),
    module: {
      loaders: [
        {
          test: /\.jsx*$/,
          loaders: [ 'babel' ],
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new ProgressBarPlugin()
    ]
  });

  return config;
};
