import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'a1/introduction': 'src/a1/introduction.html',
        'a1/numbers': 'src/a1/numbers.html',
        // Agrega más páginas según sea necesario
      },
    },
  },
});
