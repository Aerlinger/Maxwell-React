module.exports = {
  entry: "./app/views/Main.jsx",
  devtool: 'source-map',
  // debug: true,
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
    ]
  },
  resolve: {
    // extensions: [".webpack.js", ".web.js", ".js"]
  },
  // TODO: This fixes "module not found" error on the "fs" module used by CircuitLoader et. a
  node: {
    fs: "empty"
  }
};
