'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

require('./tasks/html')();

require('./tasks/styles')(browserSync);

require('./tasks/scripts')();

require('./tasks/icons')();

require('./tasks/image')();

gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: './public',
    }
  });

  gulp.watch('./src/styles/**/*.scss', gulp.parallel('styles'));
  gulp.watch('./src/scripts/**/*.js').on('change', gulp.series('scripts', browserSync.reload));
  gulp.watch('./src/templates/**/*.pug').on('change', gulp.series('html', browserSync.reload));
});

gulp.task('default', gulp.parallel('styles', 'scripts', 'html', 'icons', 'image'));
