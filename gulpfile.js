/**
 * Created by Lawrence on 4/20/16.
 */


var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');


// Source and distribution folder
var assetsDev = 'static/assets/';
var assetsProd = 'static/src/';
var appDev = 'static/dev/';
var appProd = 'static/app/';
var nodePath = './node_modules/';


var tsProject = typescript.createProject('tsconfig.json');

//CSS source file: .scss files
//var css = {
//    in:
//};

gulp.task('build-css', function () {
    return gulp.src(assetsDev + 'scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(assetsProd + 'css/'))
});

gulp.task('build-ts', function () {
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd))

});

//// Fonts
//gulp.task('build-fonts', function () {
//    return gulp.src([
//            './node_modules/bootstrap-sass/assets/fonts/bootstrap/*'])
//        .pipe(gulp.dest(assetsProd + 'fonts/bootstrap/'));
//});
// Fonts
gulp.task('build-fonts', function () {
    return gulp.src([
            nodePath + '/font-awesome/fonts/fontawesome-webfont.*'])
        .pipe(gulp.dest(assetsProd + 'fonts/font-awesome/'));
});


gulp.task('watch', function () {
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
    gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);
});

gulp.task('default', ['watch', 'build-ts', 'build-css', 'build-fonts']);
