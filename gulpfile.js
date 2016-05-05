/**
 * Created by TheTower on 4/23/2016.
 */
/**
 * Created by TheTower on 4/15/2016.
 */
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
var JS   = ['src/js/**/*.js'];
var SCSS = ['src/_scss/**/*.scss'];
var DEST = 'dist/';


//Uglifies js and outputs to the dist directory
gulp.task('scripts', function(){
    return gulp.src( JS )
        .pipe( plumber() )
        .pipe( uglify() )
        .pipe( gulp.dest( DEST ) )
        .pipe( browserSync.reload( {stream:true, once:true }));

});

//compress those images
gulp.task('image', function(){
    return gulp.src('img/*')
        .pipe( plumber() )
        .pipe( imagemin )
        .pipe( gulp.dest('img/'))
});

//everything scss related goes here
gulp.task('styles', function(){
    return gulp.src( SCSS )
        .pipe( plumber() )

        .pipe( sass( {
            style: 'compressed'}
        ))
        .pipe( gulp.dest( DEST ))
        .pipe( browserSync.reload({stream:true}));
});

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch( SCSS, ['styles']);
    gulp.watch( JS, ['scripts']);
    gulp.watch("*.html").on('change', browserSync.reload);
});




//Watches files for changes
gulp.task('watch', function(){
    gulp.watch( JS, ['scripts'] ).on('change',browserSync.reload);
    gulp.watch( SCSS, ['styles'] ).on('change',browserSync.reload);
    gulp.watch( 'img/*', ['image'] ).on('change',browserSync.reload);
    gulp.watch( '*.html').on('change',browserSync.reload);
});

//put all gulp tasks in array below
gulp.task('default', ['scripts', 'watch', 'image'] );