const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'example/src/'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'react-notification-list.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
      {
        test: /.js?$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      }],
  },
};
