const width = window.innerWidth
const height = window.innerHeight
const margin = { width: (0.1 * width), height: (0.1 * height) }
const size = 10

// Create the svg in the body
const svg = d3.select('#graph').append('svg')
  .attr('width', width - 0)
  .attr('height', height - 200)

// Scale
const xScale = d3.scaleLinear().range([0 + margin.width, width - margin.width - 0])
const yScale = d3.scaleLinear().range([0 + margin.height, height - margin.height - 200])

const updateGraph = async (data) => {
  const nodes = data.nodes
  const links = data.links

  // const linkGen = d3.linkRadial()

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

    // Make a divrent between item en persons
    // let itemNumber = -1;
    // let personNumber = -1;

  circle
    .transition()
    .attr('cx', (nodes) => xScale(nodes.x))
    .attr('cy', (nodes) => yScale(nodes.y))
    .attr('r', (nodes) => {
      if (nodes.label === 'person') {
        return 30
      } else {
        return 10
      }
      
    })
    .attr('class', (nodes) => nodes.label)
    .attr('id', (nodes) => { 

      // if item has label person give id person and persons number
      // if(nodes.label === "person"){
      //   personNumber++;
      //   return nodes.label+personNumber
      // }
      // / if item has label item give id item and item number
      // if(nodes.label === "item"){
      //   itemNumber++;
      //   return nodes.label+itemNumber
      // }
      // return id from item to use in highlight code
      return "node"+nodes.id
    })



  // const link = svg.append('g')
  //   .attr('stroke', '#fff')
  //   .attr('stroke-opacity', 0.6)
  //   .selectAll('line')
  //   .data(links)
  //   .join('line')
  //   .attr('x1', d => d.source.x)
  //   .attr('y1', d => d.source.y)
  //   .attr('x2', d => d.target.x)
  //   .attr('y2', d => d.target.y)
}


export default updateGraph
