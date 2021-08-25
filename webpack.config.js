const path = require('path');
const HTMLWebapckPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool:'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      '@img': path.resolve(__dirname, './src/img/'),
      '@components': path.resolve(__dirname, './src/Components/'),
      '@import': path.resolve(__dirname, './node_modules/')
    }
  },
  devServer: {
    contentBase: './dist',
    port: 3001,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebapckPlugin({
      title: 'CourseWorkJS',
      template: './index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
          ]
        }
      },

      {
        test: /(\.m.css$)|(\.css$)/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
              options: {
                import: true,
                url : true ,
                modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              }
            },
          },

        ],
        exclude: /\.global.css$/
      },
      {
        test: /\.global.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              import: true,
              url : true ,
              modules: {
                mode: "global",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            }
          },
        ],
        // exclude:  /\.module.css$/,
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
}