<script setup lang="ts">
import Heading from "~/components/design-system/Heading.vue";
import {useRecipeStore} from "~/stores/recipe";

const recipeStore = useRecipeStore()
await recipeStore.getRecipes("DESSERT").catch(error => console.log(error))
</script>

<template>
  <div class="padding-xl">
    <div class="flex place-content-between padding-md">
      <Heading :variant="'h1'">Desserts</Heading>
      <router-link
          to="/desserts/new"
          custom
          v-slot="{ navigate }"
      >
        <Button label="Nouveau" icon="pi pi-plus" iconPos="right" @click="navigate"
                role="link"/>
      </router-link>
    </div>
    <RecipeList dish-type="DESSERT"/>
  </div>
</template>