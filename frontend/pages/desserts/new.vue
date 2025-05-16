<script setup lang="ts">

import RecipeForm from "~/components/RecipeForm.vue";
</script>

<template>
  <div class="padding-xl">
    <Heading variant="h1" icon="edit_note">Nouveau dessert</Heading>

    <RecipeForm dish-type="DESSERT"/>
  </div>
</template>