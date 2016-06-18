'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const stylint = require('gulp-stylint');
const execSync = require('child_process').execSync;

const PRE_COMMIT = process.env.NODE_ENV === 'pre_commit';

let changedFiles;
let changedFilesJavascript;
let changedFilesStylus;

if (PRE_COMMIT) {
    changedFiles = execSync('git diff --cached --name-only --diff-filter=ACM', {encoding: 'utf8'});
    changedFiles = changedFiles.split('\n');
    changedFilesJavascript = changedFiles.filter((item) => /^src\/.+?\.jsx?$/.test(item));
    changedFilesStylus = changedFiles.filter((item) => /^src\/.+?\.styl$/.test(item));
}

/**
 * Check JavaScript validation
 */
gulp.task('eslint', ()=>
    gulp.src(PRE_COMMIT ? changedFilesJavascript : ['src/**/*.{js,jsx}'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
);

/**
 *
 * @desc Check stylus validation
 */
gulp.task('styluslint', ()=>
    gulp.src(PRE_COMMIT ? changedFilesStylus : ['src/**/*.styl'])
        .pipe(stylint())
        .pipe(stylint.reporter())
);

/**
* validation Stylus and TypeScript
*/
gulp.task('lint', ['eslint', 'styluslint']);
