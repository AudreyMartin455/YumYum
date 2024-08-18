<script setup lang="ts">
const {variant, icon} = defineProps(['variant', 'icon'])
</script>

<template>
  <div class="flex flex-row">
    <div class="flex flex-col padding-md" style="margin-right: 8px">
      <Icon :icon="icon" variant="filled" size="xl" color="primary" class="icon"/>
      <div class="underline"/>
    </div>

    <div class="flex flex-col title-container">
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
  </div>
</template>

<style scoped>
.icon {
  color: var(--primary);
  margin-bottom: 5px;
}

.underline {
  height: 4px;
  background-color: var(--secondary)
}

.title-container {
  justify-content: end;
}

.title {
  margin: 0;
  color: var(--primary)
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 28px
}

h3 {
  font-size: 24px;
}
</style>