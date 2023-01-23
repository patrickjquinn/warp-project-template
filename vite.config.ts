import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import { svelte } from '@sveltejs/vite-plugin-svelte';

const aliases = ViteAliases();
// const preprocess = require('svelte-preprocess')

export default defineConfig({
  plugins: [svelte(), aliases],
  publicDir: './assets/',
  build: {
    outDir: './public/'
  }
})