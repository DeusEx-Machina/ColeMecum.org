var gulp = require('gulp');
    sass = require('gulp-sass');
    uglify = require('gulp-uglify');
    plumber = require('gulp-plumber');
    imagemin = require('gulp-imagemin');
    prefix = require('gulp-autoprefixer');
    changed = require('gulp-changed');
    uncss = require('gulp-uncss');
    browserSync = require('browser-sync');
// variables
var JS   = ['./src/app/angular/app.js'];
var SCSS = ['./src/scss/main.scss'];


//Uglifies js and outputs to the dist directory
gulp.task('scripts', function(){
    return gulp.src( JS )
        .pipe( plumber() )
        .pipe( uglify() )
        .pipe( gulp.dest( './dist/js/' ) )
        .pipe( browserSync.reload( {stream:true, once:true }));

});

//compress those images
gulp.task('image', function(){
    return gulp.src('./src/img/**/*')
        .pipe( plumber() )
        .pipe( imagemin() )
        .pipe( gulp.dest('./dist/img/'))
});

//everything scss related goes here
gulp.task('styles', function(){
    return gulp.src( SCSS )
        .pipe( plumber() )

        .pipe( sass( {
            style: 'compressed'}
        ))
        .pipe( gulp.dest( './dist/css/' ))
        .pipe( browserSync.reload({stream:true}));
});

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch( ['./src/scss/**/*.scss'], ['styles']);
    gulp.watch( JS, ['scripts']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

//put all gulp tasks in array below
gulp.task('default', ['scripts', 'styles', 'image']);