// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "disinfection",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Bu sayt zararkunandalarni yo'qotish uchun xizmat qiladi",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/logo.ico" },
      ],
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
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
        name: "UZ",
        file: "uz-UZ.json",
      },
      {
        code: "ru-RU",
        iso: "ru-RU",
        name: "RU",
        file: "ru-RU.json",
      },
    ],
    defaultLocale: "uz-UZ",
  },
});
