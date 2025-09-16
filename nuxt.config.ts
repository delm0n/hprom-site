// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // для гихаб
  ssr: false, // если не нужен SSR (для SPA-режима)
  app: {
    baseURL: '/hprom-site/',

  },

  modules: [
    // npm i pinia @pinia/nuxt
    '@pinia/nuxt',
    // npx nuxi@latest module add image
    '@nuxt/image',
    // npx nuxi@latest module add nuxt-viewport
    "nuxt-viewport",
    // npx nuxi@latest module add swiper
    'nuxt-swiper'],

  css: [
    "~/assets/styles/_fonts.scss", // npm install -D sass-embedded
    "~/assets/styles/_main.scss",
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
          additionalData: '@use "~/assets/styles/_variables.scss" as *;'
        }
      }
    }
  },

  image: {
    provider: 'local',
    // Параметры адаптивных изображений
    screens: {
      'xs': 320,
      'sm': 576,
      'md': 768,
      'lg': 992,
      'xl': 1200,
      'xxl': 1536,
    },
  },

  viewport: {
    breakpoints: {
      desktop: 992,
      desktopMedium: 1200,
      desktopWide: 1440,

      mobile: 320,
      mobileMedium: 475,
      mobileWide: 576,

      tablet: 769,
    },
  },

  swiper: {
    bundled: false,
  },

  nitro: {
    preset: 'static', // Это важно для генерации статики
  },
})
