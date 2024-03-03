<script setup lang="ts">
import Heading from "~/components/design-system/Heading.vue";
import {useRecipeStore} from "~/stores/recipe";

const { type } = defineProps(["type"])
const title = () => {
  switch (type) {
    case 'Dishes': return 'Plats';
    case 'Desserts': return 'Desserts';
    case 'Breakfast': return 'Petit-déjeuner'
  }
}
const website = useRecipeStore()
await callOnce(website.fetch)
</script>

<template>
  <div class="padding-16">
    <div class="flex place-content-between padding-8">
      <Heading :variant="'h1'">{{title()}}</Heading>
      <Button label="Nouveau" icon="pi pi-plus" iconPos="right" />
    </div>

    <div class="padding-8">
      <Card style="width: 25rem; overflow: hidden">
        <template #header>
          <img alt="user header" src="~/assets/images/default-placeholder.png" style="width: 25rem"/>
        </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Cancel" severity="secondary" outlined class="w-full" />
            <Button label="Save" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>