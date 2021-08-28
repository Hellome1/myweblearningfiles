/* 
    第三方插件 gulp-rename
*/
const gulp = require("gulp");
// 将css文件备份到dist/css下
gulp.task("css", function () {
    return gulp.src("css/*.css")
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
})

// 处理js
gulp.task("scripts", function () {
    return gulp.src("js/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
})

// 处理.html
gulp.task("copy-html", function () {
    return gulp.src("*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
})

// 处理data
gulp.task("data", function () {
    return gulp.src("data/*.json")
        .pipe(gulp.dest("dist/data"))
        .pipe(connect.reload());
})

// 处理php
gulp.task("php", function () {
    return gulp.src("php/*.php")
        .pipe(gulp.dest("dist/php"))
        .pipe(connect.reload());
})

// 处理图片
gulp.task("images", function () {
    return gulp.src("images/**/*")
        .pipe(gulp.dest("dist/images"))
        .pipe(connect.reload());
})

// 一次性执行多个任务,4.0.2比3.9.1有更新
exports.build = gulp.series(["copy-html", "images", "data", "css", "scripts", "php"],async function () {
    console.log("项目建立成功");
});

// 建立监听
gulp.task("watch", async () => {
    gulp.watch("css/*.css", gulp.series(["css"]));
    gulp.watch("js/*.js", gulp.series(["scripts"]));
    gulp.watch("*.html", gulp.series(["copy-html"]));
    gulp.watch("data/*.json", gulp.series(["data"]));
    gulp.watch("images/**/*", gulp.series(["images"]));
})

// 启动一个服务器 gulp-connect
const connect = require("gulp-connect");
gulp.task("server", async () => {
    connect.server({
        root: "dist",
        port: 8887,     //0~65535
        livereload: true
    })
})

//启动默认任务
exports.default = gulp.series(["watch", "server"]);