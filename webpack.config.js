'use strict';

const NODE_ENV = process.env.NODE_ENV || 'production';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    bg: './modules/bg.js',
    cs: './modules/cs.js',
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel?presets[]=es2015',
    }],
  },
  plugins: [],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js'],
  },
  resolveLoader: {
    root: path.resolve(__dirname, 'node_modules'),
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js'],
  },
  devtool: 'development' === NODE_ENV ? 'source-map' : null,
};

if ('production' === NODE_ENV) {
  const uglyPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true,
      unsafe: true,
    },
  });

  module.exports.plugins.push(uglyPlugin);
}
