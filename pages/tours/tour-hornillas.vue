<
<template>
  <TourView
    :images="['/assets/tours/tour-hornillas/image-1.png']"
    :total-activities="1"
    :total-attractions="1"
    :total-includes="1"
    :total-recomendations="1"
    :total-schedule="1"
    tour-key="TourHornillas"
  />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "tours",
});
</script>
