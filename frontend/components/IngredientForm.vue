<script setup lang="ts">
import type {Ref} from "vue";
import Dialog from 'primevue/dialog';
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

  <Button label="Nouveau" icon="pi pi-plus" iconPos="right" @click="visible = true"/>

  <Dialog v-model:visible="visible" modal header="Créer Ingrédient" :style="{ width: '50rem' }">
    <form class="padding-xl" style="margin-top: 16px" @submit.prevent="submit">

      <InputText placeholder="Label" v-model="form.label" :style="{ width: '30rem'}"/>
      <Chips placeholder="tags" v-model="form.tags" :style="{ width: '30rem'}"/>

      <div class="flex justify-content-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="submit" label="Save" @click="visible = false"></Button>
      </div>
    </form>
  </Dialog>


</template>

<style scoped>

</style>