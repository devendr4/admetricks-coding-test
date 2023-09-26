// @ts-nocheck
//

import type { ChartData } from '@/types';
import * as d3 from 'd3';
import { responsivefy } from '@/utils/d3';

export const useBuildLineChart = (data: ChartData[], year: number) => {
  const margin = { top: 10, right: 50, bottom: 30, left: 90 };
  const width = 900 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;

  //x and y scales
  const x = d3.scaleTime().range([0, width]);

  const y = d3.scaleLinear().range([height, 0]);

  //clear previous svg if year is changed
  d3.select('#chart-container').selectAll('*').remove();

  const svg = d3
    .select('#chart-container')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .call(responsivefy) // this is all it takes to make the chart responsive
    //g is a container to group other svg elements
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  // Define the x and y domains
  const minY = d3.min(data, (d) => d.variation);
  const maxY = d3.max(data, (d) => d.variation);

  // data that will fit in the ranges previously defined
  x.domain(d3.extent(data, (d) => d.date));

  //domain goes from minimum received value to maxiumom received value, giving additional 20 to each side so
  //so the line is generated right in the middle of the chart
  y.domain([minY - 20, maxY + 20]);

  // Add the x-axis

  svg
    .append('g')
    //moves x axis to the bottom
    .attr('transform', `translate(0,${height + 10})`)
    .call(d3.axisBottom(x).ticks(d3.timeMonth.every(1)).tickFormat(d3.timeFormat('%d/%m/%Y')));

  // Add the y-axis

  svg
    .append('g')
    .style('font-size', '14px')
    .call(
      d3
        .axisLeft(y)
        //adds CLP text to the ticks
        .tickFormat((d) => `$${d} CLP`)
        .tickSize(0)
        .tickPadding(10)
    )
    //removes y axis but keeps ticks
    .call((d) => d.select('.domain').remove());

  //y axis label
  svg
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 0 - margin.left)
    //centers vertically
    .attr('x', 0 - height / 2)
    //shift alongside y axis
    .attr('dy', '1em')
    .style('text-anchor', 'middle')
    .style('font-size', '14px')
    .style('fill', '#777')
    .style('font-family', 'sans-serif')
    .text('USD Variation in CLP ' + year);

  // background grid
  svg
    .selectAll('yGrid')
    .data(y.ticks())
    .join('line')
    //x1 beggining x2 end of line
    .attr('x1', 0)
    .attr('x2', width)
    .attr('y1', (d) => y(d))
    .attr('y2', (d) => y(d))
    .attr('stroke', '#e4e4e5')
    .attr('stroke-width', 0.8);

  const tooltip = d3.select('section').append('div').attr('class', 'tooltip');

  // Add a circle element

  const circle = svg
    .append('circle')
    .attr('r', 0)
    .attr('fill', 'steelblue')
    .style('stroke', 'white')
    .attr('opacity', 0.9)
    .style('pointer-events', 'none');
  // create a listening rectangle

  const listeningRect = svg.append('rect').attr('width', '100%').attr('height', '100%');

  // create the mouse move function

  listeningRect.on('mousemove', function (event) {
    const [xCoord] = d3.pointer(event, this);
    const bisectDate = d3.bisector((d) => d.date).left;
    const x0 = x.invert(xCoord);
    //takes position of mouse and finds the closest data point to show tooltip
    const i = bisectDate(data, x0, 1);
    const d0 = data[i - 1];
    const d1 = data[i];
    const d = x0 - d0?.date > d1?.date - x0 ? d1 : d0;
    const xPos = x(d.date);
    const yPos = y(d.variation);

    // Update the circle position

    circle.attr('cx', xPos).attr('cy', yPos);

    // Add transition for the circle radius

    circle.transition().duration(50).attr('r', 5);

    // tooltip

    tooltip
      .style('display', 'block')
      .style('left', `${xPos}px`)
      .style('top', `${yPos}px`)
      .html(
        `<strong>Date:</strong> ${d.date.toLocaleDateString()}<br><strong>Variation:</strong> ${
          (d.variation > 0 ? '+' : '') + d.variation
        } CLP`
      );
  });
  // listening rectangle mouse leave function
  listeningRect.on('mouseleave', function () {
    circle.transition().duration(50).attr('r', 0);

    tooltip.style('display', 'none');
  });

  // line generator
  const line = d3
    .line()
    .x((d) => x(d.date))
    .y((d) => y(d.variation));

  // Add line path
  svg
    .append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', '#a5c0f0')
    .attr('stroke-width', 3)
    .attr('d', line);
};
