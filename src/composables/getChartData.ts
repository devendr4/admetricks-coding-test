import type { ChartData } from '@/types';
import axios from 'axios';
import * as d3 from 'd3';
import { ref, watchEffect, type Ref, toValue } from 'vue';

export const useGetChartData = (year: Ref<number>) => {
  const link = import.meta.env.VITE_API_URL;

  const data = ref<ChartData[]>();
  const error = ref();
  const isLoading = ref(false);
  const parseDate = d3.timeParse('%Y-%m-%d');
  watchEffect(() => {
    isLoading.value = true;

    axios
      .get(`${link}/usd/${toValue(year)}`)
      .then((v) => {
        const chartData: ChartData[] = v.data.data;

        chartData?.forEach((d) => {
          const parsed = parseDate(d.date as string);
          if (parsed) d.date = parsed;
          d.variation = +d.variation;
        });

        chartData.sort((a, b) => +a.date - +b.date);
        data.value = chartData;
        isLoading.value = false;
      })
      .catch((e) => {
        error.value = e;
        isLoading.value = false;
      });
  });

  return { data, error, isLoading };
};
