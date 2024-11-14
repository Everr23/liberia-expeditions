<template>
  <TourView
    :images="[
      '/assets/tours/tour-buena-vista-del-rincon/canopy-congo.jpg',
      '/assets/tours/tour-buena-vista-del-rincon/volcan-arenal.jpeg',
      '/assets/tours/tour-buena-vista-del-rincon/rafting.jpg',
    ]"
    :total-activities="6"
    :total-attractions="3"
    :total-includes="3"
    :total-recomendations="1"
    :total-schedule="2"
    tour-key="TourBuenaVistaRincon"
  />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "tours",
});
</script>
