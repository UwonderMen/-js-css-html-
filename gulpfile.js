//引入本地安装gulp
 var gulp = require("gulp"),
 	concat = require("gulp-concat"),
 	atuoPrivate = require("gulp-autoprefixer"),
 	uglifyJS = require("gulp-uglify"),
 	imagemin = require("gulp-imagemin"),
 	htmlmin = require("gulp-htmlmin"),
 	cssmin = require("gulp-cssmin");

//返回一个对象，可以使用该对象完成许多任务清单

gulp.task("css",function(){
	//定义一个任务
	gulp.src(["./css/change.css","./css/tail.css","./css/content.css"])
	.pipe(atuoPrivate({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	.pipe(concat("content.css"))
	.pipe(cssmin())
	.pipe(gulp.dest("./release/css"))
})

gulp.task("css1",function(){
	//定义一个任务
	gulp.src("./css/base.css")
	.pipe(atuoPrivate({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	.pipe(cssmin())
	.pipe(gulp.dest("./release/css"))
})

gulp.task("scripts",function(){
	//处理js
	gulp.src("./js/*.js")
	.pipe(gulp.dest("./release/js"))
})

gulp.task("uploadImg",function(){

	//压缩upload图片
	gulp.src("./upload/**/*")
	.pipe(imagemin())
	.pipe(gulp.dest("./release/upload"))

})

gulp.task("uploadImg1",function(){

	//压缩upload图片
	gulp.src("./image/*")
	.pipe(imagemin())
	.pipe(gulp.dest("./release/image"))

})

gulp.task("html",function(){

	//压缩HTML
	gulp.src("./index.html")
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest("./release/"))
})

gulp.task("default",["css","css1","scripts","uploadImg","uploadImg1","html"],function(){
	
})