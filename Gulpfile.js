
//引入插件
var gulp = require('gulp'),
  sass = require("gulp-sass"),
  filter = require('gulp-filter'),
  connect = require('gulp-connect'),
  cleanCSS = require('gulp-clean-css'),
  browserSync = require("browser-sync").create();

//创建watch任务去检测html文件,其定义了当html改动之后，去调用一个Gulp的Task
gulp.task('watch', function () {
  gulp.watch(['./html/*.html'], ['html']);
  gulp.watch("./src/public/stylesheets/*.scss", ['sass']);
});

//使用connect启动一个Web服务器
// gulp.task('connect', function () {
//   connect.server({
//     root: 'src',
//     livereload: true
//   });
// });

// gulp.task('html', function () {
//   gulp.src('./html/*.html')
//     .pipe(connect.reload());
// });

gulp.task('sass', function () {
    return gulp.src("src/public/stylesheets/style.scss")
        .pipe(sass({sourcemap: true}))
        .pipe(gulp.dest('public/stylesheets'))// Write the CSS & Source maps
        // .pipe(filter('**/style.css')) // Filtering stream to only css files   
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('cssmin', function () {
    return gulp.src("public/stylesheets/*.css")      
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/stylesheets'));
});


//运行Gulp时，默认的Task
gulp.task('default', ['sass','cssmin']);