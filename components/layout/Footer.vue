<template>
  <v-footer
    color="primary"
    class="pa-8 d-flex justify-center align-center text-center flex-column"
  >
    <div class="text-body-1">
      Copyright &copy; {{ new Date().getFullYear() }}
      <span>{{ t("Sections.Footer.RightsReserved") }}</span>
    </div>
    <p class="pt-5">
      {{ t("Sections.Footer.CreatedBy") }}
      <a
        href="https://www.linkedin.com/in/ever-vega-suazo"
        target="_blank"
        style="color: #b48125"
      >
        {{ CREATOR }}
      </a>
    </p>
  </v-footer>
</template>

<script setup lang="ts">
import { CREATOR } from "~/constants";

const { t } = useI18n();
</script>

<style>
a {
  color: #254832;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #8c3f0d;
  text-decoration: underline;
}
</style>
