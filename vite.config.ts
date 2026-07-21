import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [inspectAttr(), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'data-tips': ['./src/data/tipsData.tsx'],
          'data-bosses': ['./src/data/bossesData.tsx'],
          'data-updates': ['./src/data/updatesData.tsx'],
          'data-troubleshoot': ['./src/data/troubleshootData.tsx'],
          'data-lore': ['./src/data/loreData.tsx'],
          'data-crafting': ['./src/data/craftingData.tsx'],
          'data-skills': ['./src/data/skillsData.tsx'],
          'data-walkthrough': ['./src/data/walkthroughData.tsx'],
          'data-builds': ['./src/data/buildData.tsx'],
          'data-fishing': ['./src/data/fishingData.tsx'],
          'data-armor': ['./src/data/armorData.tsx'],
          'data-weaponsdb': ['./src/data/weaponsDatabaseData.tsx'],
          'data-search': ['./src/data/searchIndex.ts'],
        },
      },
    },
  },
});
