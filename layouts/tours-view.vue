<template>
  <v-app>
    <v-layout>
      <v-main>
        <AppBar />

        <NuxtPage />

        <v-spacer />

        <AppFooter color="primary" />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts"></script>

<style>
.footer-bottom {
  bottom: 0;
  position: fixed;
  width: 100%;
}
</style>
