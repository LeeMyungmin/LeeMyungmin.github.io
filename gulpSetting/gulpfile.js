var fileinclude = require('gulp-file-include'),
	sass = require("gulp-sass"),
	gulp = require('gulp');

// html파일 인클루드
gulp.task('fileinclude', function() {
	gulp.src(['./app/src/index.html', './app/src/sub/*.html'], {base : './'})
	.pipe(fileinclude({
		prefix: '@@',
		basepath: '@file'
	}))
	.pipe(gulp.dest('./'));
});

// Sass
gulp.task('sass', function(){
	return gulp.src('./app/scssfile/*.scss')
	.pipe(sass({outputStyle : 'compact'}).on('error', sass.logError))
	.pipe(gulp.dest('./app/src/css'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./app/scssfile/*.scss', ['sass']);
});