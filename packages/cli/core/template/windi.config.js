import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['src/**/*.{html,svelte,ts,tsx,vue}'],
  },
});
