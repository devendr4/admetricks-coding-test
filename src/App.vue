<script setup lang="ts">
const positions = ['20%', '35%', '50%', '65%', '80%']
</script>

<template>
  <div class="triangle bg-red-50"></div>
  <div v-for="(p, i) in positions" v-bind:key="i" :class="'vl left-20%' + p"></div>
  <img src="./assets/greentriangle.png" />
</template>

<style scoped>
.triangle {
  background: #eef2fa;
  width: 100%;
  height: 220px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 8%, 50% 60%, 0% 8%);
}
.vl {
  border-left: 2px solid #132d47;
  z-index: -10;
  height: 100%;
  position: absolute;
  margin-left: -3px;
  top: 0;
}
</style>
