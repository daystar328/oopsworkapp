const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    bundle: './public/app.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    contentBase: './public',
    historyApiFallback: true
  }
}
