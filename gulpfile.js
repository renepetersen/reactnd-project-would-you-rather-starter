var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('src/styles/sass/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('src/styles/css'))
});

gulp.task('watch', function(){
  gulp.watch('src/styles/sass/**/*.scss', ['sass']); 
})