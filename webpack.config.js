const path = require('path');
const mode = process.env.NODE_ENV;

module.exports = {
  mode: mode,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: './images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
  }
};
