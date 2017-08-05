const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
//const cleanCSS = require('gulp-clean-css'); //  пока не нужно
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const preproc = require('gulp-less');

const config = {
    src: './',
    css: {
        watch: 'prestyles/**/*.less',
        src: 'prestyles/styles.less',
        dest: 'styles'
    },
    html: {
        src: 'index.html'
    }
};

gulp.task('preproc', function () {
    gulp.src(config.src + config.css.src)
            .pipe(sourcemaps.init())
            .pipe(preproc())
            .pipe(gcmq())
            .pipe(autoprefixer({
                browsers: ['> 0.1%'],
                cascade: false
            }))
            // .pipe(cleanCSS({ //  пока отключено
            //     level: 2
            // }))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(config.src + config.css.dest))
            .pipe(browserSync.reload({
                stream: true
            }));
});

gulp.task('watch', ['preproc', 'browserSync'], function () {
    gulp.watch(config.src + config.css.watch, ['preproc']);
    gulp.watch(config.src + config.html.src, browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: config.src
        }
    });
});
