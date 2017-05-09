var gulp = require('gulp');
var clean = require('gulp-clean');
var each = require('gulp-each');
var fc2json = require('gulp-file-contents-to-json');


function buildFonts(font, name) {
  return gulp.src(['./src/fonts/'+font+'/*.*'])
    .pipe(each(function (content, file, callback) {
      var newContent = new Buffer(content).toString('base64');
      callback(null, newContent);
    }, 'buffer'))
    .pipe(fc2json(name))
    .pipe(each(function (content, file, callback) {
      var newContent = 'this.pdfMake = this.pdfMake || {}; this.pdfMake.vfs = ' + content + ';';
      callback(null, newContent);
    }, 'buffer'))

    .pipe(gulp.dest('dist'));
}

gulp.task('clean', function() {
  return gulp.src('dist/**', {read: false})
    .pipe(clean());
});


gulp.task('build_arial_geo', function () {
  return buildFonts('Arial GEO', 'pdfmake-unicode.js');
});

gulp.task('default', ['build_arial_geo']);