import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      constants: "/src/constants",
      utils: "/src/utils",  
      assets: "/src/assets",  
      types: "/src/types",  
      hooks: "/src/hooks"
    }
  }
})
