var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('pack-js', function () {    
    return gulp.src(['src/js/*.js])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('public/js'));
});
 
gulp.task('pack-css', function () {    
    return gulp.src(['src/css/*.css'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('public/css'));
});
 
gulp.task('default', ['pack-js', 'pack-css']);