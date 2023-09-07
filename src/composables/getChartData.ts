import type { ChartData } from '@/types'
import axios from 'axios'
import * as d3 from 'd3'
import { ref, watchEffect, type Ref, toValue } from 'vue'

export const useGetChartData = (year: Ref<number>) => {
  const link = import.meta.env.VITE_API_URL
  const data = ref<ChartData[]>()
  const error = ref()
  const parseDate = d3.timeParse('%Y-%m-%d')
  watchEffect(() => {
    console.log('getting', year)

    axios
      .get(`${link}/usd/${toValue(year)}`)
      .then((v) => {
        const chartData: ChartData[] = v.data.data

        chartData?.forEach((d) => {
          d.date = parseDate(d.date as string)
          d.variation = +d.variation
        })

        data.value = chartData
      })
      .catch((e) => (error.value = e))

    // console.log(data.value)

    console.log(parseDate('2023-09-07'))
  })

  return { data, error }
}
