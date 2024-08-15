<script setup lang="ts">
import {useRecipeStore} from "~/stores/recipe";

import Heading from "~/components/design-system/Heading.vue";
import {useIngredientStore} from "~/stores/ingredient";

const route = useRoute()
const recipeStore = useRecipeStore()
recipeStore.getRecipe(route.params.uuid as string)
const ingredientStore = useIngredientStore()
ingredientStore.getIngredients().catch(error => console.log(error))
</script>

<template>
  <div>
    <Heading variant="h1">Modifier Plat</Heading>
    <RecipeForm dish-type="DISH"/>
  </div>
</template>