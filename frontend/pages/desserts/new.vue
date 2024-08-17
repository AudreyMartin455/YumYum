<script setup lang="ts">

import Heading from "~/components/design-system/Heading.vue";
</script>

<template>
  <div class="padding-xl">
    <Heading variant="h1">Nouveau dessert</Heading>

    <RecipeForm dish-type="DESSERT"/>
  </div>
</template>