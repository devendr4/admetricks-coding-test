<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { useRootStore } from '@/stores/root'
import { storeToRefs } from 'pinia'
import { useGetChartData } from '@/composables/getChartData'
import { useBuildLineChart } from '@/composables/buildChart'
import LoadingSpinner from './LoadingSpinner.vue'
const { year } = storeToRefs(useRootStore())
const { data, isLoading } = useGetChartData(year)

onUpdated(async () => {
  console.log('updated', year.value)
  console.log(data.value)

  data.value && useBuildLineChart(data.value, year.value)
})

onMounted(async () => {
  console.log(data.value)
  // await buildChart()
})
</script>

<template>
  <!-- {{ year }} -->
  <section class="flex w-full justify-center items-center">
    <LoadingSpinner v-if="isLoading" />
    <svg v-else class="bg-white text-black p-4"></svg>

    <div id="tooltip"></div>
  </section>
</template>

<style>
rect {
  fill-opacity: 0;
  stroke-opacity: 0;
  background: red;
  z-index: 1;
}

.tooltip {
  position: absolute;
  padding: 10px;
  background-color: steelblue;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  display: none;
  opacity: 0.75;
}
</style>
