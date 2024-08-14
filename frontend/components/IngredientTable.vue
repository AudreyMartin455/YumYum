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
    <ConfirmDialog></ConfirmDialog>
    <Message v-if="displayErrorMessage" severity="error" closable @close="unShowed()">
      Suppression impossible, l'ingrédient est utilisé dans
      une recette.
    </Message>
    <DataTable :value="ingredientStore.ingredients">
      <Column field="label" header="Label"></Column>
      <Column field="tags" header="Tags">
        <template #body="slotProps">
          <Tag v-for="tag in slotProps.data.tags" :value="tag" severity="info" style="margin-right: 5px"/>
        </template>
      </Column>
      <Column field="uuid" header="Actions">
        <template #body="slotProps">
          <Button icon="pi pi-trash" @click="deleteIngredient(slotProps.data.uuid)" severity="danger"/>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>

</style>