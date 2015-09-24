var gulp = require('gulp');
var path = require('path');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({
    pattern: ['gulp-*', 'gulp.*', 'del', 'concat', 'run-*'],
    rename: {
        'gulp-ruby-sass': 'sass',
        'gulp-concat-util': 'concat'
    },
    lazy: false
});
var jsFiles = [
    'client/app/*.js',
    'client/app/**/*.js',
    'client/app/**/**/*.js',
    'client/app/**/**/**/*.js',
    'client/app/**/**/**/**/*.js',
    '!client/app/bower_components/**',
    '!client/app/vendor-scripts/**'
];

function getTask(task) {
    return require('./gulp-tasks/' + task + '.task')(gulp, plugins, jsFiles);
}

gulp.task('lint', getTask('lint'));

gulp.task('clean', getTask('clean'));

gulp.task('vendor-styles', getTask('vendor-styles'));

gulp.task('myApps-styles', getTask('myApps-styles'));

gulp.task('vendor-js', getTask('vendor-js'));

gulp.task('myApps-js', getTask('myApps-js'));

gulp.task('html2js', getTask('html2js'));

gulp.task('copy-fonts',getTask('copy-fonts'));

gulp.task('watch', getTask('watch'));

gulp.task('inject', getTask('inject'));

gulp.task('connect', function () { plugins.connect.server({ root: 'app/', port: 8888 }); });

gulp.task('connectDist', function () { plugins.connect.server({ root: 'dist/', port: 9999 });});

// build task
gulp.task('build',
    ['lint', 'clean', 'vendor-styles', 'myApps-styles', 'vendor-js', 'myApps-js', 'html2js', 'copy-fonts']
);

gulp.task('start', ['build'], function () {
    plugins.nodemon({
        script: 'index.js',
        ext: 'js html scss',
        env: { 'NODE_ENV': 'development' }
    });
});
gulp.task('default', function () {
    plugins.nodemon({
        script: 'index.js'
        , ext: 'js html scss'
        , env: { 'NODE_ENV': 'development' }
    });
});