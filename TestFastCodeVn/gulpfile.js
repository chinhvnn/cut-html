var gulp = require("gulp"),
  watch = require("gulp-watch"),
  pug = require("gulp-pug");

// run this task by typing in gulp pug in CLI
gulp.task("pug", function () {
  return gulp
    .src("./views/temp/*.pug")
    .pipe(watch("./views/temp/*.pug"))
    .pipe(pug()) // pipe to pug plugin
    .pipe(gulp.dest("./")); // tell gulp our output folder
});
