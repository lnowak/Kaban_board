const path = require("path");
const  Html = require('html-webpack-plugin');

module.exports = {
  entry: ["whatwg-fetch", "./src/js/app.js"],
  output: {
    filename: "js/out.js",
    path: path.resolve(__dirname, "docs")
  },
  devServer: {
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env',
                    '@babel/react',{
                    'plugins': ['@babel/plugin-proposal-class-properties']}]
      }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")()
              ],
            },
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'images',
            outputPath: 'images',
          }
        }
      },
    ]
  },
  plugins: [
    new Html({
        filename: 'index.html',
        template: './src/index.html',
    })
  ]
};
