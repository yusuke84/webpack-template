var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: [
            'test/**/*.ts'
        ],
        exclude: [
        ],
        preprocessors: {
            'src/**/*.ts' : ['webpack', 'sourcemap'],
            'src/**/*.js' : ['webpack', 'sourcemap'],
            'test/**/*.ts': ['webpack', 'sourcemap']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,

        browsers: ['PhantomJS'],
        singleRun: false,

        webpack: {
            devtool: 'inline-source-map',
            debug: true,
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        }
    });
};