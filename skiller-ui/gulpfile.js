"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs a local dev server
var open = require('gulp-open'); // Opens URL in a web browser
var concat = require('gulp-concat'); // Concat CSS
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify'); // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use text streams with Gulp (???)

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/**/*.html',
    js: './src/**/*.js',
    css: './src/**/*.css',
    bootstrapCss: './node_modules/bootstrap/dist/css/bootstrap.min.css',
    bootstrapThemeCss: './node_modules/bootstrap/dist/css/bootstrap.theme.min.css',
    bootstrapFonts: './node_modules/bootstrap/dist/fonts/*.{eot,svg,ttf,woff,woff2}',
    bootstrapJs: './node_modules/bootstrap/dist/js/bootstrap.min.js',
    jquery: './node_modules/jquery/dist/jquery.min.js',
    dist: './dist',
    mainJs: './src/main.js'
  }
};

//Start a local dev server
gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  })
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
      .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(connect.reload());
});

gulp.task('js', function() {
  browserify(config.paths.mainJs)
      .transform(reactify)
      .bundle()
      .on('error', console.error.bind(console))
      .pipe(source('app.js'))
      .pipe(gulp.dest(config.paths.dist + '/js'))
      .pipe(connect.reload());
  gulp.src([config.paths.jquery, config.paths.bootstrapJs])
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest(config.paths.dist + '/js'));
});

gulp.task('css', function() {
  return gulp.src([config.paths.bootstrapCss, config.paths.bootstrapThemeCss, config.paths.css])
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('fonts', function() {
  return gulp.src(config.paths.bootstrapFonts)
      .pipe(gulp.dest(config.paths.dist + '/fonts/'));
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'css', 'fonts', 'open', 'watch']);