<script setup lang="ts">
import {useRecipeStore} from "~/stores/recipe";

const recipeStore = useRecipeStore()
await recipeStore.getRecipes("BREAKFAST").catch(error => console.log(error))
</script>

<template>
  <div class="padding-xl">
    <div class="flex place-content-between padding-md">
      <Heading :variant="'h1'" icon="list">Petit-déjeuner</Heading>
      <router-link
          to="/breakfast/new"
          custom
          v-slot="{ navigate }"
      >
        <Button label="Nouveau" variant="filled" icon="add" @click="navigate"
                role="link">Nouveau
        </Button>
      </router-link>
    </div>
    <RecipeList dish-type="BREAKFAST"/>
  </div>
</template>