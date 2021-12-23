const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const webpack = require("webpack");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new NodePolyfillPlugin(),
      new webpack.IgnorePlugin({
        resourceRegExp: /^electron$/,
      }),
    ],
  });
};
