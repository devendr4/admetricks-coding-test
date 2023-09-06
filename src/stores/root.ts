import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', () => {
  const year = ref(2023)
  function setYear(newYear: number) {
    year.value = newYear
  }

  return { year, setYear }
})
