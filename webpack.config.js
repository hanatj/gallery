const path = require('path');

module.exports = {
<<<<<<< 16bd60f489d7c3816837e00158fc90fcf3abad30
  entry: './src/views/index.js',
=======
  entry: './views/index.js',
>>>>>>> main structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: path.resolve(__dirname, 'src/client/')
        }
      }]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true
  }
};
