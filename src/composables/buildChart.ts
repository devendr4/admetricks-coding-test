import type { ChartData } from '@/types'
import * as d3 from 'd3'

export const useBuildLineChart = (data: ChartData[], year: number) => {
  const margin = { top: 40, right: 30, bottom: 80, left: 80 }
  const width = 1200 - margin.left - margin.right
  const height = 600 - margin.top - margin.bottom

  const x = d3.scaleTime().range([0, width])

  const y = d3.scaleLinear().range([height, 0])

  // Create the SVG element
  //clear previous svg if year is changed
  d3.select('svg').selectAll('*').remove()
  const svg = d3
    .select('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', '0 0 ' + width + ' ' + height)
    .attr('preserveAspectRatio', 'xMinYMin')
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
    .attr('stroke', '#e4e4e5')
    .attr('stroke-width', 0.8)

  // circle
  //
  const tooltip = d3.select('section').append('div').attr('class', 'tooltip')

  // Add a circle element

  const circle = svg
    .append('circle')
    .attr('r', 0)
    .attr('fill', 'steelblue')
    .style('stroke', 'white')
    .attr('opacity', 0.7)
    .style('pointer-events', 'none')
  // create a listening rectangle

  const listeningRect = svg.append('rect').attr('width', '100%').attr('height', '100%')

  // create the mouse move function

  listeningRect.on('mousemove', function (event) {
    const [xCoord] = d3.pointer(event, this)
    const bisectDate = d3.bisector((d) => d.date).left
    const x0 = x.invert(xCoord)
    const i = bisectDate(data, x0, 1)
    const d0 = data[i - 1]
    const d1 = data[i]
    const d = x0 - d0?.date > d1?.date - x0 ? d1 : d0
    const xPos = x(d.date)
    const yPos = y(d.variation)

    // Update the circle position

    circle.attr('cx', xPos).attr('cy', yPos)

    // Add transition for the circle radius

    circle.transition().duration(50).attr('r', 5)

    // add in  our tooltip

    tooltip
      .style('display', 'block')
      .style('left', `${xPos}px`)
      .style('top', `${yPos}px`)
      .html(
        `<strong>Date:</strong> ${d.date.toLocaleDateString()}<br><strong>Variation:</strong> ${
          d.variation || 'N/A'
        }`
      )
  })
  // listening rectangle mouse leave function

  listeningRect.on('mouseleave', function () {
    circle.transition().duration(50).attr('r', 0)

    tooltip.style('display', 'none')
  })

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
