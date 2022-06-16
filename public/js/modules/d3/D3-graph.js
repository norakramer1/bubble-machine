/* eslint-disable no-undef */
const width = window.innerWidth
const height = window.innerHeight
const margin = { width: (0.1 * width), height: (0.1 * height) }

const svg = d3.select('#graph').append('svg')
  .attr('width', width)
  .attr('height', height)

// Scale
const xScale = d3.scaleLinear().range([0 + margin.width, width - margin.width - 0])
const yScale = d3.scaleLinear().range([0 + margin.height, height - margin.height - 200])

const updateGraph = async (data) => {
  // Create the svg in the body

  const nodes = data.nodes
  const links = data.links

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
    .attr('stroke', '#fff')
    .attr('stroke-width', 1.5)
    .attr('opacity', '0.1')
    .attr('class', (nodes) => nodes.label)
    .attr('fill', '#2781e7b2')
    .on('click', (event, d, i) => {
      // const nodeId = event.target.id.replace('node', '')
      d3.select(event.target)
        .attr('opacity', '1')
    })

    .attr('cx', (nodes) => xScale(nodes.x))
    .attr('cy', (nodes) => yScale(nodes.y))

    .attr('r', (nodes) => {
      if (nodes.label === 'person') {
        return 15
      } else {
        return 5
      }
    })
    .attr('class', (nodes) => nodes.label)
    .attr('id', (nodes) => {
      return 'node' + nodes.id
    })
}

export default updateGraph
