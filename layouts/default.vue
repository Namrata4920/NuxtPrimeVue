<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1 ml-64">
      <Header />
      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Layout/Sidebar.vue";
import Header from "@/components/Layout/Header.vue";
</script>
  