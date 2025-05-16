<script setup lang="ts">
const {variant, icon, size} = defineProps(['variant', 'icon', 'size', 'color'])
</script>

<template>
  <i :class="[ variant === 'outlined' || variant === 'ghosted' ? 'material-symbols-outlined' : 'material-icons', size, color]">{{
      icon
    }}</i>
</template>

<style scoped>
.md {
  font-size: 24px
}

.lg {
  font-size: 32px;
}

.xl {
  font-size: 40px;
}

.primary {
  color: var(--primary);
}

.secondary {
  color: var(--secondary);
}

.on_action {
  color: var(--on_action);
}

.on_primary {
  color: var(--on_primary);
}

.on_background {
  color: var(--on_background);
}
</style>