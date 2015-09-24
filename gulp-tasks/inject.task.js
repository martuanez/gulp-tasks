module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('./client/app/index-test.html')
            .pipe(plugins.inject(gulp.src('client/dist/css/vendor.css', {read: false}), {name: 'bower'}))
            .pipe(plugins.inject(gulp.src('client/dist/css/myApp.css', {read: false}), {name: 'myAppcss'}))
            .pipe(plugins.inject(gulp.src('client/dist/js/vendor.js', {read: false}), {name: 'bower'}))
            .pipe(plugins.inject(gulp.src('client/dist/js/myApp.js', {read: false}), {name: 'myAppjs'}))
            .pipe(plugins.inject(gulp.src('client/dist/html/myApp-templates.js', {read: false}), {name: 'templates'}))
            .pipe(gulp.dest('./client/dist'));
    };
};
