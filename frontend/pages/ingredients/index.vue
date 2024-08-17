<script setup lang="ts">
import Heading from "~/components/design-system/Heading.vue";
</script>

<template>
  <div class="padding-xl">
    <div class="flex place-content-between padding-md">
      <Heading :variant="'h1'">Ingrédients</Heading>
      <IngredientForm/>
    </div>
    <IngredientTable/>
  </div>
</template>

<style scoped>

</style>