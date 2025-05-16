<script setup lang="ts">
import {useRecipeStore} from "~/stores/recipe";

const recipeStore = useRecipeStore()
await recipeStore.getRecipes("DESSERT").catch(error => console.log(error))
</script>

<template>
  <div class="padding-xl">
    <div class="flex place-content-between padding-md">
      <Heading :variant="'h1'" icon="list">Desserts</Heading>
      <router-link
          to="/desserts/new"
          custom
          v-slot="{ navigate }"
      >
        <Button label="Nouveau" variant="filled" icon="add" @click="navigate"
                role="link">Nouveau
        </Button>
      </router-link>
    </div>
    <RecipeList dish-type="DESSERT"/>
  </div>
</template>