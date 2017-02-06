const resolve = require('path').resolve;
const webpackValidator = require('webpack-validator');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const getIfUtils = require('webpack-config-utils').getIfUtils;

module.exports = env => {
  const { ifProd, ifNotProd } = getIfUtils(env);
  const config = webpackValidator({
    context: resolve('client'),
    entry: {                              // If you add more pages, add it as
      profile: './profileIndex.jsx',      // an entry point here
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
          test: /\.jsx*$/,            // this transpiles the jsx files to es5
          loaders: [ 'babel' ],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css'] // this will inject any imported css file
        }                           // in the above entry points to the head`
      ]
    },
    plugins: [
      new ProgressBarPlugin()
    ]
  });

  return config;
};
