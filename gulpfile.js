const gulp = require('gulp')

// modules for css
const autoprefixer = require('gulp-autoprefixer')
//const cleanCSS = require('gulp-clean-css') //  пока не нужно
const browserSync = require('browser-sync').create()
const sourcemaps = require('gulp-sourcemaps')
const gcmq = require('gulp-group-css-media-queries')
const preproc = require('gulp-stylus')

// modules for js
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')

const config = {
    src: './',
    css: {
        watch: 'prestyles/**/*.styl',
        src: 'prestyles/styles.styl',
        dest: 'styles'
    },
    html: {
        src: 'index.html'
    },
    react: {
      watch: 'react/**/*.jsx',
      src: 'react/index.jsx',
      dest: 'index.js'
    }
}

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
            }))
})

gulp.task('react', () => {
    return browserify({
      entries: config.src + config.react.src,
      extensions: ['.jsx']
    })

      .transform(babelify, {presets: ["es2015", "react"]})
      .bundle()
      .pipe(source(config.src + config.react.dest))
      .pipe(gulp.dest(config.src))
      .pipe(browserSync.reload({
          stream: true
      }))
})

gulp.task('watch', ['react', 'preproc', 'browserSync'], function () {
    gulp.watch(config.src + config.css.watch, ['preproc'])
    gulp.watch(config.src + config.html.src, browserSync.reload)
    gulp.watch(config.src + config.react.watch, ['react'])
})

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: config.src
        }
    })
})
