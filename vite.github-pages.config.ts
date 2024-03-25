import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'

import react from '@vitejs/plugin-react'

const config: UserConfig = {
	base: './',
	build: {
		outDir: 'public/build'
	},
	plugins: [
		react()
	]
}

export default defineConfig(config)
