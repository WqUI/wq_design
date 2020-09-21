const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    contentBase: path.resolve(__dirname, 'dist/index.html'),
    open: true,
    openPage: 'index.html',
    hot: true,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, 'components'),
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, '.docz'),
          path.resolve(__dirname, 'doc-comps')
        ],
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['awesome-typescript-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'wq_design',
      template: 'public/index.html',
      filename: 'index.html',
      favicon: 'public/favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ],
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 2000,
    poll: 1000
  },
  stats: {
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true
  },
  devtool: 'source-map'
}