<script setup lang="ts">
import {useCartStore} from "~/stores/cart";
import type {AmountIngredient} from "~/stores/models/amount-ingredient.model";

const cartStore = useCartStore()
const recipes = cartStore.getRecipes();
let amountsIngredient: AmountIngredient[] = reactive([])

const generate = () => {
  cartStore.generateAmountsIngredient();
  amountsIngredient = cartStore.getAmountsIngredient()
}
</script>
<template>
  <P-Card style="max-width: 70%; margin: auto">
    <P-Card>
      
    </P-Card>
    <P-Card>

    </P-Card>
  </P-Card>
  <div style="display: flex; flex-direction: row">
    <div style="display: flex; flex-direction: column;width: 50%">
      <span>Recette(s) choisie(s):</span>
      <p v-for="recipe in recipes">- {{ recipe.label }}</p>
      <P-Button label="Générer la liste de course" @click="generate"/>
    </div>
    <div style="display: flex; flex-direction: column; width: 50%">
      <span>Liste de course:</span>
      <p v-for="amount in cartStore.getAmountsIngredient()">
        {{ `- ${amount.amount} ${amount.unit} ${amount.ingredient.label}` }} </p>
    </div>

  </div>

</template>