<script setup lang="ts">
import {useCartStore} from "~/stores/cart";
import Heading from "~/components/design-system/Heading.vue";
import Button from "~/components/design-system/Button.vue";
import IconButton from "~/components/design-system/IconButton.vue";
import Icon from "~/components/design-system/Icon.vue";

const cartStore = useCartStore()
let cartState = reactive({ingredientList: '', recipes: cartStore.getRecipes()})

const generate = () => {
  cartStore.generateAmountsIngredient();
  cartState.ingredientList = cartStore.getAmountsIngredient()
      .map((amount) => `${amount.amount} ${amount.unit} ${amount.ingredient.label}`)
      .join('\r')
}

const removeRecipe = (uuid: string) => {
  cartStore.removeToCart(uuid)
  cartState.recipes = cartStore.getRecipes();
}

</script>
<template>
  <div class="padding-xl card-container flex-row">
    <P-Card class="recipe-card flex-col" style="min-width: 20%">
      <template #content>
        <!--        <Heading variant="h2" icon="edit_note">Recettes</Heading>-->
        <!-- TODO evolve Heading to accept on_primary color -->
        <div class="flex flex-row">
          <div class="flex flex-col padding-md" style="margin-right: 8px">
            <Icon style="margin-bottom: 5px;" icon="edit_note" variant="filled" size="xl" color="on_primary"
                  class="icon"/>
            <div class="underline"/>
          </div>
          <h2>Recettes</h2>
        </div>
        <div v-for="(recipe) in cartState.recipes" class="flex-row"
             style="place-content: center space-between;align-items: center;">
          <p>{{ recipe.label }}</p>
          <IconButton variant="ghosted" icon="close" @click="removeRecipe(recipe.uuid!!)"/>
        </div>


      </template>
    </P-Card>
    <P-Card style="min-width: 50%">
      <template #content>
        <div class="flex-col">
          <Heading variant="h2">Liste de course</Heading>

          <div class="flex-row padding-sm margin-md" style="place-content: center space-between;align-items: center;">
            <span>{{ cartState.recipes.length }} recette(s) sélectionnée(s)</span>
            <Button variant="filled" @click="generate">Générer</Button>
          </div>
          <P-Textarea class="margin-md" v-model="cartState.ingredientList" style="resize: none" autoResize/>
        </div>
      </template>
    </P-Card>
  </div>
</template>

<style>
.card-container {
  place-content: flex-start center;
  align-items: stretch;
}

.recipe-card {
  background-color: var(--primary);
  color: var(--on_primary)
}

.underline {
  height: 4px;
  background-color: var(--secondary)
}

h2 {
  font-size: 28px;
  color: var(--on_primary)
}
</style>