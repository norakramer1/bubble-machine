
import createDragGraph from '../D3-dragGraph.js'
// import createGraph from '../D3-gooGraph.js'
// import updateGraph from '../D3-graph.js'
import { fetchDataFromAPI } from './apiData.js'

const sessionID = 3
export const nextStep = async () => {
  fetchDataFromAPI('POST', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}/step`)
  const data = await fetchDataFromAPI('GET', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}`)
  createDragGraph(await data)
  // updateGraph(await data)
  // update(await data)
}

// const update = (data) => {
//   const links = data.links
//   const nodes = data.nodes

//   const simulation = d3.forceSimulation(nodes)
//     .force('link', d3.forceLink(links).id(d => d.id).distance(200))
//     .force('charge', d3.forceManyBody())
//     .force('center', d3.forceCenter(width / 2, height / 2))

//   const svg = d3.select('svg')
//   const link = svg
//     .selectAll('line')
//     .data(links)
//     .join(
//       enter => {
//         enter = enter
//           .append('line')
//           .attr('stroke', (nodes) => {
//             if (nodes.id === 0) {
//               return '#2780e7'
//             } else {
//               return '#aa46a3'
//             }
//           })
//         return enter
//       },

//       update => update,
//       exit => exit.remove()
//     )

//   link
//     .attr('stroke-opacity', 0.6)
//     .attr('stroke-width', 1)
//     .attr('class', (nodes) => nodes.label)
//     .on('mouseover', function (event, d, i) {

//     })

//   const circle = svg
//     .selectAll('circle')
//     .data(nodes)
//     .join(
//       enter => {
//         enter = enter
//           .append('circle')
//           .attr('r', (nodes) => {
//             if (nodes.label === 'person') {
//               return 10
//             } else {
//               return 5
//             }
//           })
//         return enter
//       },
//       update => update,
//       exit => exit.remove()
//     )

//   circle
//     .attr('class', (nodes) => nodes.label)
//     .attr('fill', '#2781e7b2')
//     .attr('stroke', '#fff')
//     .attr('stroke-width', 0.5)

//     .on('mouseover', function (event, d, i) {
//       d3.select(this).transition()
//         .duration('50')
//         .attr('opacity', '.85')
//       div.transition()
//         .duration(50)
//         .style('opacity', 1)
//       div.html(gethtml(d.id, d.label))
//         .style('left', (event.pageX + 10) + 'px')
//         .style('top', (event.pageY - 15) + 'px')
//       d3.select('tick').transition()
//         .duration('50')
//         .attr('stroke-opacity', '0.6')
//     })

//     .on('mouseout', function (d, i) {
//       d3.select(this).transition()
//         .duration('50')
//         .attr('opacity', '1')
//       div.transition()
//         .duration('50')
//         .style('opacity', 0)
//       d3.select().transition()
//         .duration('50')
//         .attr('stroke-opacity', '0')
//     })
//     // .call(drag(simulation))

//   circle.append('title')
//     .text(d => d.id)

//   simulation.on('tick', () => {
//     link
//       .attr('x1', d => d.source.x)
//       .attr('y1', d => d.source.y)
//       .attr('x2', d => d.target.x)
//       .attr('y2', d => d.target.y)

//     circle
//       .attr('cx', d => d.x)
//       .attr('cy', d => d.y)
//   })
// }
