import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'a1_introduction': 'src/a1/introduction.html',
        'a1_numbers': 'src/a1/numbers.html',
        // Agrega más páginas según sea necesario
      },
    },
  },
});
