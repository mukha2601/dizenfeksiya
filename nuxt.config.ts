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
          primary: 'green',
        },
      },
    ],
  ],
});
