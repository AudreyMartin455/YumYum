<script setup lang="ts">
import Heading from "~/components/design-system/Heading.vue";
import {useIngredientStore} from "~/stores/ingredient";
import {useRecipeStore} from "~/stores/recipe";

const ingredientStore = useIngredientStore()
const recipeStore = useRecipeStore()
recipeStore.clearSelectedRecipe()
ingredientStore.getIngredients().catch(error => console.log(error))

</script>

<template>
  <div class="padding-24">
    <Heading variant="h1">Nouveau plat</Heading>

    <RecipeForm dish-type="DISH"/>
  </div>
</template>