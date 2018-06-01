const webpackConfig = require('./webpack.config');
const merge = require('webpack-merge');

let karmaWebpackConfig = merge(webpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                enforce: 'post',
                test: /\.js$/,
                exclude: /((node_modules|bower_components)\/|spec)/,
                loader: 'istanbul-instrumenter-loader'
            }
        ],
    }
});

karmaWebpackConfig.optimization = undefined;
karmaWebpackConfig.entry = undefined;

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'tests/index.js'
        ],
        preprocessors: {
            'tests/index.js': ['webpack', 'sourcemap']
        },
        webpack: karmaWebpackConfig,
        reporters: ['spec', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-spec-reporter',
            'karma-coverage',
            'karma-webpack',
            'karma-sourcemap-loader'
        ],
        singleRun: false,
        concurrency: Infinity
    })
};