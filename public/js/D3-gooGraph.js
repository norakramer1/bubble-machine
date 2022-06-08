/* eslint-disable no-undef */
const width = window.innerWidth
const height = window.innerHeight
const margin = { width: (0.1 * width), height: (0.1 * height) }

// Scale
const xScale = d3.scaleLinear().range([0 + margin.width, width - margin.width])
const yScale = d3.scaleLinear().range([0 + margin.height, height - margin.height])

const svg = d3.select('figure').append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .style('filter', 'url(#gooey)') // Set the filter on the container
//   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

const defs = svg.append('defs')
const filter = defs.append('filter').attr('id', 'gooey')
filter.append('feGaussianBlur')
  .attr('in', 'SourceGraphic')
  .attr('stdDeviation', '10')
  .attr('result', 'blur')
filter.append('feColorMatrix')
  .attr('in', 'blur')
  .attr('mode', 'matrix')
  .attr('values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7')
  .attr('result', 'gooey')
filter.append('feComposite')
  .attr('in', 'SourceGraphic')
  .attr('in2', 'gooey')
  .attr('operator', 'atop')

const createGraph = async (data) => {
  const nodes = data.nodes

  xScale.domain([d3.min(nodes, (d) => d.x), d3.max(nodes, (d) => d.x)])
  yScale.domain([d3.min(nodes, (d) => d.y), d3.max(nodes, (d) => d.y)])

  const circle = svg.selectAll('circle').data(nodes).join(
    (enter) => {
      enter = enter.append('circle')
      return enter
    },
    (update) => update,
    (exit) => exit.remove()
  )

  circle
    .transition()
    .attr('cx', (nodes) => xScale(nodes.x))
    .attr('cy', (nodes) => yScale(nodes.y))
    .attr('r', (nodes) => {
      if (nodes.label === 'person') {
        return 20
      } else {
        return 5
      }
    })
    .attr('class', (nodes) => nodes.label)
}

export default createGraph
