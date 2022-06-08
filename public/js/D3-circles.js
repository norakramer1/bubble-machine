const width = window.innerWidth
const height = window.innerHeight
const margin = { width: (0.1 * width), height: (0.1 * height) }
const size = 10

const color = d3.scaleLinear()
  .domain([0, 5])
  .range(['hsl(152,80%,80%)', 'hsl(228,30%,40%)'])
  .interpolate(d3.interpolateHcl)

const pack = data => d3.pack()
  .size([width, height])
  .padding(3)
  (d3.hierarchy(data)
    .sum(d => d.value)
    .sort((a, b) => b.value - a.value))

// Create the svg in the body
export const createCirleGraph = (root) => {
let focus = root
let view
const svg = d3.select('figure').append('svg')
  .attr('viewBox', `-${width / 2} -${height / 2} ${width} ${height}`)
  .style('display', 'block')
  .style('margin', '0 -14px')
  .style('background', color(0))
  .style('cursor', 'pointer')
  .on('click', (event) => zoom(event, root))

// Scale
const xScale = d3.scaleLinear().range([0 + margin.width, width - margin.width])
const yScale = d3.scaleLinear().range([0 + margin.height, height - margin.height])

// const nodes = data.nodes
// const links = data.links

// xScale.domain([d3.min(nodes, (d) => d.x), d3.max(nodes, (d) => d.x)])
// yScale.domain([d3.min(nodes, (d) => d.y), d3.max(nodes, (d) => d.y)])

const node = svg.append('g')
  .selectAll('circle')
  .data(root.nodes)
  .join('circle')
  .attr('fill', (d) => d.x ? color(d.x) : 'white')
  .attr('pointer-events', (d) => !d.x ? 'none' : null)
  .on('mouseover', function () { d3.select(this).attr('stroke', '#000') })
  .on('mouseout', function () { d3.select(this).attr('stroke', null) })
  .on('click', (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()))

// const label = svg.append('g')
//   .style('font', '10px sans-serif')
//   .attr('pointer-events', 'none')
//   .attr('text-anchor', 'middle')
//   .selectAll('text')
//   .data(root.descendants())
//   .join('text')
//   .style('fill-opacity', d => d.parent === root ? 1 : 0)
//   .style('display', d => d.parent === root ? 'inline' : 'none')

zoomTo([root.x, root.y, root.r * 2])

function zoomTo (v) {
  const k = width / v[2]

  view = v

  // label.attr('transform', d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`)
  node.attr('transform', d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`)
  node.attr('r', d => d.r * k)
}

function zoom (event, d) {
  const focus0 = focus

  focus = d

  const transition = svg.transition()
    .duration(event.altKey ? 7500 : 750)
    .tween('zoom', d => {
      const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2])
      return t => zoomTo(i(t))
    })

  // label
  //   .filter(function (d) { return d.parent === focus || this.style.display === 'inline' })
  //   .transition(transition)
  //   .style('fill-opacity', d => d.parent === focus ? 1 : 0)
  //   .on('start', function (d) { if (d.parent === focus) this.style.display = 'inline' })
  //   .on('end', function (d) { if (d.parent !== focus) this.style.display = 'none' })
}
}