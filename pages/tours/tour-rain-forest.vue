<template>
  <TourView
    :images="tour.images"
    :total-activities="tour.totalActivities"
    :total-attractions="tour.totalAttractions"
    :total-includes="tour.totalIncludes"
    :total-recommendations="tour.totalRecommendations"
    :total-schedule="tour.totalSchedule"
    :tourKey
  />
</template>

<script lang="ts" setup>
import { TOURS } from "~/constants";

const tourKey = "TourRainForest";
const tour = TOURS.find((t) => t.key === tourKey) as ITour;
</script>
