var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');
    // concat = require('gulp-concat');

// gulp.task('js', function() {
//   return gulp.src('builds/js/myscript.js')
//     .pipe(jshint('./.jshintrc'))
//     .pipe(jshint.reporter('jshint-stylish'));
// });

// gulp.task('js', function() {
//   return gulp.src('builds/js/*.js')
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('builds/js/min/'));
// });

gulp.task('sass', function () {
    return sass('process/sass/styles.scss', {
      sourcemap: true,
      style: 'compressed' // expanded
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('builds/css'));
});

gulp.task('watch', function() {
  gulp.watch('builds/js/**/*', ['js']);
  gulp.watch(['process/sass/**/*'], ['sass']);
});

gulp.task('webserver', function() {
    gulp.src('builds/')
        .pipe(webserver({
            // host: '127.0.0.1',
            port: 6639,
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['watch', 'sass','webserver']);