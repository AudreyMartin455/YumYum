<script setup lang="ts">
import type {AmountIngredient} from "~/stores/models/amount-ingredient.model";
import type {Ingredient} from "~/stores/models/ingredient.model";
import {useIngredientStore} from "~/stores/ingredient";
import type {Ref} from "vue";

const ingredientStore = useIngredientStore();
const emits = defineEmits(['onChange'])
const props = defineProps(['amounts'])
let ingredients: Ref<Ingredient[]> = ref([]);
const searchedIngredient: Ref<Ingredient[]> = ref([])

ingredientStore.getIngredients().catch(error => console.log(error)).finally(() => {
  ingredients.value = ingredientStore.ingredients;
  searchedIngredient.value = {...ingredients.value}
})


const units = [{label: '', value: 'PIECE'}, {label: 'ml', value: 'ML'}, {label: 'l', value: 'L'}, {
  label: 'mg',
  value: 'MG'
}, {label: 'g', value: 'G'}];
let amounts = ref(props.amounts);

const addAmount = function () {
  amounts.value.push(<AmountIngredient>{ingredient: <Ingredient>{}})
};
const removeAmount = function (removableIndex: number) {
  amounts.value = amounts.value.filter((_: AmountIngredient, index: number) => index !== removableIndex)
};

const search = (event: any) => {
  if (event.query === "") {
    searchedIngredient.value = {...ingredients.value}
    return;
  }
  searchedIngredient.value = ingredients.value.filter(ingredient => ingredient.label.includes(event.query))
}
watch(amounts, (newAmounts) => {
  console.log(newAmounts)
  emits('onChange', newAmounts)
})
</script>

<template>
  <div>
    <Heading variant="h3" icon="edit_note">Ingrédients</Heading>
    <div v-for="(amount, index) in amounts">
      <div class="flex flex-row" style="margin: 10px">
        <P-InputNumber placeholder="Quantité" v-model="amount.amount" style="margin-right: 8px; width: 75px"/>
        <P-Dropdown v-model="amount.unit" :options="units" placeholder="ml" optionLabel="label" optionValue="value"
                    style="margin-right: 8px; width: 60px"/>
        <P-AutoComplete v-model="amount.ingredient" optionLabel="label"
                        :suggestions="searchedIngredient"
                        @complete="search"/>
        <IconButton v-if="amounts.length > 1" icon="remove" type="button" variant="filled" size="md"
                    @click="removeAmount(index)"
                    style="margin-left: 8px"/>
      </div>
      <div class="flex flex-row" style="justify-content: center">
        <IconButton v-if="index === amounts.length - 1" icon="add" type="button" size="md" variant="filled"
                    @click="addAmount"/>
      </div>
    </div>
  </div>
</template>

<style>
.p-inputnumber input {
  width: 100%;
}
</style>