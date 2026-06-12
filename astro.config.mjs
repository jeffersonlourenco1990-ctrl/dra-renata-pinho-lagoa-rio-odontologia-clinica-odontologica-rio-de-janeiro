import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://dra-renata-pinho-lagoa-rio-odontologia-clinica-odontologica-rio-de-janeiro.netlify.app',
  output: 'static',
  devToolbar: { enabled: false },
});
