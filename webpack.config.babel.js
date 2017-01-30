import { resolve } from 'path';
import webpackValidator from 'webpack-validator';
import { getIfUtils } from 'webpack-config-utils';

export default env => {
  const { ifProd, ifNotProd } = getIfUtils(env);

  const config = webpackValidator({
    context: resolve('client'),
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: resolve('dist'),
      publicPath: '/dist/',
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
    }
  });

  return config;
};
