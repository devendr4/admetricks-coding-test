<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { useRootStore } from '@/stores/root'
import { storeToRefs } from 'pinia'
import { useGetChartData } from '@/composables/getChartData'
import { buildChart } from '@/composables/buildChart'
const { year } = storeToRefs(useRootStore())
const { data } = useGetChartData(year)

onUpdated(async () => {
  console.log('updated', year.value)
  console.log(data.value)

  data.value && buildChart(data.value, year.value)
})

onMounted(async () => {
  console.log(data.value)
  // await buildChart()
})
</script>

<template>
  <!-- {{ year }} -->
  <svg v-if="data && year" class="bg-white text-black p-4"></svg>
</template>
