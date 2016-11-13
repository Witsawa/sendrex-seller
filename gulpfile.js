var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var webpack = require("webpack");
var path = require('path');
var yargs = require('yargs');
var rename = require('gulp-rename');
var template = require('gulp-template');

var root = 'www';

var paths = {
  sass: ['./scss/**/*.scss']
};

var resolveToComponents = function(glob){
  glob = glob || ''
  return path.join(root, 'app/components', glob); // app/components/{glob}
};
var resolveToPages = function(glob){
  glob = glob || ''
  return path.join(root, 'app/pages', glob); // app/components/{glob}
};

gulp.task('serve:before', ['default','watch']);
gulp.task('default', ['webpack:build-dev']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch([
    "www/app/**/*",
    "!www/lib/**/*"
  ], ['webpack:build-dev']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

var webpackConfig = require("./webpack.config.js");
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
  // run webpack
  devCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build-dev", err);
    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('component', function() {
  function cap(val){
    return val.charAt(0).toUpperCase() + val.slice(1);
  }
  var name = yargs.argv.name;
  var parentPath = yargs.argv.parent || '';
  var destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(path.join(__dirname, 'generator', 'component/**/*.**'))
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename(function(path){
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('page', function() {
  function cap(val){
    return val.charAt(0).toUpperCase() + val.slice(1);
  }
  var name = yargs.argv.name;
  var parentPath = yargs.argv.parent || '';
  var destPath = path.join(resolveToPages(), parentPath, name);

  return gulp.src(path.join(__dirname, 'generator', 'page/**/*.**'))
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename(function(path){
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});
