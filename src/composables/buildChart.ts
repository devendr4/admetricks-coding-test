import type { ChartData } from '@/types'
import * as d3 from 'd3'

export const buildChart = (data: ChartData[], year: number) => {
  const margin = { top: 40, right: 30, bottom: 80, left: 80 }
  const width = 800 - margin.left - margin.right
  const height = 600 - margin.top - margin.bottom

  const x = d3.scaleTime().range([0, width])

  const y = d3.scaleLinear().range([height, 0])

  // Create the SVG element and append it to the chart container

  //clear previous svg if year is changed
  d3.select('svg').selectAll('*').remove()
  const svg = d3
    .select('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  // Define the x and y domains

  x.domain(d3.extent(data, (d) => d.date))
  y.domain([d3.min(data, (d) => d.variation) - 20, d3.max(data, (d) => d.variation) + 20])

  // Add the x-axis

  svg
    .append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x).ticks(d3.timeMonth.every(1)).tickFormat(d3.timeFormat('%d/%m/%Y')))

  // Add the y-axis

  svg
    .append('g')
    .call(
      d3
        .axisLeft(y)
        .tickFormat((d) => `$${d} CLP`)
        .tickSize(0)
        .tickPadding(10)
    )
    .call((d) => d.select('.domain').remove())

  svg
    .append('text')
    .attr('class', 'chart-title')
    .attr('x', margin.left - 115)
    .attr('y', margin.top - 100)
    .style('font-size', '24px')
    .style('font-weight', 'bold')
    .style('font-family', 'sans-serif')
    .text('Variación diaria del valor del dólar en pesos chilenos ' + year)

  //y axis label
  svg
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 0 - margin.left)
    .attr('x', 0 - height / 2)
    .attr('dy', '1em')
    .style('text-anchor', 'middle')
    .style('font-size', '14px')
    .style('fill', '#777')
    .style('font-family', 'sans-serif')
    .text('USD Variation in CLP' + year)

  // background grid
  svg
    .selectAll('yGrid')
    .data(y.ticks())
    .join('line')
    .attr('x1', 0)
    .attr('x2', width)
    .attr('y1', (d) => y(d))
    .attr('y2', (d) => y(d))
    .attr('stroke', '#e0e0e0')
    .attr('stroke-width', 0.5)

  // Create the line generator
  const line = d3
    .line()
    .x((d) => x(d.date))
    .y((d) => y(d.variation))

  // Add the line path to the SVG element

  svg
    .append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', '#a5c0f0')
    .attr('stroke-width', 3)
    .attr('d', line)
}
