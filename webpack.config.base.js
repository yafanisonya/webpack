const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'fanison',
      template: 'src/assets/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
         'file-loader',
        ],
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader','stylus-loader'],
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader','less-loader'],
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass'),
            }
          }
        ],
      },
    ],
  },
};


