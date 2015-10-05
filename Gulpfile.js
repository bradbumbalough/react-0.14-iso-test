// requires
var gulp        = require('gulp'),
    babel       = require('gulp-babel'),
    nodemon     = require('gulp-nodemon');

gulp.task('watch', function() {
  gulp.watch(['src/**/*.jsx', 'src/**/*.js'], ['transform'])
});

gulp.task('server-watch', function() {
  nodemon({ script: 'dist/server.js', ext: 'js', ignore: ['gulpfile.js', 'node_modules/*'] })
    .on('change', [])
    .on('restart', function () {
      console.log('Server restarted')
    });
});

gulp.task('transform', function() {
  gulp.src(['src/**/*.jsx', 'src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'server-watch']);
