<script setup lang="ts">
import type {Step} from "~/stores/models/step.model";
import type {AmountIngredient} from "~/stores/models/amount-ingredient.model";
import type {Difficulty, Recipe} from "~/stores/models/recipe.model";
import type {Ref} from "vue";
import {useRecipeStore} from "~/stores/recipe";
import {useIngredientStore} from "~/stores/ingredient";

const recipeStore = useRecipeStore()

const props = defineProps(['dishType'])
const recipe = recipeStore.recipe
const form: Ref<Recipe> = ref(<Recipe>{
  uuid: recipe?.uuid as string | null,
  image: recipe?.image as string | null,
  label: recipe?.label as string,
  timePrep: recipe?.timePrep as number | null,
  timeCook: recipe?.timeCook as number | null,
  difficulty: recipe?.difficulty as Difficulty | null,
  steps: recipe?.steps as Step[] | undefined,
  amountIngredients: recipe?.amountIngredients as AmountIngredient[] | undefined,
  tags: recipe?.tags ?? [] as string[],
  type: recipe?.type ?? props.dishType
})

const difficulties = [{value: 'EASY', label: 'Facile'}, {value: 'MEDIUM', label: 'Moyen'}, {
  value: 'DIFFICULT',
  label: 'Difficile'
}]
const updateAmounts = function (amounts: AmountIngredient[]) {
  form.value.amountIngredients = amounts
}
const updateSteps = function (steps: Step[]) {
  form.value.steps = steps;
}
const submit = async function () {
  const referentialIngredient = useIngredientStore().ingredients;
  form.value.amountIngredients = form.value.amountIngredients.map((amount) => {
    amount.ingredient = referentialIngredient.find(ingredient => ingredient.uuid === amount.ingredient.uuid) ?? amount.ingredient
    return amount
  })
  if (!recipe) {
    await recipeStore.createRecipe(form.value).then(async () => {
      await navigateTo(`/${props.dishType === 'DISH' ? 'dishes' : props.dishType === 'DESSERT' ? 'desserts' : props.dishType === 'BREAKFAST' ? 'breakfast' : 'ingredients'}`)
    });
  } else {
    await recipeStore.updateRecipe(form.value).then(async () => {
      await navigateTo(`/${props.dishType === 'DISH' ? 'dishes' : props.dishType === 'DESSERT' ? 'desserts' : props.dishType === 'BREAKFAST' ? 'breakfast' : 'ingredients'}`)
    });

  }

}

</script>

<template>
  <div>
    <form class="padding-24" style="margin-top: 16px" @submit.prevent="submit">
      <Card>
        <template #content>
          <InputText placeholder="URL image" v-model="form.image"/>
          <NuxtImg v-if="form.image != null && form.image !== ''" :src="form.image"/>
          <InputText placeholder="Label" v-model="form.label"/>
          <InputNumber placeholder="Temps de préparation (min)" v-model="form.timePrep"/>
          <InputNumber placeholder="Temps de cuisson (min)" id="timeCook" v-model="form.timeCook"/>
          <Dropdown v-model="form.difficulty" :options="difficulties" placeholder="Difficulté" optionLabel="label"
                    optionValue="value"/>
          <Chips placeholder="tags" v-model="form.tags"/>
          <StepInputList :steps="form.steps" @onChange="updateSteps($event)"/>
          <AmountInputList :amounts="form.amountIngredients" @onChange="updateAmounts($event)"/>
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