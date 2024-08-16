<script setup lang="ts">
import 'primeicons/primeicons.css'

const menuItems = [
  {
    route: '/dishes',
    label: 'Plats',
    icon: 'dish-icon.png',
  },
  {
    route: '/desserts',
    label: 'Desserts',
    icon: 'dessert-icon.png',
  },
  {
    route: '/breakfast',
    label: 'Petit-déjeuner',
    icon: 'breakfast-icon.png',
  },
  {
    route: '/ingredients',
    label: 'Ingrédients',
    icon: 'ingredient-icon.png',
  },
  {
    route: '/cart',
    label: 'Panier',
    icon: 'ingredient-icon.png'
  }
]
</script>

<template>
  <div>
    <NuxtLayout>
      <Menubar :model="menuItems">
        <template #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
              <NuxtImg style="width:32px; height: 32px; margin-right: 8px" :src="item.icon"/>
              <span v-bind="props.label">{{ item.label }}</span>
            </a>
          </router-link>
        </template>
      </Menubar>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
.p-menuitem-icon, .p-menuitem-text {
  color: #10b981;
  line-height: 32px;
  font-size: 24px;
}
</style>