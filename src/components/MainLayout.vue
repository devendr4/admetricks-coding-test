<script setup lang="ts">
import { useWindowSize } from 'vue-window-size';
import greenTriangle from '@/assets/greentriangle.png';

const positions = [20, 35, 50, 65, 80];
const mobilePositions = [5, 50, 95];
const { width } = useWindowSize();
</script>

<template>
  <div class="triangle"></div>

  <!-- <div class="vl left-5%"></div>
  <div class="vl left-95%"></div> -->

  <!-- <div class="vl left-20%"></div>
  <div class="vl left-35%"></div>
  <div class="vl left-50%"></div>
  <div class="vl left-65%"></div>
  <div class="vl left-80%"></div> -->

  <div
    v-for="p in width < 768 ? mobilePositions : positions"
    v-bind:key="p"
    :class="`vl md: left-${p}%`"></div>
  <div class="overflow-hidden">
    <img class="absolute -left-20 top-[10%]" :src="greenTriangle" />
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
  min-height: 100%;
  position: absolute;
  margin-left: -3px;
  top: 0;
  bottom: 0;
}
</style>
