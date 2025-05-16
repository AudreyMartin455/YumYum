<script setup lang="ts">
import {useRecipeStore} from "~/stores/recipe";
import {useCartStore} from "~/stores/cart";
import type {Recipe} from "~/stores/models/recipe.model";
import {useConfirm} from "primevue/useconfirm";
import {useToast} from "primevue/usetoast";

const confirm = useConfirm();
const recipeStore = useRecipeStore()
const cartStore = useCartStore();
const toast = useToast();

const props = defineProps(['dishType'])
let baseRoute = '';
if (props.dishType === 'DISH') {
  baseRoute = 'dishes/'
}
if (props.dishType === 'BREAKFAST') {
  baseRoute = 'breakfast/'
}
if (props.dishType === 'DESSERT') {
  baseRoute = 'desserts/'
}

const addToCart = function (recipe: Recipe) {
  cartStore.addToCart(recipe)
  toast.add({severity: 'success', summary: 'Success', detail: 'Plat ajouté au panier', life: 3000});
}
 
const removeToCart = function (recipe: Recipe) {
  cartStore.removeToCart(recipe.uuid!!)
}

const deleteRecipe = async function (uuid: string) {
  confirm.require({
    message: `Supprimer la recette ?`,
    header: "Confirmation",
    acceptLabel: 'Oui',
    rejectLabel: 'Non',
    accept: () => {
      recipeStore.deleteRecipe(uuid).finally(() => recipeStore.getRecipes(props.dishType))
    },
  });
}

</script>

<template>
  <div>
    <!--    <Filters/>-->
    <P-Toast/>
    <P-ConfirmDialog></P-ConfirmDialog>
    <div v-if="recipeStore.recipes?.length > 0" class="padding-md cards">
      <P-Card v-for="recipe in recipeStore.recipes" style="width: 30rem; overflow: hidden">
        <template #header>
          <NuxtImg style="width:30rem; height: 30rem" :src="recipe.image ? recipe.image : 'default-placeholder.png'"/>
        </template>
        <template #title>{{ recipe.label }}</template>
        <template #subtitle>
          <span v-if="recipe.timePrep">Préparation: {{ recipe.timePrep }} min <i class="pi pi-hourglass"></i></span>
          <span v-if="recipe.timeCook" class="timeCook">Cuisson: {{ recipe.timeCook }} min <i
              class="pi pi-hourglass"></i></span>
        </template>
        <template #content>
          <P-Chip class="chip" v-for="ingredient in recipe.amountIngredients" :label="ingredient.ingredient.label"/>
        </template>
        <template #footer>
          <div class="flex place-content-end">
            <router-link
                :to="baseRoute + recipe.uuid"
                custom
                v-slot="{ navigate }"
            >
              <IconButton style="margin-right: 16px" icon="edit" variant="filled" @click="navigate"
                          role="link"/>
            </router-link>
            <IconButton style="margin-right: 16px" icon="delete" variant="filled" @click="deleteRecipe(recipe.uuid!!)"/>
            <IconButton icon="add_shopping_cart" variant="filled" @click="addToCart(recipe)"/>
          </div>
        </template>
      </P-Card>
    </div>
  </div>
</template>

<style>
.chip {
  border: solid 1px #5457cd;
  color: #5457cd;
  margin: 5px;
}

.timeCook {
  margin-left: 16px;
}

.cards {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 24px
}
</style>