const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src/'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 5000,
    contentBase: path.join(__dirname, '/dist'),
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
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
