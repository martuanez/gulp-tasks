module.exports = function (gulp, plugins) {
    return function () {
        gulp.src([
            'client/app/core/**/**/*.html',
            'client/app/core/**/**/**/**/*.html',
            'client/app/common/components/**/**/*.html',
            '!client/app/bower_components/**'])
            .pipe(plugins.html2js({outputModuleName: 'myApp.templates'}))
            .pipe(plugins.concat('myApp-templates.js'))
            .pipe(gulp.dest('client/dist/html'))
            .pipe(plugins.livereload());
    };
};
