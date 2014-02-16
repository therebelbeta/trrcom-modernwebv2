/*
  This is an EXAMPLE gulpfile.js
  You'll want to change it to match your project.
  Find plugins at https://npmjs.org/browse/keyword/gulpplugin
*/
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyHTML = require('gulp-minify-html');


gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)

  gulp.src(['source/js/**/*.js', '!source/js/lib/**'])
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));

  // Copy vendor files
  gulp.src(['source/lib/jquery/jquery.min.js', 'source/lib/vue/dist/vue.min.js', 'source/js/lib/**'])
    .pipe(concat("lib.js"))
    .pipe(gulp.dest('build/js'));

});

gulp.task('less', function () {

  gulp.src(['source/less/lib/**/*.css'])
    .pipe(concat("lib.css"))
    .pipe(gulp.dest('build/css'));

  gulp.src('source/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('build/css'));
});

// Copy all static assets
gulp.task('copy', function() {
  gulp.src('source/img/**')
    .pipe(gulp.dest('build/img'));

  gulp.src('source/index.html')
    .pipe(gulp.dest('build'));

  gulp.src('source/js/lib/lib.js')
    .pipe(gulp.dest('build/js'));

  gulp.src('source/assets/fonts/**')
    .pipe(gulp.dest('build/fonts'));

  gulp.src('source/assets/misc/**')
    .pipe(gulp.dest('build/misc'));
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
  gulp.run('scripts', 'less', 'copy');

  // Watch files and run tasks if they change
  gulp.watch('source/js/**', function(event) {
    gulp.run('scripts');
  });
  gulp.watch('source/less/**', function(event) {
    gulp.run('less');
  });
  gulp.watch('source/**/*.html', function(event) {
    gulp.run('copy','scripts');
  }); 
  gulp.watch([
    'source/img/**',
    'source/assets/fonts/**',
    'source/assets/misc/**'
  ], function(event) {
    gulp.run('copy');
  });
});