const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function override(config, env) {
  if (env === "production") {
    // For production build, disable source maps
    config.devtool = false; // Set to false to completely disable source maps
  }

  config.plugins = config.plugins.map((plugin) => {
    if (plugin.constructor.name === "MiniCssExtractPlugin") {
      return new MiniCssExtractPlugin({
        filename: "static/css/soltip-widget.css", // Customize the CSS file name here
        chunkFilename: "static/css/soltip-widget.[id].css",
      });
    }
    return plugin;
  });

  // Modify the output configuration for JavaScript files
  config.output = {
    filename: "static/js/soltip-widget.js",
    chunkFilename: "static/js/soltip-widget.[name].js",
    path: path.resolve(__dirname, "build"),
  };

  return config;
};
