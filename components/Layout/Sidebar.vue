<template>
  <aside class="w-64 h-screen border-r-1 border-gray-300 py-6 px-4 fixed top-0 left-0 flex flex-col">
    <!-- Logo -->
    <div class="flex items-center justify-start mb-4">
      <img src="../../assets/images/logo.png" alt="Logo" class="h-8 mr-2" />
    </div>

    <!-- Navigation -->
    <ul class="flex-1">
      <li v-for="item in menuItems" :key="item.label" class="mb-2">
        <NuxtLink
          :to="item.to"
          class="flex items-center p-3 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-green-600 transition"
        >
          <i :class="item.icon" class="mr-3"></i>
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>

    <!-- Organization Section -->
    <div class="mt-auto border-1 border-gray-300 p-3 rounded-lg flex items-center space-x-3">
      <img src="../../assets/images/Icon.png" alt="Logo" class="h-6 w-6" />
      <span>Hosachiguru</span>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const menuItems = ref([
  { label: "Dashboard", to: "/", icon: "pi pi-home" },
  { label: "Projects", to: "/", icon: "pi pi-folder" },
  { label: "User Management", to: "/", icon: "pi pi-users" },
  { label: "Plantation", to: "/", icon: "pi pi-box" },
  { label: "Announcements", to: "/", icon: "pi pi-megaphone" },
  { label: "Work Orders", to: "/", icon: "pi pi-sitemap" },
  { label: "Credits", to: "/credits", icon: "pi pi-wallet" },
]);
</script>

<style scoped>
/* Custom styles if needed */
</style>
