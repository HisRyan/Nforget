const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "production",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'tsUtil',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            }
          },
          {
            loader: "ts-loader",
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
}
