const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { title } = require("process");
module.exports = {
  mode: "development",
  entry: { bundle: path.resolve(__dirname, "src/index.js") },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpeg|gif|jpg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "hello from webpack",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
