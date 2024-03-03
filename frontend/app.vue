<script setup lang="ts">
import 'primeicons/primeicons.css'
import {PrimeIcons} from "primevue/api";

const menuItems = [
    {
      route: '/dishes',
      label: 'Plats',
      icon: PrimeIcons.PLUS,
    },
    {
      route: '/desserts',
      label: 'Desserts',
      icon: PrimeIcons.HOME,
    },
    {
      route: '/breakfast',
      label: 'Petit-déjeuner',
      icon: PrimeIcons.ANGLE_DOUBLE_DOWN,
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
              <span v-bind="props.icon" />
              <span v-bind="props.label">{{ item.label }}</span>
            </a>
          </router-link>
        </template>
      </Menubar>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>