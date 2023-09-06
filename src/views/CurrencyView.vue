<script setup lang="ts">
import CustomTitle from '@/components/CustomTitle.vue'
import DownloadLink from '@/components/DownloadLink.vue'
import YearSelect from '@/components/YearSelect.vue'
import { useRootStore } from '@/stores/root'
const link = import.meta.env.VITE_API_URL
const store = useRootStore()
</script>

<template>
  <main class="relative p-3 min-h-screen max-h-screen md:ml-20% md:mr-20% ml-[5%] mr-5%">
    <CustomTitle>Variación diaria del valor del dólar en pesos chilenos</CustomTitle>
    <YearSelect />
    <div class="flex gap-2 flex-wrap">
      <h3 class="w-full">Descargar historico</h3>
      <DownloadLink :link="link + `/dollar/diff/${store.year}?filetype=csv`">CSV</DownloadLink>
      <DownloadLink :link="link + `/dollar/diff/${store.year}?filetype=xlsx`">Excel</DownloadLink>
    </div>
  </main>
</template>
