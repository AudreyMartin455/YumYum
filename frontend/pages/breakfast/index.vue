<script setup lang="ts">
import Heading from "~/components/design-system/Heading.vue";
import {useRecipeStore} from "~/stores/recipe";

const recipeStore = useRecipeStore()
await recipeStore.getRecipes("BREAKFAST").catch(error => console.log(error))
</script>

<template>
  <div class="padding-24">
    <div class="flex place-content-between padding-8">
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