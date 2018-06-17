let gulp = require('gulp')
let sass = require('gulp-sass')
let browserSync = require('browser-sync').create()

gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: './',
            // directory: true
        }
    })
})

gulp.task('sass', () => { // create a gulp task called sass
    return gulp.src('app/scss/**/*.scss')  // tells gulp what files are needed
        .pipe(sass()) // sends the files through gulp sass
        .pipe(gulp.dest('app/css')) // destination of files
        .pipe(browserSync.reload({
            stream: true
        }))
})

// Gulp watch syntax
// gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 

gulp.task('watch', ['browserSync'], () => {
    gulp.watch('app/scss/**/*.scss', ['sass'])
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
})