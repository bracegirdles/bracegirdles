import { resolve } from 'path';
import webpackValidator from 'webpack-validator';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import { getIfUtils } from 'webpack-config-utils';

export default env => {
  const { ifProd, ifNotProd } = getIfUtils(env);

  const config = webpackValidator({
    context: resolve('client'),
    entry: {
      profile: './profileIndex.jsx',
      landing: './landingIndex.jsx',
      signup: './signupIndex.jsx'
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
