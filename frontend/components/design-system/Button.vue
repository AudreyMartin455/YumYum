<script setup lang="ts">
defineProps(['variant', 'icon', 'type', 'disabled'])
</script>

<template>
  <div>
    <P-Button :type="type" :class="variant" :disabled="disabled">
      <i v-if="icon != undefined" class="material-icons icon">{{ icon }}</i>
      <slot/>
    </P-Button>
  </div>
</template>

<style scoped>
.filled {
  background-color: var(--action);
  border: 1px solid var(--action);
}

.filled:not(:disabled):hover {
  filter: brightness(90%);
}

.icon {
  margin-right: 7px
}
</style>