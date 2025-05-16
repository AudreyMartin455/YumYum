<script setup lang="ts">
const tags = ref([])
</script>

<template>

  <div class="flex-row padding-xl">
    <P-FloatLabel>
      <Chips id="chips" v-model="tags"/>
      <label for="chips">Tags</label>
    </P-FloatLabel>
    <P-Button icon="pi pi-search"/>
  </div>

</template>
<style>
.p-inputtext {
  width: 50rem;
  margin-right: 24px
}
</style>