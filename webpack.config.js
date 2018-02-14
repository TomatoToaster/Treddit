var webpack = require('webpack');
var path = require('path');
var HtmlWebPackPlugin = require('html-webpack-plugin');

var APP_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: SRC_DIR + '/app.js',
  output: {
    path: APP_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        use:'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: APP_DIR
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      title: 'Free of Create-React-App at Last',
      template: SRC_DIR + '/index.html',
      filename: APP_DIR + '/index.html'
    })
  ]
}

module.exports = config;
