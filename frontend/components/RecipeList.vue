<script setup lang="ts">
import Heading from "~/components/design-system/Heading.vue";
import {useRecipeStore} from "~/stores/recipe";

const { type } = defineProps(["type"])
const title = () => {
  switch (type) {
    case 'DISH': return 'Plats';
    case 'DESSERT': return 'Desserts';
    case 'BREAKFAST': return 'Petit-déjeuner'
  }
}
const recipeStore = useRecipeStore()
await recipeStore.getRecipes(type).catch(error => console.log(error))
</script>

<template>
  <div class="padding-24">
    <div class="flex place-content-between padding-8">
      <Heading :variant="'h1'">{{title()}}</Heading>
      <Button label="Nouveau" icon="pi pi-plus" iconPos="right" />
    </div>
    <Filters/>
    <div v-if="recipeStore.recipes?.length > 0" class="padding-8 cards">
      <Card v-for="recipe in recipeStore.recipes" style="width: 30rem; overflow: hidden">
        <template #header>
          <NuxtImg style="width:30rem; height: 30rem" :src="recipe.image ? recipe.image : 'default-placeholder.png'"/>
        </template>
        <template #title>{{recipe.label}}</template>
        <template #subtitle>
          <span v-if="recipe.timePrep">Préparation: {{recipe.timePrep}} min <i class="pi pi-hourglass"></i></span>
          <span v-if="recipe.timeCook" class="timeCook">Cuisson: {{recipe.timeCook}} min <i class="pi pi-hourglass"></i></span>
        </template>
        <template #content>
          <Chip style="border: solid 1px #5457cd; color: #5457cd; margin-right: 8px" v-for="ingredient in recipe.amountIngredients" :label="ingredient.ingredient.label" />
        </template>
        <template #footer>
          <div class="flex place-content-end">
            <Button style="margin-right: 16px"icon="pi pi-pencil" />
            <Button icon="pi pi-cart-plus" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style>
.timeCook{
  margin-left: 16px;
}

.cards {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 24px
}
</style>