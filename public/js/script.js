
import createGraph from './D3-gooGraph.js'

import { fetchDataFromAPI } from './modules/apiData.js'
import { createSession } from './modules/createSession.js'
import { resetSession } from './modules/resetSession.js'
import { nextStep } from './modules/updateSession.js'

const sessionID = 3
const menuButton = document.getElementById('menuButton')
const menu = document.querySelector('section')
const parameterButtons = document.querySelectorAll('section ul li')
const accordionButton =  document.querySelectorAll('section ul li img')


const resetBtn = document.querySelector('#resetSimulation')
const nextBtn = document.querySelector('#nextStep')
const sessionBtn = document.querySelector('#makeSession')

  parameterButtons.forEach(accordion => {
    accordion.addEventListener('click', () => 
     accordion.classList.toggle('open-menu'));
     accordionButton.currentSrc = 'img/arrow-up.png';
  });

const openMenu = () => {
    menu.classList.toggle('open')

}

menuButton.addEventListener('click', openMenu)



// Initial display of graph
const data = await fetchDataFromAPI('GET', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}`);
createGraph(await data)

nextBtn.addEventListener('click', nextStep)
resetBtn.addEventListener('click', resetSession)


// When clicking on zoomIn button change viewBox to zoom
document.querySelector("#zoomIn").addEventListener('click', (e) => {
  console.log("test");
    document.querySelector("#mysvg").setAttribute("viewBox", "-0.5 -0.5  1 1"); 
  }, false);
  
  // When clicking on zoomOut button change viewBox to zoom
  document.querySelector("#zoomOut").addEventListener('click', (e) => {
    document.querySelector("#mysvg").setAttribute("viewBox", "-1 -1  2 2");
  }, false);


  const exampleSocket = new WebSocket('ws://bubble-machine-api-dummy.herokuapp.com/action')

    exampleSocket.onopen = function (event) {
      exampleSocket.send('{"id": 3}')
    }
  
    const object = {
      nodes: []
    }

  exampleSocket.onmessage = async function (event) {
    const socketData = await JSON.parse(event.data)
      // console.log(await socketData.id)
      const updateId = await socketData.id
      const test = await data.nodes.find(id => id.id === updateId)
      // console.log(await test)
      test.x = await socketData.x
      test.y = await socketData.y

    await createGraph(data)

  }