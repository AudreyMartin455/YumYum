<script setup lang="ts">
const { variant } = defineProps(["variant"])


const website = useWebsiteStore()

await callOnce(website.fetch)

</script>

<template>
  <div>
    <h1 v-if="variant === 'h1'" class="title">
      <slot></slot>
    </h1>
    <h2 v-if="variant === 'h2'" class="title">
      <slot></slot>
    </h2>
    <h3 v-if="variant === 'h3'" class="title">
      <slot></slot>
    </h3>
  </div>
</template>

<style>
.title{
  margin: 0;
}

h1{
  font-size: 32px;
}

h2{
  font-size: 28px
}

h3{
  font-size: 24px;
}
</style>