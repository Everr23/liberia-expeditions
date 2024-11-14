<template>
  <v-sheet class="py-16">
    <v-container>
      <v-row>
        <div
          class="text-h4 text-center text-primary font-weight-bold w-100 mb-5"
        >
          {{ t(`Tours.${props.tourKey}.Name`) }}
        </div>
      </v-row>
      <v-row>
        <v-col cols="12" md="5">
          <v-container>
            <v-card class="rounded-t-xl pb-5 mx-auto text-left">
              <v-carousel cycle interval="3000">
                <v-carousel-item
                  v-for="image in props.images"
                  :src="image"
                  cover
                  max-height="500"
                />
              </v-carousel>

              <v-card-text>
                <v-chip-group color="primary" column>
                  <template v-for="n in props.totalActivities">
                    <v-chip color="primary" variant="outlined" :disabled="true">
                      {{ t(`Tours.${props.tourKey}.Activities[${n - 1}]`) }}
                    </v-chip>
                  </template>
                </v-chip-group>
              </v-card-text>

              <v-divider class="mx-4 mb-5" />

              <div class="text-medium-emphasis mb-5 ml-4">
                <v-icon color="secondary" icon="mdi-map-marker-radius" start />
                {{ t(`Tours.${props.tourKey}.Location`) }}
              </div>

              <v-divider class="mx-4 mb-5" />
              <div
                v-for="n in props.totalSchedule"
                :key="n"
                class="text-medium-emphasis mb-3 ml-4"
              >
                <v-icon color="secondary" icon="mdi-calendar-clock" start />
                {{ t(`Tours.${props.tourKey}.Schedule[${n - 1}]`) }}
              </div>

              <v-divider class="mx-4 ma-7" />

              <v-card-subtitle class="d-flex">
                <v-btn
                  :text="t(`Tours.${props.tourKey}.Price`)"
                  border
                  color="primary"
                  prepend-icon="mdi-currency-usd"
                  size="large"
                  variant="tonal"
                />
                <v-spacer />
                <v-btn
                  :text="t(`Tours.${props.tourKey}.Duration`)"
                  border
                  color="primary"
                  prepend-icon="mdi-clock-time-five-outline"
                  size="large"
                  variant="tonal"
                />
              </v-card-subtitle>
            </v-card>
          </v-container>
        </v-col>

        <v-col cols="12" md="7">
          <div class="text-h5 text-primary">
            {{ t("Tours.Titles.Description") }}
          </div>
          <v-sheet class="text-body-1 text-medium-emphasis my-5">
            {{ t(`Tours.${props.tourKey}.Description`) }}
          </v-sheet>

          <div class="text-h5 text-primary">
            {{ t("Tours.Titles.Highlights") }}
          </div>
          <div
            v-for="n in props.totalAttractions"
            :key="n"
            class="text-medium-emphasis my-2 mb-3"
          >
            <v-icon color="accent" icon="mdi-circle-medium" start />
            {{ t(`Tours.${props.tourKey}.Attractions[${n - 1}]`) }}
          </div>

          <div class="text-h5 text-primary mt-5">
            {{ t("Tours.Titles.Includes") }}
          </div>
          <div
            v-for="n in props.totalIncludes"
            :key="n"
            class="text-medium-emphasis my-2 mb-3"
          >
            <v-icon color="accent" icon="mdi-circle-medium" start />
            {{ t(`Tours.${props.tourKey}.Includes[${n - 1}]`) }}
          </div>

          <div class="text-h5 text-primary mt-5">
            {{ t("Tours.Titles.Requirements") }}
          </div>
          <div class="text-medium-emphasis my-2 mb-3">
            <v-icon color="accent" icon="mdi-circle-medium" start />
            <label class="text-accent"
              >{{ t("Tours.Titles.RequirementsDetails.Age") }}:</label
            >
            {{ t(`Tours.${props.tourKey}.Requirements.AgeMin`) }}
          </div>
          <div class="text-medium-emphasis my-2 mb-3">
            <v-icon color="accent" icon="mdi-circle-medium" start />
            <label class="text-accent"
              >{{ t("Tours.Titles.RequirementsDetails.Weight") }}:</label
            >
            {{ t(`Tours.${props.tourKey}.Requirements.WeightMax`) }}
          </div>
          <div class="text-medium-emphasis my-2 mb-3">
            <v-icon color="accent" icon="mdi-circle-medium" start />
            <label class="text-accent"
              >{{ t("Tours.Titles.RequirementsDetails.GroupSize") }}:</label
            >
            {{ t(`Tours.${props.tourKey}.Requirements.SizeGroup`) }}
          </div>

          <div class="text-h5 text-primary">
            {{ t("Tours.Titles.Dificulty") }}
          </div>
          <v-sheet class="text-medium-emphasis mt-3 mb-5">
            {{ t(`Tours.${props.tourKey}.Dificulty`) }}
          </v-sheet>

          <div class="text-h5 text-primary mt-5">
            {{ t("Tours.Titles.Recomendations") }}
          </div>
          <div
            v-for="n in props.totalRecomendations"
            :key="n"
            class="text-medium-emphasis my-2 mb-3"
          >
            <v-icon color="accent" icon="mdi-circle-medium" start />
            {{ t(`Tours.${props.tourKey}.Recomendations[${n - 1}]`) }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-sheet
          class="d-flex flex-column align-center justify-center pt-10 text-center w-100"
        >
          <div class="text-primary text-h4 font-weight-bold">
            {{ t("Tours.Titles.DiscoverMoreTours.Title") }}
          </div>
          <v-btn
            :text="t('Tours.Titles.DiscoverMoreTours.Button')"
            to="/#tours"
            prepend-icon="mdi-arrow-left"
            border
            color="primary"
            class="mt-5"
            size="large"
            variant="flat"
          /> </v-sheet
      ></v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const props = defineProps({
  tourKey: {
    type: String,
    required: true,
  },
  totalActivities: { type: Number, required: true },
  totalSchedule: { type: Number, required: true },
  totalAttractions: { type: Number, required: true },
  totalIncludes: { type: Number, required: true },
  totalRecomendations: { type: Number, required: true },
  images: { type: Array<string>, required: true },
});
</script>
