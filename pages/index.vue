<!-- <template>
  <div>
    <Welcome />
    <Tours />
    <FormContact />
    <ContactInfo />
  </div>
</template> -->

<template>
  <div>Test Renderize</div>
  <br />
  <div>
    <button @click="create">create</button>
    <button @click="save">save</button>
  </div>
</template>

<script lang="ts" setup>
import fs from "fs/promises";
import { createClient } from "@renderize/lib";

const client = createClient({
  apiKey: "rdz_FCqxHSJFZqVjqmvflAEyO1a8t3dV1zQ1UepfhZR7K8",
});
const pdf = ref<ArrayBuffer | null>(null);

const create = async () => {
  console.log("TRY CREATE............");
  const pdfBuffer = await client.renderPdf({
    html: "<h1>Hello, World from Nuxt!</h1>",
    format: "a4", // Optional: 'letter', 'legal', etc.
    orientation: "portrait", // Optional: 'landscape' or 'portrait'
    margin: { top: 10, bottom: 10, left: 10, right: 10 }, // Optional
    responseType: "arrayBuffer", // Optional: 'stream', 'blob', or 'arrayBuffer'
  });
  console.log("CREATE COMPLETE............");
  pdf.value = pdfBuffer;
};
const save = async () => {
  console.log("TRY SAVE............");

  try {
    if (!pdf.value) return;
    await fs.writeFile("output", Buffer.from(pdf.value));
    console.log("CREATE COMPLETE............");
  } catch (err) {
    console.log("CREATE ERROR............");
    console.error(err);
  }
};
</script>
