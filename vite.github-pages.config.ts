import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import path from 'path'

import react from '@vitejs/plugin-react'

const config: UserConfig = {
	base: './',
	build: {
		outDir: 'public/build'
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './resources/js')
		}
	},
	plugins: [
		react()
	]
}

export default defineConfig(config)
