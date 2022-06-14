/* eslint-disable no-undef */
const width = window.innerWidth
const height = window.innerHeight
const margin = { width: (0.1 * width), height: (0.1 * height) }

const svg = d3.select('#graph').append('svg')
  .attr('width', width - 0)
  .attr('height', height - 200)

// Scale
const xScale = d3.scaleLinear().range([0 + margin.width, width - margin.width - 0])
const yScale = d3.scaleLinear().range([0 + margin.height, height - margin.height - 200])

const updateGraph = async (data) => {
  // Create the svg in the body

  const nodes = data.nodes
  const links = data.links

  xScale.domain([d3.min(nodes, (d) => d.x), d3.max(nodes, (d) => d.x)])
  yScale.domain([d3.min(nodes, (d) => d.y), d3.max(nodes, (d) => d.y)])

  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id))
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(xScale(width), yScale(height)))

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
        return 15
      } else {
        return 5
      }
    })
    .attr('class', (nodes) => nodes.label)
    .attr('id', (nodes) => {
      return 'node' + nodes.id
    })

  const link = svg
    .selectAll('line')
    .data(links)
    .join(
      enter => {
        enter = enter
          .append('line')
          .attr('stroke', (nodes) => {
            if (nodes.label === 'friend') {
              return '#2780e7'
            } else {
              return '#aa46a3'
            }
          })
        return enter
      },

      update => update,
      exit => exit.attr('stroke', '#999')
    )

  link
    // .attr('stroke', '#999')
    .attr('stroke-opacity', 0.6)
    .attr('stroke-width', 1)
    .attr('class', (nodes) => nodes.label)

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)
  })
}

export default updateGraph
