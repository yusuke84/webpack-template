var path = require('path');
module.exports = {
    entry: {
        app :'./src/ts/app.ts'
    },
    output: {
        filename: '[name].dist.js',
    },
    resolve: {
        extensions:['', '.ts', '.webpack.js', '.web.js', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /.*_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                exclude: /.*_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};