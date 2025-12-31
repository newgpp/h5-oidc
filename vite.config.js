import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // 1. 引入插件

//npm run dev 才走这个代理
export default defineConfig({
  plugins: [
    vue() // 2. 注册插件
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true
      }
    }
  }
})
