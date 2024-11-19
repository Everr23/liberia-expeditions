import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxtjs/i18n",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  i18n: {
    vueI18n: "./i18n/vueI18n.ts",
    defaultLocale: "en",
    locales: ["en", "es"],
    strategy: "no_prefix",
  },
  components: [
    { path: "components/layout", global: true, pathPrefix: false },
    { path: "components/sections", global: true, pathPrefix: false },
    { path: "components/shared", global: true, pathPrefix: false },
  ],
});
