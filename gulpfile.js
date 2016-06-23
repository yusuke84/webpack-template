var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('gulp-webpack');
var browserSync =require('browser-sync');
var webpackConfig = require('./webpack.config.js');

var server = require('karma').Server;

gulp.task('webpack', ['test'], function () {
    gulp.src(['./src/ts/*.ts'])
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('connect', function() {
    connect.server({
        root: [__dirname]
    });
});

gulp.task('test', function (done) {
    return new server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('tdd', function (done) {
    new server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('watch', function () {
    var targets = [
        './src/**/*.ts',
        './test/**/*.test.ts'
    ];
    gulp.watch(targets, ['webpack']);
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./public/"
            ,index  : "index.html"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('browser', ['browser-sync', 'webpack'], function () {
    var targets = [
        './src/**/*.ts',
        './test/**/*.test.ts'
    ];
    gulp.watch(targets, ['bs-reload','webpack']);
});

gulp.task('default', ['watch']);