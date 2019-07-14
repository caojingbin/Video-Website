module.exports = {
  devServer: {
    port: 6060
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "extraResources": ["./binary/ipfs"]
      }
    }
  }
}