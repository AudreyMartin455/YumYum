<script setup lang="ts">
import type {Step} from "~/stores/models/step.model";
import type {AmountIngredient} from "~/stores/models/amount-ingredient.model";
import type {Difficulty, Recipe} from "~/stores/models/recipe.model";
import type {Ref} from "vue";
import {useRecipeStore} from "~/stores/recipe";
import {useIngredientStore} from "~/stores/ingredient";

const props = defineProps(['dishType'])
const recipeStore = useRecipeStore()
const route = useRoute()

const uuid = route.params.uuid as string;
let recipe: Recipe | undefined = undefined;
let form: Ref<Recipe | undefined> = ref(undefined);

const difficulties = [{value: 'EASY', label: 'Facile'}, {value: 'MEDIUM', label: 'Moyen'}, {
  value: 'DIFFICULT',
  label: 'Difficile'
}]

const initModel = (recipe: Recipe | undefined) => {
  console.log('init model')
  console.log(recipe)
  form.value = <Recipe>{
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
  }
}

if (uuid != undefined) {
  recipeStore.getRecipe(uuid).catch((error) => console.log(error)).finally(() => {
    recipe = recipeStore.recipe
    initModel(recipe)
  })
} else {
  initModel(undefined)
}

const updateAmounts = function (amounts: AmountIngredient[]) {
  if (form.value != undefined) {
    form.value.amountIngredients = amounts
  }
}
const updateSteps = function (steps: Step[]) {
  if (form.value != undefined) {
    form.value.steps = steps;
  }
}

const navigateToList = async () => {
  await navigateTo(`/${props.dishType === 'DISH' ? 'dishes' : props.dishType === 'DESSERT' ? 'desserts' : props.dishType === 'BREAKFAST' ? 'breakfast' : 'ingredients'}`)
}

const submit = async function () {
  if (form.value != undefined) {
    const referentialIngredient = useIngredientStore().ingredients;
    form.value.amountIngredients = form.value.amountIngredients.map((amount) => {
      amount.ingredient = referentialIngredient.find(ingredient => ingredient.uuid === amount.ingredient.uuid) ?? amount.ingredient
      return amount
    })
    if (!recipe) {
      await recipeStore.createRecipe(form.value).then(async () => {
        await navigateToList()
      });
    } else {
      await recipeStore.updateRecipe(form.value).then(async () => {
        await navigateToList()
      });

    }
  }
}

</script>

<template>
  <div>
    <form class="padding-xl" style="margin-top: 16px" @submit.prevent="submit">
      <Card v-if="form != undefined">
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
          <div class="flex place-content-end padding-md">
            <Button type="submit">Valider</Button>
          </div>
        </template>
      </Card>
    </form>
  </div>
</template>

<style scoped>

</style>