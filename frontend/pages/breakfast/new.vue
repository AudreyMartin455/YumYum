<script setup lang="ts">

import RecipeForm from "~/components/RecipeForm.vue";
import Heading from "~/components/design-system/Heading.vue";
</script>

<template>
  <div class="padding-xl">
    <Heading variant="h1" icon="edit_note">Nouveau petit-déjeuner</Heading>

    <RecipeForm dish-type="BREAKFAST"/>
  </div>
</template>