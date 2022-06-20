
import updateGraph from './modules/d3/D3-graph.js'
import { resetSession } from './modules/sessions/resetSession.js'
import { nextStep } from './modules/sessions/updateSession.js'
import { autoPlay } from './modules/sessions/playSession.js'
import { getAllActiveSessions } from './modules/sessions/getAllSessions.js'
import { deleteSession } from './modules/sessions/deleteSession.js'
import { createSession } from './modules/sessions/createSession.js'
import { getOpenedSessionData } from './modules/sessions/currentSessionData.js'
import { highlight } from './modules/d3/highlight.js'
import { downloadSVG } from './modules/data/downloadGraph.js'
import { dropdown } from './modules/ui/dropdown.js'
import { accordion } from './modules/ui/accordion.js'


highlight();

await getAllActiveSessions()
    
// Buttons
const parameterButtons = document.querySelectorAll('section ul li')
const resetButton = document.querySelector('#resetSimulation')
const nextButton = document.querySelector('#nextStep')
const autoButton = document.querySelector('#autoPlay')
const addButton = document.querySelector('.addButton')
const downloadButton = document.querySelector("#downloadSVG")
const dropdownBtn = document.querySelector('#parameterBtn')
export const sessionTabs = document.querySelectorAll('header > ul li')
export const tabCloseButtons = document.querySelectorAll('header > ul li button')


const hash = window.location.hash.slice(1)

if(hash) {
  const data = await getOpenedSessionData(hash)
  updateGraph(await data)
}

parameterButtons.forEach(accordion => {
  accordion.addEventListener('click', () =>
    accordion.classList.toggle('open-menu'))
})

accordion()


sessionTabs.forEach(session => {
  const openSession = async () => {
    if(session.className === 'addButton') {
      return
    } else {
      window.location.hash = session.className
      sessionTabs.forEach(session => session.classList.remove('opened'))
      const data = await getOpenedSessionData(session.className)
      // highlight(session.className)
      updateGraph(await data)
      session.classList.add('opened')
    }
  }
  session.addEventListener('click', () => openSession())
})

tabCloseButtons.forEach(tab => {
  const clicked = () => {
    if (tab.className) { 
      deleteSession(tab.className) 

    }
  }
  tab.addEventListener('click', clicked)
})

// parameter buttons
parameterButtons.forEach(accordion => {
  accordion.addEventListener('click', () => 
   accordion.classList.toggle('open-menu'));
});

const socketConnection= new WebSocket('ws://bubble-machine-api-dummy.herokuapp.com/action')

socketConnection.onopen = function (event) {
  socketConnection.send('{"id": 17}')
}

socketConnection.onmessage = async function (event) {
const socketData = await JSON.parse(event.data)
console.log(socketData)
}


// Button Functions
nextButton.addEventListener('click', () => nextStep(window.location.hash.slice(1)))
resetButton.addEventListener('click', () => resetSession(window.location.hash.slice(1)))
autoButton.addEventListener('click', () => autoPlay(window.location.hash.slice(1)))
addButton.addEventListener('click', () => createSession())
downloadButton.addEventListener('click', () => downloadSVG())
dropdownBtn.addEventListener('click', dropdown)
