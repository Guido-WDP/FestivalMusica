const { src, dest, watch, parallel } = require("gulp");

// CSS //
const sass = require("gulp-sass")(require('sass'))
const plumber = require('gulp-plumber');

// IMAGENES //
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

function css(done) {
    src('src/scss/**/*.scss') //IDENTIFICAR EL ARCHIVO SASS //
        .pipe(plumber()) // PLUMBER //
        .pipe(sass()) // COMPILARLO //
        .pipe(dest('build/css')) // ALMACENARLO EN EL DISCO DURO //

    done(); // CALLBACK QUE AVISA A GULP CUANDO LLEGAMOS AL FINAL // 
}

function imagenes(done) {
    src('src/img/**/*.{png,jpg}')
        .pipe()
    done();
}

function versionWebp(done) {
    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))

    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);

    done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev);
