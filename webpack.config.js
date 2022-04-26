const path = require('path');
const webpack = require('webpack');
const { InjectManifest } = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new InjectManifest({
      swSrc: path.resolve('src/service-worker.js'),
      swDest: path.resolve( path.join(__dirname, 'dist'), 'service-worker.js'),
      maximumFileSizeToCacheInBytes: 50000000,
      include: [/\.css$/, /\.js$/],
    }),
    new HtmlWebpackPlugin({
      title: "Covid Tracker",
      template: path.resolve('src/index.html'),
      filename: path.resolve('dist/index.html'),
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    hot: true,
  },
};
