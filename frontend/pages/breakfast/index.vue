<script setup lang="ts">
import Heading from "~/components/design-system/Heading.vue";
import {useRecipeStore} from "~/stores/recipe";

const recipeStore = useRecipeStore()
await recipeStore.getRecipes("BREAKFAST").catch(error => console.log(error))
</script>

<template>
  <div class="padding-xl">
    <div class="flex place-content-between padding-md">
      <Heading :variant="'h1'">Petit-déjeuner</Heading>
      <router-link
          to="/breakfast/new"
          custom
          v-slot="{ navigate }"
      >
        <Button label="Nouveau" icon="pi pi-plus" iconPos="right" @click="navigate"
                role="link"/>
      </router-link>
    </div>
    <RecipeList dish-type="BREAKFAST"/>
  </div>
</template>