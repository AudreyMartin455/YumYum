<script setup lang="ts">
import type {Ref} from "vue";
import type {Ingredient} from "~/stores/models/ingredient.model";

const ingredientStore = useIngredientStore()
const visible: Ref<boolean> = ref(false);
const form: Ref<Ingredient> = ref(<Ingredient>{
  label: '' as string,
  tags: [] as string[],
})

const submit = async function () {
  await ingredientStore.createIngredient(form.value).then(async () => await ingredientStore.getIngredients());
}

</script>

<template>

  <Button variant="filled" icon="add" @click="visible = true">Nouveau</Button>

  <P-Dialog v-model:visible="visible" modal header="Créer Ingrédient" :style="{ width: '50rem' }">
    <form class="padding-xl" style="margin-top: 16px" @submit.prevent="submit">

      <P-InputText placeholder="Label" v-model="form.label" :style="{ width: '30rem'}"/>
      <P-Chips placeholder="tags" v-model="form.tags" :style="{ width: '30rem'}"/>

      <div class="flex justify-content-end gap-2">
        <P-Button type="button" label="Cancel" severity="secondary" @click="visible = false"></P-Button>
        <P-Button type="submit" label="Save" @click="visible = false"></P-Button>
      </div>
    </form>
  </P-Dialog>


</template>

<style scoped>

</style>