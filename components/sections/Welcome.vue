<template>
  <v-sheet
    class="d-flex justify-center align-center text-center flex-column pa-5"
    color="primary"
    id="home"
    min-height="600"
  >
    <div class="text-h3 font-weight-bold mb-8 mt-4">
      {{ t("Sections.Welcome.Title") }}
    </div>

    <p
      class="text-h4 font-weight-light mb-5 text-left text-secondary"
      style="max-width: 700px"
    >
      <b>{{ t("Sections.Welcome.Subtitle") }}</b>
    </p>

    <div
      class="text-h6 font-weight-light mb-3 text-left"
      style="max-width: 700px"
    >
      {{ t("Sections.Welcome.Paragraph-1") }}
    </div>

    <div
      class="text-h6 font-weight-light mb-8 text-left"
      style="max-width: 700px"
    >
      {{ t("Sections.Welcome.Paragraph-2") }}
      <div class="d-flex ga-5 flex-1-1-auto flex-wrap justify-center px-4 mt-8">
        <v-text-field
          :label="t('Sections.Welcome.Contact.Label')"
          flat
          hide-details
          rounded
          single-line
          style="min-width: 300px"
          variant="solo"
        />

        <v-btn
          :block="$vuetify.display.mdAndDown"
          :text="t('Sections.Welcome.Contact.Button')"
          color="accent"
          flat
          height="55"
          rounded
        />
      </div>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
