var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    cssnext = require("gulp-cssnext");

// Load the http module to create an http server.
var http = require('http');

// Load the Ghost Module and Start Ghost

gulp.task('ghost', function () {
var ghost = require('ghost');
process.env.NODE_ENV = 'development';
ghost({ config: __dirname + '/content/config.js' }).then(function (ghostServer) {
    ghostServer.start();

});
});

//set default gulp task
gulp.task('default', ['ghost', 'browser-sync', 'css'] 
  
  );


// Browsersync
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:2360"
    });
      
    gulp.watch("content/themes/casper/assets/css/*.css", ['css']);
    gulp.watch("content/themes/casper/*.hbs, content/themes/casper/partials/*.hbs").on('change', browserSync.reload);
    
    
});
 
 
// cssnext 
gulp.task("css", function() {
  gulp.src("src/styles.css")
    .pipe(cssnext({
        compress: true
    }))
    .pipe(gulp.dest("content/themes/casper/assets/css/"))
});