var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cleanCSS     = require('gulp-clean-css');
var rename       = require("gulp-rename");


gulp.task('hello',function name(done) {
    console.log('Привет мир !!!');
    done();
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    
    gulp.watch("app/*.html").on('change', browserSync.reload);
});
gulp.task('mincss', function() {

    return gulp.src("css/*.css")
    
    .pipe(rename({suffix: ".min"}))
    
    .pipe(cleanCSS())
    
    .pipe(gulp.dest("app/css"));
    
    });
    gulp.task('min',['mincss']);
    gulp.task('default', ['serve']);

