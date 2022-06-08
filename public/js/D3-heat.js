const color = d3.scaleOrdinal(d3.schemeCategory10)

const width = window.innerWidth
const height = window.innerHeight

const createHeatMap = (data) => {
  const root = d3.hierarchy(data)
  const links = root.links()
  const nodes = root.descendants()

  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.label).distance(0).strength(1))
    .force('charge', d3.forceManyBody().strength(-80))
    .force('x', d3.forceX())
    .force('y', d3.forceY())

  const svg = d3.select('figure').append('svg')
    .attr('viewBox', [-width / 2, -height / 2, width, height])

  const bg = svg.append('rect')
    .attr('x', '-477')
    .attr('y', '-400')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', '#F5F7FA')

  const nodey = svg.append('g')
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('fill', 'hsla(160,100%,30%,0.3)')
    .attr('r', 20)
    .call(drag(simulation))

  const link = svg.append('g')
    .attr('stroke', '#663201')
    .attr('stroke-opacity', 1)
    .attr('stroke-width', 3)
    .selectAll('line')
    .data(links)
    .join('line')

  const node = svg.append('g')
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('fill', '#fff')
    .attr('r', 6)
    .call(drag(simulation))

  node.append('title')
    .text(d => d.data.name)

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)

    node
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
    nodey
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
  })

//   invalidation.then(() => simulation.stop())
}

const drag = simulation => {
  function dragstarted (event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart()
    d.fx = d.x
    d.fy = d.y
  }

  function dragged (event, d) {
    d.fx = event.x
    d.fy = event.y
  }

  function dragended (event, d) {
    if (!event.active) simulation.alphaTarget(0)
    d.fx = null
    d.fy = null
  }

  return d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended)
}

export default createHeatMap
