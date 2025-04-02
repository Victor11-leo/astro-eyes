// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro'
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [
      sanity({
        projectId: 'l0foa61x',
        dataset: 'production',        
        useCdn: false,
        studioBasePath:'/studio',
        stega:{
          studioUrl:'/studio'
        }
      }), 
      react()
    ],
  })