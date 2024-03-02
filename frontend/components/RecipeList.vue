<script setup lang="ts">
const { type } = defineProps(["type"])


const website = useWebsiteStore()

await callOnce(website.fetch)


</script>

<template>

  <div class="bg-primary">
    <Button label="Nouveau" icon="pi pi-check" iconPos="right" />
  </div>

</template>