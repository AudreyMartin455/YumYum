<script lang="ts">
import type {AmountIngredient} from "~/stores/models/amount-ingredient.model";
import type {Ingredient} from "~/stores/models/ingredient.model";
import {useIngredientStore} from "~/stores/ingredient";

export default {
  name: 'RecipeForm',
  data() {
    return {
      units: [{label: '', value: 'PIECE'}, {label: 'ml', value: 'ML'}, {label: 'l', value: 'L'}, {
        label: 'mg',
        value: 'MG'
      }, {label: 'g', value: 'G'}],
      ingredients: useIngredientStore().ingredients,
      amounts: [<AmountIngredient>{ingredient: <Ingredient>{}}] as AmountIngredient[],
    }
  },
  methods: {
    addAmount: function () {
      this.amounts.push(<AmountIngredient>{ingredient: <Ingredient>{}})
    },
    removeAmount: function (removableIndex: number) {
      this.amounts = this.amounts.filter((_, index) => index !== removableIndex)
    },
  },
  watch: {
    amounts: {
      immediate: true,
      handler(updatedAmounts) {
        this.$emit('onChange', updatedAmounts)
      }
    }
  }
}
</script>

<template>
  <div>
    <div v-for="(amount, index) in amounts">
      <div>
        <InputNumber placeholder="Quantité" v-model="amount.amount"/>
        <Dropdown v-model="amount.unit" :options="units" placeholder="Unité" optionLabel="label" optionValue="value"/>
        <Dropdown v-model="amount.ingredient.uuid" :options="useIngredientStore().ingredients" placeholder="Ingrédient"
                  optionLabel="label"
                  optionValue="uuid"/>
      </div>
      <Button v-if="amounts.length > 1" severity="danger" icon="pi pi-minus-circle" @click="removeAmount(index)"/>
      <Button v-if="index === amounts.length - 1" icon="pi pi-plus" @click="addAmount"/>
    </div>
  </div>
</template>
