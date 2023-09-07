<script setup lang="ts">
import { useRootStore } from '@/stores/root'
import { storeToRefs } from 'pinia'

const { year } = storeToRefs(useRootStore())
</script>

<template>
  <h3>Seleccione año</h3>
  <select
    id="countries"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    v-model="year"
  >
    <!-- https://mindicador.cl/ API has records from 1984 up to now -->
    <option class="text-white p-3" v-for="i in 40" v-bind:value="2024 - i" v-bind:key="i">
      {{ 2024 - i }}
    </option>
  </select>
</template>
