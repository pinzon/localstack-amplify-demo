const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: "https://localhost.localstack.cloud",
    // port: 4566
  }
})
