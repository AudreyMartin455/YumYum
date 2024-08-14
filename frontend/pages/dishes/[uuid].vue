<script setup lang="ts">
import {useRecipeStore} from "~/stores/recipe";

import Heading from "~/components/design-system/Heading.vue";

const route = useRoute()
const recipeStore = useRecipeStore()
recipeStore.getRecipe(route.params.uuid)
</script>

<template>
  <div>
    <Heading variant="h1">Modifier ???</Heading>
  </div>
</template>