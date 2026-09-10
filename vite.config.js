import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Substitua 'NOME-DO-SEU-REPOSITORIO' pelo nome exato do seu repositório no GitHub
export default defineConfig({
  plugins: [react()],
  base: '/gestao_motoca/', 
})