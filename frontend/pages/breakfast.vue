<script setup lang="ts">
import type {DishesType} from "~/stores/models/recipe.model";

const type: DishesType = "BREAKFAST"
</script>

<template>
  <div>
    <RecipeList :type="type"/>
  </div>
</template>