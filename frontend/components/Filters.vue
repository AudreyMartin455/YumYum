<script setup lang="ts">
const tags = ref([])
</script>

<template>

  <div class="flex-row padding-xl">
    <FloatLabel>
      <Chips id="chips" v-model="tags"/>
      <label for="chips">Tags</label>
    </FloatLabel>
    <Button icon="pi pi-search"/>
  </div>

</template>
<style>
.p-inputtext {
  width: 50rem;
  margin-right: 24px
}
</style>