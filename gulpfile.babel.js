'use strict';

import path from 'path';
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const webpackConfig = require('./webpack.config.js');

function copyChrome () {
  return gulp.src(path.join(__dirname, 'src/plugins/chrome/**'))
    .pipe(gulp.dest('./build'));
}

gulp.task('webpack:build', (cb) => {
  webpack(Object.create(webpackConfig), (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({ colors: true }));
    cb();
  });
});

gulp.task('webpack:server', () => {
  const compiler = webpack(webpackConfig);

  new WebpackDevServer(
    compiler,
    {
      contentBase: `${__dirname}/src/public`,
      publicPath: '/brex',
      stats: {
        colors: true,
      },
    },
  )
    .listen(3000, 'localhost', (err) => {
      if (err) {
        throw new gutil.PluginError('webpack-dev-server', err);
      }

      gutil.log('[webpack-dev-server]', 'http://localhost:3000/webpack-dev-server/index.html');
    });
});

const serve = gulp.series(
  copyChrome,
  'webpack:build',
  'webpack:server',
);

const chromeTask = gulp.series(copyChrome);


gulp.task('serve', serve);
gulp.task('chrome', chromeTask);
gulp.task('default', chromeTask);
