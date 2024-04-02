<script setup lang="ts">
import {useRecipeStore} from "~/stores/recipe";

const recipeStore = useRecipeStore()
</script>

<template>
  <div>
    <Filters/>
    <div v-if="recipeStore.recipes?.length > 0" class="padding-8 cards">
      <Card v-for="recipe in recipeStore.recipes" style="width: 30rem; overflow: hidden">
        <template #header>
          <NuxtImg style="width:30rem; height: 30rem" :src="recipe.image ? recipe.image : 'default-placeholder.png'"/>
        </template>
        <template #title>{{ recipe.label }}</template>
        <template #subtitle>
          <span v-if="recipe.timePrep">Préparation: {{ recipe.timePrep }} min <i class="pi pi-hourglass"></i></span>
          <span v-if="recipe.timeCook" class="timeCook">Cuisson: {{ recipe.timeCook }} min <i
              class="pi pi-hourglass"></i></span>
        </template>
        <template #content>
          <Chip class="chip" v-for="ingredient in recipe.amountIngredients" :label="ingredient.ingredient.label"/>
        </template>
        <template #footer>
          <div class="flex place-content-end">
            <Button style="margin-right: 16px" icon="pi pi-pencil"/>
            <Button icon="pi pi-cart-plus"/>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style>
.chip {
  border: solid 1px #5457cd;
  color: #5457cd;
  margin-right: 8px
}

.timeCook {
  margin-left: 16px;
}

.cards {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 24px
}
</style>