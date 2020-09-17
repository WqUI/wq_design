const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index'),
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/public/index.html'),
    open: true,
    openPage: './public/index.html',
    hot: true,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
      },
      {
        // 增加对 SCSS 文件的支持
        test: /\.scss$/,
        // SCSS 文件的处理顺序为先 sass-loader 再 css-loader 再 style-loader
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['awesome-typescript-loader']
      },
      {
        test: /\.(svg|png|jpe?g)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'WQ_DESIGN',
      template: 'public/index.html',
      filename: 'public/index.html',
      favicon: 'public/favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new MiniCssExtractPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: 'style/[name].[contenthash:8].css',
      chunkFilename: '[id].css',
    }),
    new OptimizeCssAssetsPlugin(),
    new CleanWebpackPlugin()
  ],
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 2000,
    poll: 1000
  },
  stats: { // 控制台输出日志控制
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true,
  },
  devtool: 'source-map'
};