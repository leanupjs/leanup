import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'media',
  extract: {
    include: ['src/**/*.{html,svelte,ts,tsx,vue}'],
  },
  plugins: [require('windicss/plugin/filters')],
});
