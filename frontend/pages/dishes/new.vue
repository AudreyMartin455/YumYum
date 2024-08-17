<script setup lang="ts">
import Heading from "~/components/design-system/Heading.vue";
import {useRecipeStore} from "~/stores/recipe";

const recipeStore = useRecipeStore()
recipeStore.clearSelectedRecipe()

</script>

<template>
  <div class="padding-24">
    <Heading variant="h1">Nouveau plat</Heading>

    <RecipeForm dish-type="DISH"/>
  </div>
</template>