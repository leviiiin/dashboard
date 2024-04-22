const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

module.exports = function() {
  gulp.task('image', function () {
    return gulp.src('src/assets/image/*.*')
      .pipe(gulp.dest('public/image'));
  });
};
