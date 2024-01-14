import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'a1/introduction': 'src/a1/introduction.html',
        // Agrega más páginas según sea necesario
      },
    },
  },
});
