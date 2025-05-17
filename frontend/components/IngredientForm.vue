<script setup lang="ts">
import type {Ref} from "vue";
import type {Ingredient} from "~/stores/models/ingredient.model";

const ingredientStore = useIngredientStore()
const props = defineProps(['ingredient'])

const dialogTitle = props.ingredient ? 'Modifier un ingredient' : 'Créer un ingredient'
const visible: Ref<boolean> = ref(false);
const form = reactive(<Ingredient>{
  uuid: props.ingredient?.uuid as string,
  label: props.ingredient?.label as string,
  tags: props.ingredient?.tags as string[],
})
const submit = async function () {
  if (form.uuid != '' && form.uuid) {
    await ingredientStore.updateIngredient(form).then(async () => await ingredientStore.getIngredients());
  } else {
    await ingredientStore.createIngredient(form).then(async () => await ingredientStore.getIngredients());
  }
}

</script>

<template>

  <Button v-if="!ingredient" variant="filled" icon="add" @click="visible = true">Nouveau</Button>
  <IconButton v-if="ingredient" icon="edit" variant="filled" style="margin-right: 15px" @click="visible = true"/>

  <P-Dialog v-model:visible="visible" modal :header="dialogTitle" :style="{ width: '50rem' }">
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