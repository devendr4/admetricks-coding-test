<script setup lang="ts">
import MainLayout from './components/MainLayout.vue'
</script>

<template>
  <div class="flex flex-col">
    <MainLayout />

    <RouterView />
  </div>
</template>
