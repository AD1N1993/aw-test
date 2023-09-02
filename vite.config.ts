import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: './git@github.com:AD1N1993/aw-test.git',
    plugins: [react()],
})
