/* eslint-disable no-undef */
const width = window.innerWidth
const height = window.innerHeight
const margin = { width: (0.1 * width), height: (0.1 * height) }

const div = d3.select('body').append('div')
  .attr('class', 'tooltip')

const gethtml = (id, links) => {
  return `<div>node: ${id}</div> <div>link: ${links}</div> <div class = "itemSharers">Items shared: <span> ${links}</span></div><div class = "connectionPersons">Connection with persons : <span>${links}</span></div><div class = "itemPersons">Item linked wih persons: <span>${links}</span></div>`
}

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
  console.log(nodes)

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
    .on('mouseover', function (event, d, i) {
      d3.select(this).transition()
        .duration('50')
      div.transition()
        .duration(50)
        .style('opacity', 1)
      div.html(gethtml(d.id, d.label))
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 15) + 'px')
      d3.select('tick').transition()
        .duration('50')
        .attr('stroke-opacity', '0.6')
    })

    .on('mouseout', function (d, i) {
      d3.select(this).transition()
        .duration('50')
      // .attr('opacity', '1')
      div.transition()
        .duration('50')
        .style('opacity', 0)
      d3.select().transition()
        .duration('50')
      // .attr('stroke-opacity', '0')
      const boxes = document.querySelectorAll('line')

      boxes.forEach(box => {
        box.remove()
      })

      const svg = document.querySelector('#graph svg')
      const itemChildren = svg.children

      // Make alle items opacity 0.1
      for (let items = 0; items < itemChildren.length; items++) {
        itemChildren[items].classList.remove('opacity')
      }
    })
    .attr('stroke', '#fff')
    .attr('stroke-width', 1.5)
    .attr('opacity', '0.1')
    .attr('class', (nodes) => nodes.label)
    .attr('fill', '#2781e7b2')
    .on('click', (event, d, i) => {
      // const nodeId = event.target.id.replace('node', '')
      d3.select(event.target)
        .attr('opacity', '1')

      d3.select(this).transition()
        .duration('50')
        // .attr('opacity', '.85')
      div.transition()
        .duration(50)
        .style('opacity', 0)
      div.html(gethtml(d.id, d.label))
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 15) + 'px')
      d3.select('tick').transition()
        .duration('50')
        .attr('stroke-opacity', '0.6')
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
