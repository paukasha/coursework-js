const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';


module.exports = {
  entry:  path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),

    filename: production ? '[name].[contenthash].js' : '[name].js',
  },
  devtool:'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              import: true,
              modules: {
                mode: "local",

                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
        include: /\.m\.css$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.m\.css$/,
  },
{
  test: /\.(png|jpg|svg|gif)$/i,
    type: 'asset/resource'
},
{
  test: /\.(woff2|woff)$/i,
  type: 'asset/resource'
}

],
},

resolve: {
  extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
    '@img': path.resolve(__dirname, './src/img/'),
      '@': path.resolve(__dirname, './src/'),
      '@import': path.resolve(__dirname, './node_modules/')
  }
},
plugins: [
  new CleanWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    title: 'Webpack & React',
    template: './src/index.html',
    favicon: './public/favicon.ico'
  }),
  new MiniCssExtractPlugin({
    filename: production ? '[name].[contenthash].css' : '[name].css',
  }),
],
  devServer: {
    port: 3001,
    historyApiFallback: true,

},
mode: production ? 'production' : 'development'
};