const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(js)/, use: 'babel-loader'},
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentWidth: 4,
              // includePaths: ['absolute/path/a', 'absolute/path/b'],
            },
          },
        ],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index_bundle.js"
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./app/index.html"
    })
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
