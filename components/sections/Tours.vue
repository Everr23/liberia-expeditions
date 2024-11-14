<template>
  <v-sheet id="tours" class="text-center py-16" min-height="800">
    <div class="text-h4 font-weight-bold text-primary">
      {{ t("Sections.Tours.Title") }}
    </div>

    <div class="text-h5 text-medium-emphasis mt-5 mb-5">
      {{ t("Sections.Tours.Subtitle") }}
    </div>

    <v-container>
      <v-row>
        <v-col
          v-for="tour in TOURS"
          :key="tour.key"
          class="pa-5"
          cols="12"
          md="4"
        >
          <v-card
            class="bg-white rounded-t-xl pb-5 mx-auto text-left"
            max-width="500"
          >
            <v-carousel>
              <v-carousel-item
                v-for="image in tour.images"
                :src="image"
                cover
                max-height="500"
              />
            </v-carousel>

            <v-card-title class="bg-secondary text-center text-uppercase">
              {{ t(`Tours.${tour.key}.Name`) }}
            </v-card-title>

            <v-card-text>
              <v-chip-group color="primary" column>
                <template v-for="activitie in tour.totalActivities">
                  <v-chip variant="outlined" :disabled="true">
                    {{ t(`Tours.${tour.key}.Activities[${activitie - 1}]`) }}
                  </v-chip>
                </template>
              </v-chip-group>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <div class="ml-4 mt-3 text-medium-emphasis">
              <v-icon color="secondary" icon="mdi-map-marker-radius" />
              {{ t(`Tours.${tour.key}.Location`) }}
            </div>

            <v-card-text class="d-flex text-secondary">
              <p>
                {{ t(`Tours.${tour.key}.Introduction`) }}
              </p>
            </v-card-text>

            <v-card-subtitle class="d-flex">
              <v-btn
                :text="t(`Tours.${tour.key}.Price`)"
                border
                color="primary"
                prepend-icon="mdi-currency-usd"
                variant="tonal"
              />
              <v-spacer />
              <v-btn
                :text="t(`Tours.${tour.key}.Duration`)"
                border
                color="primary"
                prepend-icon="mdi-clock-time-five-outline"
                variant="tonal"
              />
            </v-card-subtitle>

            <v-divider class="mx-4 my-4" />

            <v-card-actions>
              <v-btn
                :text="t('Sections.Tours.Explore')"
                :to="tour.to"
                append-icon="mdi-arrow-right"
                block
                border
                color="primary"
                size="large"
                variant="flat"
              />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import { TOURS } from "~/constants";

const { t } = useI18n();
</script>
