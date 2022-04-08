const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        caloric_need: resolve(__dirname, 'pages/caloric_need/index.html'),
        macronutrient_need: resolve(__dirname, 'pages/macronutrient_need/index.html'),
        organize_meal: resolve(__dirname, 'pages/organize_meal/index.html')
      }
    }
  }
})