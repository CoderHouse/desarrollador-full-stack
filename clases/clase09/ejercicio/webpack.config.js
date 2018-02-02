var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname  + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        include: [path.join(__dirname, 'src')],
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  }
};