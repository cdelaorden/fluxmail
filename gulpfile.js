var gulp = require("gulp");
var browserify = require("gulp-browserify");
var concat = require("gulp-concat");

gulp.task('browserify', function() {
    // content
    gulp.src('src/js/main.js')
      .pipe(browserify({ transform: 'reactify' }))
      //.pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function(){
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/css/styles.css')
    .pipe(gulp.dest('dist/css'));
  gulp.src('src/data/*.json')
    .pipe(gulp.dest('dist/data'));
});

gulp.task('default', ['browserify', 'copy']);
gulp.task('watch', ['default'], function(){
  gulp.watch('src/**/*.*', ['default']);
});