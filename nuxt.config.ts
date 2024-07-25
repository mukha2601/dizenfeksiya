// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@vueuse/motion/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Unbounded: "200..900",
        },
      },
    ],
    [
      "@nuxt/ui",
      {
        ui: {
          primary: "green",
        },
      },
    ],
    "@nuxtjs/i18n",
  ],

  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    locales: [
      {
        code: "uz-UZ",
        iso: "uz-UZ",
        name: "Uzbek",
        file: "uz-UZ.json",
      },
      {
        code: "ru-RU",
        iso: "ru-RU",
        name: "Russian",
        file: "ru-RU.json",
      },
    ],
    defaultLocale: "uz-UZ",
  },
});
