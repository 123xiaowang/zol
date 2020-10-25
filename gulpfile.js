
//一、 导入模块
const gulp = require('gulp'),
      sass = require('gulp-sass'),
    //   cssnano = require('gulp-cssnano'),
      rename = require('gulp-rename'),
      imgs = require('gulp-imagemin'),
      js = require('gulp-uglify'),
      html =require('gulp-htmlmin')
      babel = require('gulp-babel')
// const { pipe } = require('stdout-stream')
//二、 发布任务
// function fnCopyLib(){
//     return gulp.src('./src/lib/*.js')
//             .pipe(gulp.dest('./js'))
// }
function  fnHtml(){
    return gulp.src("./src/pages/*.html")
        .pipe(html())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest("./dist/pages"))
}
function fnJs(){
    return gulp.src('./src/js/*.js')
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(js())
            .pipe(rename({suffix : ".min"}))
            .pipe(gulp.dest('./dist/js'))
}
function fnCopyLib(){
     return gulp.src('./src/lib/*.js')
     .pipe(gulp.dest('./dist/js'))
}
function fnCopyLibcss(){
    return gulp.src('./src/lib/*.css')
    .pipe(gulp.dest('./dist/css'))
}
function fnImage(){
    return gulp.src("./src/img/*")
        .pipe(imgs())
        .pipe(gulp.dest('./dist/img'))
}
function fnCss(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    // .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
}
function fnCopyIndex(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
}
function fnWatch(){
    gulp.watch('./src/sass/*.scss',fnCss);
    gulp.watch('./src/index.html',fnCopyIndex);
    gulp.watch('./src/js/*.js',fnJs);
    gulp.watch('./src/img/*',fnImage);
    gulp.watch('./src/pages/*.html',fnHtml);
    gulp.watch('./src/lib/*.js',fnCopyLib);
    gulp.watch('./src/lib/*.css',fnCopyLibcss)


    

}
//三、导出模块
exports.css = fnCss;
exports.copy = fnCopyIndex;
exports.default = fnWatch;
exports.img = fnImage;
exports.js = fnJs;
exports.lib = fnCopyLib;
exports.libcss = fnCopyLibcss;
exports.html = fnHtml;

