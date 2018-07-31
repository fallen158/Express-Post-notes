const path = require("path");

module.exports = {
  entry: "./src/js/app/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./public/javascripts")
  }
  // resolve: {
  //   alias: {
  //     jquery: path.join(__dirname, "./src/js/vendors/jquery.min.js")
  //   }
  // },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     $: "jquery"
  //   })
  // ]
};
