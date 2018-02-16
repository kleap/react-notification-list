const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src/'),
  entry: {
    'react-notification-list': './index.js',
    'react-notification-list.min': './index.js',
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
    }),
  ],
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
