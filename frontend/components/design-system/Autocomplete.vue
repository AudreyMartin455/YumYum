<script setup lang="ts">
defineProps(['suggestion'])
const value = ref("");
const search = (event: any) => {
  console.log(event)
}
</script>

<template>
  <P-AutoComplete v-model="value" :suggestions="suggestion" @complete="search"/>
</template>

<style scoped>

</style>