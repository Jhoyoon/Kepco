const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  entry:{
      main : "./src/client/js/main.js",
      getDayLpDataDr : "./src/client/js/getDayLpDataDr.js",
    },
  mode : "development",
  watch : true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/styles.css",
    }),
  ],
  output: { 
    filename:"[name].js",
    path: path.resolve(__dirname, "assets","js"),
    clean : true
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        use : {
          loader : "babel-loader",
          options : {
            presets : [["@babel/preset-env" , {targets : "defaults"}]],
          }
        }
      },
      {
        test : /\.scss$/,
        use : [MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
      }
    ]
  }
};