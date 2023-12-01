// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/assets/default.scss", // path to your style.css file
  ],
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: ["defineStore"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
