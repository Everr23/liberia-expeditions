<template>
  <v-sheet class="py-16">
    <v-container>
      <v-row>
        <div
          class="text-h4 text-center text-primary font-weight-bold w-100 mb-5"
        >
          {{ t("Tours.BuenaVistaRincon.Name") }}
        </div>
      </v-row>
      <v-row>
        <v-col cols="12" md="5">
          <v-container>
            <v-row>
              <v-card class="rounded-t-xl pb-5 mx-auto text-left">
                <v-carousel cycle interval="3000">
                  <v-carousel-item
                    cover
                    max-height="500"
                    src="../../public/assets/tours/buena-vista-del-rincon/canopy-congo.jpg"
                  />

                  <v-carousel-item
                    cover
                    max-height="500"
                    src="../../public/assets/tours/buena-vista-del-rincon/volcan-arenal.jpeg"
                  />

                  <v-carousel-item
                    cover
                    max-height="500"
                    src="../../public/assets/tours/buena-vista-del-rincon/rafting.jpg"
                  />
                </v-carousel>

                <v-card-text>
                  <v-chip-group color="primary" column>
                    <template v-for="n in 6">
                      <v-chip
                        color="primary"
                        variant="outlined"
                        :disabled="true"
                      >
                        {{ t(`Tours.BuenaVistaRincon.Activities[${n - 1}]`) }}
                      </v-chip>
                    </template>
                  </v-chip-group>
                </v-card-text>

                <v-divider class="mx-4 mb-5" />

                <div class="text-medium-emphasis mb-5 ml-4">
                  <v-icon
                    color="secondary"
                    icon="mdi-map-marker-radius"
                    start
                  />
                  {{ t("Tours.BuenaVistaRincon.Location") }}
                </div>

                <v-divider class="mx-4 mb-5" />
                <div
                  v-for="n in 2"
                  :key="n"
                  class="text-medium-emphasis mb-3 ml-4"
                >
                  <v-icon color="secondary" icon="mdi-calendar-clock" start />
                  {{ t(`Tours.BuenaVistaRincon.Schedule[${n - 1}]`) }}
                </div>

                <v-divider class="mx-4 ma-7" />

                <v-card-subtitle class="d-flex">
                  <v-btn
                    :text="t('Tours.BuenaVistaRincon.Price')"
                    border
                    color="primary"
                    prepend-icon="mdi-currency-usd"
                    size="large"
                    variant="tonal"
                  />
                  <v-spacer />
                  <v-btn
                    :text="t('Tours.BuenaVistaRincon.Duration')"
                    border
                    color="primary"
                    prepend-icon="mdi-clock-time-five-outline"
                    size="large"
                    variant="tonal"
                  />
                </v-card-subtitle>
              </v-card>
            </v-row>
          </v-container>
        </v-col>

        <v-col cols="12" md="7">
          <div class="text-h5 text-primary">
            {{ t("Tours.Titles.Description") }}
          </div>
          <v-sheet class="text-body-1 text-medium-emphasis my-5">
            {{ t("Tours.BuenaVistaRincon.Description") }}
          </v-sheet>

          <div class="text-h5 text-primary">
            {{ t("Tours.Titles.Highlights") }}
          </div>
          <div v-for="n in 3" :key="n" class="text-medium-emphasis my-2 mb-3">
            <v-icon color="accent" icon="mdi-circle-medium" start />
            {{ t(`Tours.BuenaVistaRincon.Attractions[${n - 1}]`) }}
          </div>

          <div class="text-h5 text-primary mt-5">
            {{ t("Tours.Titles.Includes") }}
          </div>
          <div v-for="n in 3" :key="n" class="text-medium-emphasis my-2 mb-3">
            <v-icon color="accent" icon="mdi-circle-medium" start />
            {{ t(`Tours.BuenaVistaRincon.Includes[${n - 1}]`) }}
          </div>

          <div class="text-h5 text-primary mt-5">
            {{ t("Tours.Titles.Requirements") }}
          </div>
          <div class="text-medium-emphasis my-2 mb-3">
            <v-icon color="accent" icon="mdi-circle-medium" start />
            <label class="text-accent"
              >{{ t("Tours.Titles.RequirementsDetails.Age") }}:</label
            >
            {{ t("Tours.BuenaVistaRincon.Requirements.AgeMin") }}
          </div>
          <div class="text-medium-emphasis my-2 mb-3">
            <v-icon color="accent" icon="mdi-circle-medium" start />
            <label class="text-accent"
              >{{ t("Tours.Titles.RequirementsDetails.Weight") }}:</label
            >
            {{ t("Tours.BuenaVistaRincon.Requirements.WeightMax") }}
          </div>
          <div class="text-medium-emphasis my-2 mb-3">
            <v-icon color="accent" icon="mdi-circle-medium" start />
            <label class="text-accent"
              >{{ t("Tours.Titles.RequirementsDetails.GroupSize") }}:</label
            >
            {{ t("Tours.BuenaVistaRincon.Requirements.SizeGroup") }}
          </div>

          <div class="text-h5 text-primary">
            {{ t("Tours.Titles.Dificulty") }}
          </div>
          <v-sheet class="text-medium-emphasis mt-3 mb-5">
            {{ t("Tours.BuenaVistaRincon.Dificulty") }}
          </v-sheet>

          <div class="text-h5 text-primary mt-5">
            {{ t("Tours.Titles.Recomendations") }}
          </div>
          <div v-for="n in 1" :key="n" class="text-medium-emphasis my-2 mb-3">
            <v-icon color="accent" icon="mdi-circle-medium" start />
            {{ t(`Tours.BuenaVistaRincon.Recomendations[${n - 1}]`) }}
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
definePageMeta({
  layout: "tours-view",
});

const { t } = useI18n();
</script>

<style>
.blur-container {
  background-image: url("/assets/tours/buena-vista-del-rincon/canopy-congo.jpg");
  background-size: cover;
  background-position: center;
  height: 150px;
  width: 100%;
  position: relative;
}

.blurred-overlay {
  background-color: rgba(
    255,
    255,
    255,
    0.3
  ); /* Semi-transparent overlay color */
  backdrop-filter: blur(8px); /* Blurs the background behind the overlay */
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>
