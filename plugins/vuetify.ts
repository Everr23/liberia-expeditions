import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#254832",
            secondary: "#b48125",
            accent: "#8c3f0d",
          },
        },
      },
    },
    locale: {
      locale: "es",
    },
  });
  app.vueApp.use(vuetify);
});
