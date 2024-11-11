<template>
  <v-sheet
    class="d-flex flex-column align-center justify-center py-16 text-center"
    id="contact-info"
  >
    <div class="text-primary text-h4 font-weight-bold">
      {{ t("Sections.ContactUs.Title") }}
    </div>

    <div class="text-h6 mt-7">
      {{ t("Sections.ContactUs.Subtitle") }}
    </div>

    <div class="d-flex flex-1-1-auto flex-wrap ga-6 justify-center mt-10">
      <v-btn
        :text="INFO.phone"
        class="text-primary text-h6"
        height="55"
        prepend-icon="mdi-phone"
        rounded
        variant="tonal"
      />

      <v-btn
        :text="INFO.email"
        class="text-primary text-h6"
        height="55"
        prepend-icon="mdi-email"
        rounded
        variant="tonal"
      />
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
const { t } = useI18n();

const INFO = {
  phone: "+(506) 6194 0884",
  email: "libreriaexpeditions@gmail.com",
};
</script>
