const path = require("path");

module.exports = {
  entry: "./src/js/app/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./public/javascripts")
  },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     $: "jquery",
  //   })
  // ],
};
