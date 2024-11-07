// https://nuxt.com/docs/api/configuration/nuxt-config
const config = {
  runtimeConfig: {
    env: "",
    public: {
      baseUrl: "",
      websiteName: "",
      websiteDescription: "",
    },
  },
  compatibilityDate: "2024-04-03",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/html-validator", "nuxt-swiper"],
};

export default defineNuxtConfig(config);
