// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
