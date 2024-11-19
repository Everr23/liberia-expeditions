<template>
  <div class="header-top">
    <v-app-bar color="secondary">
      <template #title>
        <div
          class="d-inline-flex align-center text-h5 font-weight-medium my-5 text-primary cursor-pointer"
          @click="navigateTo('/')"
        >
          <img
            alt="Logo"
            height="100"
            src="/assets/logos/liberia-expeditions.png"
          />
          <template v-if="$vuetify.display.mdAndUp">
            {{ t("LiberiaExpeditions.Name") }}
          </template>
        </div>
      </template>

      <template v-if="$vuetify.display.mdAndUp" #append>
        <div class="hidden-sm-and-down">
          <v-btn
            v-for="item in menu"
            :to="item.section"
            class="text-body-1"
            variant="plain"
          >
            {{ t(item.titleKey) }}
          </v-btn>
        </div>
      </template>
      <v-btn
        @click="toggleLanguage()"
        class="mr-6"
        color="accent"
        variant="outlined"
      >
        {{ locale === ELangs.en ? t("I18nSwitch.EN") : t("I18nSwitch.ES") }}
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import { ELangs, MENU } from "~/constants";

const { t, locale, setLocale } = useI18n();

const menu = ref(MENU);

function toggleLanguage() {
  setLocale(locale.value === ELangs.en ? ELangs.es : ELangs.en);
}
</script>

<style>
.header-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px;
  z-index: 1000;
}
</style>
