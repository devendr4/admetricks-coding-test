<script setup lang="ts">
const positions = ['20', '35', '50', '65', '80']
</script>

<template>
  <div class="triangle"></div>

  <!-- <div class="vl left-20%"></div>
  <div class="vl left-35%"></div>
  <div class="vl left-50%"></div>
  <div class="vl left-65%"></div>
  <div class="vl left-80%"></div> -->

  <div v-for="p in positions" v-bind:key="p" :class="`vl left-${p}%`"></div>
  <div class="overflow-hidden">
    <img class="absolute -left-20" src="../assets/greentriangle.png" />
  </div>
</template>

<style scoped>
.triangle {
  background: #eef2fa;
  width: 100%;
  height: 320px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 8%, 50% 60%, 0% 8%);
}

.vl {
  border-left: 3px solid #132d47;
  /* border-left: 3px solid red; */
  z-index: -10;
  height: 100%;
  position: absolute;
  margin-left: -3px;
  top: 0;
}
</style>
