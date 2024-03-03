<script setup lang="ts">
import type {Step} from "~/stores/models/step.model";
import type {AmountIngredient} from "~/stores/models/amount-ingredient.model";
import type {Difficulty, Recipe} from "~/stores/models/recipe.model";
import type {Ref} from "vue";
import {useRecipeStore} from "~/stores/recipe";
const recipeStore = useRecipeStore()

const props = defineProps(['dishType'])
const form: Ref<Recipe> = ref(<Recipe>{
  image: null as string | null,
  label: '' as string,
  timePrep: null as number | null,
  timeCook: null as number | null,
  difficulty: null as Difficulty | null,
  steps: [] as Step[],
  amountIngredients: [] as AmountIngredient[],
  tags: [] as string[],
  type: props.dishType
})

const difficulties = [{value:'EASY', label : 'Facile'}, {value:'MEDIUM', label : 'Moyen'}, {value:'DIFFICULT', label : 'Difficile'}]
const updateAmounts = function (amounts: AmountIngredient[]) {
  form.value.amountIngredients = amounts
}
const updateSteps= function (steps: Step[]) {
  form.value.steps = steps;
}
const submit = async function() {
  console.log(form.value);
  await recipeStore.createRecipe(form.value);
}
</script>

<template>
  <div>
    <form class="padding-24" style="margin-top: 16px" @submit.prevent="submit">
      <Card>
        <template #content>
          <InputText  placeholder="URL image" v-model="form.image"/>
          <NuxtImg v-if="form.image != null && form.image !== ''" :src="form.image"/>
          <InputText placeholder="Label" v-model="form.label"/>
          <InputNumber placeholder="Temps de préparation (min)" v-model="form.timePrep"/>
          <InputNumber placeholder="Temps de cuisson (min)" id="timeCook" v-model="form.timeCook"/>
          <Dropdown v-model="form.difficulty" :options="difficulties" placeholder="Difficulté" optionLabel="label" optionValue="value"/>
          <Chips placeholder="tags" v-model="form.tags"/>
          <StepInputList @onChange="updateSteps($event)"/>
          <AmountInputList @onChange="updateAmounts($event)"/>
        </template>
        <template #footer>
          <div class="flex place-content-end padding-8">
            <Button type="submit">Valider</Button>
          </div>
        </template>
      </Card>
    </form>
  </div>
</template>

<style scoped>

</style>