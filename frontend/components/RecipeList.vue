<script setup lang="ts">
const { type } = defineProps(["type"])


const website = useWebsiteStore()

await callOnce(website.fetch)


</script>

<template>

  <div class="text-amber-600">
    {{type}}
  </div>

</template>