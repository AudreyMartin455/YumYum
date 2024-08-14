<script setup lang="ts">
import Heading from "~/components/design-system/Heading.vue";
import {useRecipeStore} from "~/stores/recipe";

const recipeStore = useRecipeStore()
await recipeStore.getRecipes("DISH").catch(error => console.log(error))
</script>

<template>
  <div class="padding-24">
    <div class="flex place-content-between padding-8">
      <Heading :variant="'h1'">Plats</Heading>
      <router-link
          to="/dishes/new"
          custom
          v-slot="{ navigate }"
      >
        <Button label="Nouveau" icon="pi pi-plus" iconPos="right" @click="navigate"
                role="link"/>
      </router-link>
    </div>
    <RecipeList dish-type="DISH"/>
    <NuxtPage/>
  </div>
</template>