<script setup lang="ts">
defineProps(['variant', 'icon', 'type', 'disabled', 'size'])

</script>

<template>
  <P-Button :type="type" :class="variant" :disabled="disabled" class="button">
    <Icon :variant="variant" :icon="icon" :size="size">{{ icon }}</Icon>
  </P-Button>
</template>

<style scoped>
.button {
  width: auto;
  height: auto;
  padding: 5px;
}

.filled {
  background-color: var(--action);
  border: 1px solid var(--action);
}

.filled:not(:disabled):hover {
  filter: brightness(90%);
}

.outlined {
  background-color: transparent;
  border: 1px solid var(--on_primary_action)
}

.ghosted {
  background-color: transparent;
  border: transparent;
}

.ghosted:not(:disabled):hover, .outlined:not(:disabled):hover {
  filter: brightness(80%);
}
</style>