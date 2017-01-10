var gulp = require('gulp');
var less = require('gulp-less');
var ts = require('gulp-typescript');
var fs = require('fs');
var path = require('path');
var concat = require('gulp-concat');
var gulpTypings = require("gulp-typings");
var browserSync = require('browser-sync');

var webHostPath = './';
var scriptsPath = webHostPath + 'components/';
var assetsPath = webHostPath + 'assets/';
var webHostArtifactPath = webHostPath + 'wwwroot/';

gulp.task('default', ['compilewebresources'], () => {});

gulp.task('copywebpages', () =>
    getFolders(scriptsPath)
    .map(folder =>
        gulp.src(scriptsPath + folder + '/*.html')
        .pipe(concat(folder + '.html'))
        .pipe(gulp.dest(webHostArtifactPath))));

gulp.task('installTypings', () =>
    gulp.src(webHostPath + "typings.json")
    .pipe(gulpTypings()));

gulp.task('compilescripts', ['installTypings'], () =>
    getFolders(scriptsPath)
    .map(folder =>
        gulp.src([scriptsPath + folder + '/**/*.ts', scriptsPath + folder + '/**/*.tsx'])
        .pipe(ts({
            noImplicitAny: true,
            target: 'ES5',
            jsx: 'react',
            strictNullChecks: true
        }))
        .pipe(concat(folder + '.js'))
        .pipe(gulp.dest(webHostArtifactPath + 'js'))));

gulp.task('compilecss', () =>
    getFolders(scriptsPath)
    .map(folder => gulp.src(scriptsPath + folder + '/*.less')
        .pipe(less({paths: [path.join(__dirname, 'less', 'includes')]}))
        .pipe(concat(folder + '.css'))
        .pipe(gulp.dest(webHostArtifactPath + 'css/'))));

gulp.task('compilewebresources', ['compilescripts','compilecss','copywebpages'], () =>
    gulp.src(assetsPath+ '/**/*')
    .pipe(gulp.dest(webHostArtifactPath + "assets/")));

gulp.task('browser-sync', ['compilewebresources'],() => {
    var htmlWatcher = gulp.watch(scriptsPath + '**/*.html', ['copywebpages']);
    var cssWatcher = gulp.watch(scriptsPath + '**/*.less', ['compilecss']);
    var scriptWatcher = gulp.watch([scriptsPath + '**/*.tsx',
        scriptsPath + '**/*.ts',
        scriptsPath + '**/*.js'], ['compilescripts']);

    htmlWatcher.on('change', event => console.log('File ' + event.path + ' was ' + event.type));
    cssWatcher.on('change', event => console.log('File ' + event.path + ' was ' + event.type));
    scriptWatcher.on('change', event => console.log('File ' + event.path + ' was ' + event.type));

    browserSync.init(webHostArtifactPath + '/**/*.*', {
        port: 5000,
        host: 'localhost'});
});

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(file => fs.statSync(path.join(dir, file)).isDirectory());
}