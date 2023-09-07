<script setup lang="ts">
import CustomTitle from '@/components/CustomTitle.vue'
import DownloadLink from '@/components/DownloadLink.vue'
import UsdVariationChart from '@/components/UsdVariationChart.vue'
import YearSelect from '@/components/YearSelect.vue'
import { useRootStore } from '@/stores/root'
import { storeToRefs } from 'pinia'
const link = import.meta.env.VITE_API_URL
const { year } = storeToRefs(useRootStore())
</script>

<template>
  <main class="relative p-3 min-h-screen max-h-screen md:ml-20% md:mr-20% ml-[5%] mr-5%">
    <CustomTitle class="text-center"
      >Variación diaria del valor del dólar (USD) en pesos chilenos (CLP)</CustomTitle
    >

    <RouterLink class="p-3 pl-10 pr-10 text-red-200 underline" to="/">Regresar</RouterLink>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 flex">
        <YearSelect />
      </div>
      <div class="flex gap-2 w-full md:w-1/2 flex-wrap justify-center mb-3">
        <h3 class="w-full text-center">Descargar histórico</h3>
        <DownloadLink :link="link + `/usd/diff/${year}?filetype=csv`">CSV</DownloadLink>
        <DownloadLink :link="link + `/usd/diff/${year}?filetype=xlsx`">Excel</DownloadLink>
      </div>
    </div>

    <UsdVariationChart />
  </main>
</template>
