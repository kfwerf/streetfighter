var path = require('path');
var webpack = require('webpack');

var phaserModule = path.join(__dirname, '/../node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

var contextDir = __dirname + '/../src';
var outputDir = __dirname + '/../dist';

module.exports = {
  context: contextDir,
  entry: './index.js',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      { test: /pixi\.js/, loader: 'expose?PIXI' },
      { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
      { test: /p2\.js/, loader: 'expose?p2' },
    ],
  },

  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2,
    },
  },

  output: {
    filename: 'app.js',
    publicPath: '/dist/',
    path: outputDir,
  },
};
