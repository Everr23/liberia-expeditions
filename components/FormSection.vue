<template>
  <v-sheet class="text-center py-16" color="primary" id="contact-us">
    <div class="text-white text-h4 font-weight-bold mt-8">
      {{ t("Sections.FormSection.Title") }}
    </div>

    <div class="text-center text-h6 mb-6 mt-4">
      {{ t("Sections.FormSection.Subtitle") }}
    </div>

    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            :label="t('Sections.FormSection.Form.Fields.Name')"
            bg-color="transparent"
            flat
            hide-details
            single-line
            variant="outlined"
          />
        </v-col>

        <v-col cols="6">
          <v-text-field
            :label="t('Sections.FormSection.Form.Fields.Email')"
            bg-color="transparent"
            flat
            hide-details
            single-line
            variant="outlined"
          />
        </v-col>

        <v-col cols="6">
          <v-text-field
            :label="t('Sections.FormSection.Form.Fields.Phone')"
            bg-color="transparent"
            flat
            hide-details
            single-line
            variant="outlined"
          />
        </v-col>

        <v-col cols="12">
          <v-textarea
            :label="t('Sections.FormSection.Form.Fields.Message')"
            bg-color="transparent"
            flat
            hide-details
            lines="4"
            variant="outlined"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      :text="t('Sections.FormSection.Form.Button')"
      class="px-10 text-body-1 mt-5"
      color="accent"
      flat
      height="55"
    />
  </v-sheet>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
