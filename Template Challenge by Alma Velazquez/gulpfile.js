﻿var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    jsonServer = require("gulp-json-srv");

var jsSources = ['js/*.js'],
    sassSources = ['sass/*.scss'],
    htmlSources = ['**/*.html'],
    outputDir = 'assets';


gulp.task('copy', function () {
    gulp.src('index.html')
        .pipe(gulp.dest(outputDir))
});

gulp.task('sass', function () {
    gulp.src(sassSources)
        .pipe(sass({ style: 'expanded' }))
        .on('error', gutil.log)
        .pipe(gulp.dest('assets'))
        .pipe(connect.reload())
});

gulp.task('js', function () {
    gulp.src(jsSources)
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload())
});

gulp.task('watch', function () {
    gulp.watch(jsSources, ['js']);
    gulp.watch(sassSources, ['sass']);
    gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function () {
    connect.server({
        root: '.',
        livereload: true
    })
});

gulp.task('html', function () {
    gulp.src(htmlSources)
        .pipe(connect.reload())
});





var server = jsonServer.create({ port: 8080,});

gulp.task("start", function () {
    return gulp.src("GuestBlogs.json")
        .pipe(server.pipe());
});


gulp.task('default',  ['start','html', 'js', 'sass', 'connect', 'watch']);