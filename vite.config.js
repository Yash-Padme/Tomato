import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the configuration
export default defineConfig({
  plugins: [react()],
  
  // Optional: Configure path aliases for cleaner imports (e.g., '@' for src)
  resolve: {
    alias: {
      '@': '/src', // Use '@' as an alias for the 'src' directory
    },
  },

  // Optional: Set up a proxy if you need to forward API requests to the backend (MERN)
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Proxy API requests to the Express backend
    },
  },
});
