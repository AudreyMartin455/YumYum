<script setup lang="ts">
const { type } = defineProps(["type"])


const website = useWebsiteStore()

await callOnce(website.fetch)


</script>

<template>

  <div>
    {{type}}
  </div>

</template>