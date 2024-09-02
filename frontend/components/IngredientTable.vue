<script setup lang="ts">
import {useConfirm} from "primevue/useconfirm";

const confirm = useConfirm();
const ingredientStore = useIngredientStore()
await ingredientStore.getIngredients().catch(error => console.log(error))
let displayErrorMessage = ref(false)

const deleteIngredient = function (uuid: string) {
  confirm.require({
    message: `Supprimer l'ingrédient ?`,
    header: "Confirmation",
    acceptLabel: 'Oui',
    rejectLabel: 'Non',
    accept: () => {
      ingredientStore.deleteIngredient(uuid).catch(error => {
        if (error.response.status === 409) {
          displayErrorMessage.value = true
        }
      }).finally(() => ingredientStore.getIngredients())
    },
  });


}

const unShowed = function () {
  displayErrorMessage.value = false;
}

</script>

<template>
  <div>
    <P-ConfirmDialog></P-ConfirmDialog>
    <P-Message v-if="displayErrorMessage" severity="error" closable @close="unShowed()">
      Suppression impossible, l'ingrédient est utilisé dans
      une recette.
    </P-Message>
    <P-DataTable :value="ingredientStore.ingredients">
      <P-Column field="label" header="Label"></P-Column>
      <P-Column field="tags" header="Tags">
        <template #body="slotProps">
          <P-Tag v-for="tag in slotProps.data.tags" :value="tag" severity="info" style="margin-right: 5px"/>
        </template>
      </P-Column>
      <P-Column field="uuid" header="Actions">
        <template #body="slotProps">
          <IconButton icon="edit" variant="filled" style="margin-right: 15px"/>
          <IconButton icon="delete" variant="filled" @click="deleteIngredient(slotProps.data.uuid)"/>
        </template>
      </P-Column>
    </P-DataTable>
  </div>
</template>

<style scoped>

</style>