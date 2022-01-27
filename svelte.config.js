/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel';
import { resolve } from 'path';

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: vercel(),
    vite: {
      resolve: {
        alias: {
          $data: resolve('./src/data/'),
          $stores: resolve('./src/stores/')
        }
      }
    }
  }
};

export default config;
