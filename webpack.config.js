const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: `${SRC_DIR}/app.js`,
  output: {
    path: APP_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: APP_DIR,
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      title: 'Free of Create-React-App at Last',
      template: `${SRC_DIR}/index.html`,
      filename: `${APP_DIR}/index.html`,
    }),
  ],
};

module.exports = config;
