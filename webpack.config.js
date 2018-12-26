const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ctx = path.resolve(__dirname, 'src');

const DIST_DIR = path.resolve(__dirname, 'dist')
const VIEWS_DIR = `${ctx}/views`
const VIEW_EXT = /\.html$/

// Read all files in src/view folder
// Pick only *.html files
const views = fs.readdirSync(VIEWS_DIR).filter(fileName => VIEW_EXT.test(fileName));

// Create custom webpack-plugin for every available page to render it as *.html
const htmlViews = views.map(fileName => {
  const tpl = path.join(VIEWS_DIR, fileName)
  const html = fileName

  return new HtmlWebpackPlugin({
      filename: html,
      template: tpl,
      inject: true,
      xhtml: true,
  })
});

module.exports = {
  context: ctx,

  entry: {
    main: './scripts/index.ts'
  },

  output: {
    path: DIST_DIR,
    filename: '[name].[hash:8].js',
    publicPath: '/',
  },
  
  devServer: {    
    port: 3000,
    contentBase: DIST_DIR,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },  

  devtool: 'inline-source-map',

  plugins: [
    new CleanWebpackPlugin(DIST_DIR, {}),
    new webpack.HotModuleReplacementPlugin(),
    ...htmlViews
  ],
};