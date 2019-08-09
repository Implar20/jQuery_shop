const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function getHtmlConfig(name) {
  return {
    template: "./src/view/" + name + ".html",
    filename: "view/" + name + ".html",
    chunks: ["common", name],
    inject: true
  };
}

module.exports = {
  mode: "development",
  entry: {
    index: "./src/page/index/index.js",
    login: "./src/page/login/index.js",
    common: "./src/page/common/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  devServer: {

  },
  externals: {
    jquery: "jQuery"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: "initial",
          minSize: 0,
          minChunks: 2,
          filename: "js/base.js",
          name: "common"
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin(getHtmlConfig("index")),
    new HtmlWebpackPlugin(getHtmlConfig("login")),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf)\??.*$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 200,
              name: "resoure/[name].[ext]"
            }
          }
        ]
      }
    ]
  }
};
