const webpackEnv = { test: true };
const webpackConfig = require('./webpack.config.babel')(webpackEnv);
const testGlob = 'spec/**/*.js'

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [testGlob],
    preprocessors: {
      [testGlob]: ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  });
};
