<script setup lang="ts">
const ingredientStore = useIngredientStore()
await ingredientStore.getIngredients().catch(error => console.log(error))
</script>

<template>
  <div>
    <DataTable :value="ingredientStore.ingredients">
      <Column field="uuid" header="ID"></Column>
      <Column field="label" header="Label"></Column>
      <Column field="tags" header="Tags"></Column>
    </DataTable>
  </div>
</template>

<style scoped>

</style>