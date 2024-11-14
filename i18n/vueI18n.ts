import { LANGS } from "~/constants";
import en from "./locales/en.json";
import es from "./locales/es.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: LANGS.en,
  messages: {
    en,
    es,
  },
}));
