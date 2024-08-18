<script setup lang="ts">
import 'primeicons/primeicons.css'

const menuItems = [
  {
    route: '/dishes',
    label: 'Plats',
    icon: 'home',
  },
  {
    route: '/desserts',
    label: 'Desserts',
    icon: 'home',
  },
  {
    route: '/breakfast',
    label: 'Petit-déjeuner',
    icon: 'home',
  },
  {
    route: '/ingredients',
    label: 'Ingrédients',
    icon: 'home',
  },
  {
    route: '/cart',
    label: 'Panier',
    icon: 'home'
  }
]
</script>

<template>
  <div>
    <NuxtLayout>
      <P-Menubar :model="menuItems">
        <template #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
              <Icon :icon="item.icon" color="secondary" variant="filled" class="icon"/>
              <span v-bind="props.label" class="label">{{ item.label }}</span>
            </a>
          </router-link>
        </template>
      </P-Menubar>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.icon {
  margin-right: 8px;
}

.label {
  font-size: 24px;
  color: var(--primary);
}

</style>