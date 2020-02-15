var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    // filename: 'index.js'
    filename: 'main.[contenthash].js',
  },
  plugins: [new HtmlWebpackPlugin(
    {
      title: 'fanison',
      template: 'src/assets/index.html'
    }
  )],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};


