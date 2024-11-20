import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      include: [
        '**/*.{ts,tsx}', 
      ],
      exclude: [
        '**/*.{interface.ts,enum.ts}',
        '**/node_modules/**',
        '**/vite.config.ts',     
        '**/vite-env.d.ts',     
      ],
    },
  },
});

