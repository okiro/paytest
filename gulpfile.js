const concat = require('gulp-concat');
const importCss = require('gulp-import-css');
const {src, dest, series} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const image = require('gulp-image');
const del = require('del');

const destFolder = 'docs';

function clean(){
    return del(`${destFolder}/*`)
}

function css(){
    return src('src/css/bundle.css')
    .pipe(importCss())
    .pipe(cleanCSS({debug: true}, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}`);
        console.log(`${details.name}: ${details.stats.minifiedSize}`);
      }))
    .pipe(dest(`${destFolder}/css`));
}

function js(){
    return src('src/js/*.js')
    .pipe(concat('bundle.js'))
    .pipe(dest(`${destFolder}/js`));
}

function images(){
    return src('src/img/*.png')
    .pipe(image())
    .pipe(dest(`${destFolder}/img`));
}

function fonts(){
    return src('src/fonts/*')
    .pipe(dest(`${destFolder}/fonts`));
}

function html(){
    return src('src/*.html')
    .pipe(dest(`${destFolder}/`));
}

exports.default = series(clean, css, js, images, fonts, html);