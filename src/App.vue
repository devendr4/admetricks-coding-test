<script setup lang="ts">
import MainLayout from './components/MainLayout.vue';
</script>

<template>
  <div class="relative flex flex-col">
    <MainLayout />
    <RouterView />
  </div>
</template>
