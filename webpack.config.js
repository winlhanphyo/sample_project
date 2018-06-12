var webpack = require('webpack');
var path = require('path');
module.exports = {
   entry: './main.js',
   output: {
      // path:'/',
      filename: 'index.js',
   },
   resolve: {
    extensions: ['.js', '.jsx']
  },
   devServer: {
      // inline: false,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
               test: /\.css$/,
               use: [
                 'style-loader',
                 'css-loader'
               ]
         }
      ]
   }
}