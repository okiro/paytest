const importCss = require('gulp-import-css');
const webpack = require('webpack-stream');
const removeCode = require('gulp-remove-code');
const { src, dest, series } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const image = require('gulp-image');
const del = require('del');

const destFolder = 'docs';

function clean() {
    return del(`${destFolder}/*`)
}

function css() {
    return src('src/css/bundle.css')
        .pipe(importCss())
        .pipe(cleanCSS({ debug: true }, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(dest(`${destFolder}/css`));
}

function js() {
    return src('src/js/*.js')
        .pipe(removeCode({ production: true }))
        .pipe(webpack({
            devtool: 'source-map',
            mode: "production",
            output: {
                filename: 'bundle.js'
            }
        }))
        .pipe(dest(`${destFolder}/js`));
}

function images() {
    return src('src/img/*.png')
        .pipe(image())
        .pipe(dest(`${destFolder}/img`));
}

function fonts() {
    return src('src/fonts/*')
        .pipe(dest(`${destFolder}/fonts`));
}

function views() {
    return src('src/views/*')
        .pipe(dest(`${destFolder}/views`));
}

function index() {
    return src('src/index.html')
        .pipe(dest(`${destFolder}/`));
}

exports.default = series(clean, css, js, images, fonts, views, index);