<script setup lang="ts">
import { onUpdated } from 'vue';
import { useRootStore } from '@/stores/root';
import { storeToRefs } from 'pinia';
import { useGetChartData } from '@/composables/getChartData';
import { useBuildLineChart } from '@/composables/buildChart';
import LoadingSpinner from './LoadingSpinner.vue';
const { year } = storeToRefs(useRootStore());
//get chart data from composible passing a reactive year
// in order to fetch new changes
const { data, isLoading } = useGetChartData(year);

onUpdated(async () => {
  //get new data for chart each time year changes
  data.value && useBuildLineChart(data.value, year.value);
});
</script>

<template>
  <!-- {{ year }} -->
  <section class="flex w-full justify-center items-center">
    <LoadingSpinner v-if="isLoading" />
    <div v-else id="chart-container" class="bg-white text-black p-4 w-full">
      <div id="tooltip"></div>
    </div>
  </section>
</template>

<style>
rect {
  fill-opacity: 0;
  stroke-opacity: 0;
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
  opacity: 0.85;
}
</style>
