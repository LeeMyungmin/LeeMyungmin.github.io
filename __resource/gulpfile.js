var sass = require("gulp-sass"),
	gulp = require('gulp');

// Sass
gulp.task('sass', function(){
	return gulp.src('./scss/*.scss')
	.pipe(sass({outputStyle : 'compact'}).on('error', sass.logError))
	.pipe(gulp.dest('../assets/css'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./app/scssfile/*.scss', ['sass']);
});