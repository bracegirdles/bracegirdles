const webpackEnv = { test: true };
const webpackConfig = require('./webpack.config.babel')(webpackEnv);
const testGlob = 'spec/**/*.js'


// TODO: This is currently set to run all of the tests in the spec folder.
// However, the tests are incomplete/have not been tested before.
// To run the tests, you can run:
// --------------------------------
// yarn test
// --------------------------------
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
