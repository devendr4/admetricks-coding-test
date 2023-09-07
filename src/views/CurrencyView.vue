<script setup lang="ts">
import CustomTitle from '@/components/CustomTitle.vue'
import DownloadLink from '@/components/DownloadLink.vue'
import UsdVariationChart from '@/components/UsdVariationChart.vue'
import YearSelect from '@/components/YearSelect.vue'
import { useRootStore } from '@/stores/root'
const link = import.meta.env.VITE_API_URL
const store = useRootStore()
</script>

<template>
  <main class="relative p-3 min-h-screen max-h-screen md:ml-20% md:mr-20% ml-[5%] mr-5%">
    <CustomTitle>Variación diaria del valor del dólar (USD) en pesos chilenos (CLP)</CustomTitle>
    <div class="flex">
      <div class="md:w-1/2">
        <YearSelect />
      </div>
      <div class="flex gap-2 md:w-1/2 flex-wrap mb-3">
        <h3 class="w-full">Descargar historico</h3>
        <DownloadLink :link="link + `/usd/diff/${store.year}?filetype=csv`">CSV</DownloadLink>
        <DownloadLink :link="link + `/usd/diff/${store.year}?filetype=xlsx`">Excel</DownloadLink>
      </div>
    </div>
    <UsdVariationChart />
  </main>
</template>
