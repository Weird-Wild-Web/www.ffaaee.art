import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', 'nuxt-content-assets', '@nuxtjs/i18n', '@pinia/nuxt'],
  hooks: {
    close: () => {
      process.exit(0);
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'curentLocale',
      redirectOn: 'root',
    },
  },
});