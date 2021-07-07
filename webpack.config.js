const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

function resolve(dir) {
  return path.resolve(__dirname,dir)
}
module.exports = {
  mode : 'development',
  entry: {
    app: resolve('./src/index.js')
  },
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'public/index.js'
    }),
  ],
  devServer:{
    open:true
  }
};
