'user strict';

var gulp = require('gulp');
var path = require("path");
var connect = require("gulp-connect");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,"app");


gulp.task("connect",function(){
	connect.server({
		root: ["app"],
		livereload:true,
		middleware: function(connect) {
		      return [connect().use('/bower_components', connect.static('bower_components'))];
		  }
	});
});

gulp.task("default",["connect"]);


// inject bower components
gulp.task('bower', function () {
  return gulp.src(APP_PATH+"/index.html")
    .pipe(wiredep({
      directory: ROOT_PATH + '/bower_components',
      ignorePath: '..'
    }))
});