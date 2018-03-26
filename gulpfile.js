var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var vinylSource = require('vinyl-source-stream');
var globby = require('globby');
var preprocess = require('gulp-preprocess');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var isDebug = true;
var rename = require('gulp-rename');

gulp.task('browserify', function(){
    var browserified = browserify('./app/app.js', {debug: isDebug});
    browserified
        .bundle()
        .pipe(vinylSource('bundle.js'))
        .pipe(gulp.dest('app/'));
    return browserified;
   /*return browserify('./app/app.js')
       .bundle()
       .pipe(vinylSource('bundle.js'))
       .pipe(gulp.dest('./app/'));*/
});

gulp.task('browserify-min', function() {
    var browserified = browserify('./app/app.js', {debug: isDebug});
    browserified
        .bundle()
        .pipe(vinylSource('bundle-min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('app/'));
    return browserified;
});


function constructWatchify(files, bundleName) {
    var watchified = watchify(browserify(files, watchify.args));
    watchified.transform('require-globify');

    function update() {
        watchified
            .bundle()
            .pipe(vinylSource(bundleName))
            .pipe(gulp.dest('./app/'));
    }

    watchified.on('update', update);
    watchified.on('error', gutil.log.bind(gutil, 'Browserify Error'));
    watchified.on('time', function(time) {
        gutil.log('Watchify', gutil.colors.cyan("'"+bundleName+"'"), 'after', gutil.colors.magenta(time));
    });

    return update();
}

gulp.task('watchify', function () {
    var mainFile = './app/app.js';
    var bundleName = 'bundle.js';
    return constructWatchify(mainFile, bundleName);
});



gulp.task('default', ['watchify'], function() {
    gulp.watch(['./app/*.html']);
});

gulp.task('build', ['browserify']);

gulp.task('build-release', ['browserify-min', 'css-deps']);