const path = require("path");
console.log(path.resolve(__dirname, "./assets/js"));
module.exports = {
  entry: "./src/client/js/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./assets/js"),
  },
};