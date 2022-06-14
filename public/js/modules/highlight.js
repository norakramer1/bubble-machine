// Get API data
import { fetchDataFromAPI } from './apiData.js'
const sessionID = window.location.hash.slice(1)
const data = await fetchDataFromAPI('GET', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}`)

// Wait 1 second to wait for svg circles loaded
// function delay(time) {
//   return new Promise(resolve => setTimeout(resolve, time));
// }

// Add hover highlight of curent item you hovert and connected items
export const highlight = async () => {
  // await delay(1000);
  const element = document.querySelector('svg')
  const children = element.children

  children.forEach(child => child.addEventListener('mouseenter', () => {
    const element2 = document.querySelector('svg')
    const children2 = element2.children

    children2.forEach(child2 => child2.style.opacity = '0.1')
    child.style.opacity = '1'
    const currentitem = child.id.replace('node', '')

    for (const item of data.links) {
      if (item.source == currentitem) {
        document.querySelector(`#node${item.target}`).style.opacity = '1'
      }
      if (item.target == currentitem) {
        document.querySelector(`#node${item.source}`).style.opacity = '1'
      }
    }

  }))

    // When leaving mouse from item remove opacity
    children[i].addEventListener('mouseleave', () => {
      const element2 = document.querySelector('svg')
      const children2 = element2.children
      for (let i = 0; i < children2.length; i++) {
        children2[i].style.opacity = '1'
      }
    })
  }

