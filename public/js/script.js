/* eslint-disable no-useless-escape */

import updateGraph from './D3-graph.js'
import { resetSession } from './modules/resetSession.js'
import { nextStep } from './modules/updateSession.js'
import { autoPlay } from './modules/playSession.js'
import { getAllActiveSessions } from './modules/getAllSessions.js'
import { deleteSession } from './modules/deleteSession.js'
import { createSession } from './modules/createSession.js'
import { getOpenedSessionData } from './modules/currentSessionData.js'

import { highlight } from './modules/highlight.js'
// import { getAllActiveSessions } from './modules/getAllSessions.js'

const menuButton = document.getElementById('menuButton')
const menu = document.querySelector('section')
const parameterButtons = document.querySelectorAll('section ul li')

const resetBtn = document.querySelector('#resetSimulation')
const nextBtn = document.querySelector('#nextStep')
const autoBtn = document.querySelector('#autoPlay')
const addBtn = document.querySelector('.addBtn')

await getAllActiveSessions()

const hash = window.location.hash.slice(1)

if(hash) {
  const data = await getOpenedSessionData(hash)
  updateGraph(await data)
}

parameterButtons.forEach(accordion => {
  accordion.addEventListener('click', () =>
    accordion.classList.toggle('open-menu'))
})

const openMenu = () => {
  menu.classList.toggle('open')
  if (menu.matches('.open')) {
    menuButton.src = 'img/arrow-left.png'
  } else {
    menuButton.src = 'img/arrow-right.png'
  }
}

menuButton.addEventListener('click', openMenu)

// Initial display of graph

const sessionTabs = document.querySelectorAll('header > ul li')
const sessionTabCloseBtns = document.querySelectorAll('header > ul li button')

sessionTabs.forEach(session => {
  const openSession = async () => {
    if(session.className === 'addBtn') {
      return
    } else {
      window.location.hash = session.className
      sessionTabs.forEach(session => session.classList.remove('opened'))
      const data = await getOpenedSessionData(session.className)
      updateGraph(await data)
      session.classList.toggle('opened')
    }

    
  }
  session.addEventListener('click', () => openSession())
})

sessionTabCloseBtns.forEach(session => {
  const clicked = () => {
    if (session.className) { 
      deleteSession(session.className) 

    }
  }
  session.addEventListener('click', clicked)
})

// Buttons
nextBtn.addEventListener('click', () => nextStep(window.location.hash.slice(1)))
resetBtn.addEventListener('click', () => resetSession(window.location.hash.slice(1)))
autoBtn.addEventListener('click', () => autoPlay(window.location.hash.slice(1)))
addBtn.addEventListener('click', () => createSession())

// https://www.sitepoint.com/how-to-translate-from-dom-to-svg-coordinates-and-back-again/

// Function to download svg image
const downloadSVG = () => {
  // //get svg element.
  const svg2 = document.querySelector('svg')

  // get svg source.
  const serializer = new XMLSerializer()
  let source = serializer.serializeToString(svg2)

  // add name spaces.
  if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"')
  }
  if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
    source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"')
  }

  // add xml declaration
  source = '<?xml-stylesheet href="https://bubble-machine.herokuapp.com/css/style.css" version="1.0" standalone="no"?>\r\n' + source

  // convert svg source to URI data scheme.
  const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source)

  // make from button a download svg button
  document.getElementById("downloadSVG").setAttribute("href", url);
  document.getElementById("downloadSVG").setAttribute("download", "test.svg");
  
  }
  
  // When clicking on downloadSVG button download svg
  document.querySelector("#downloadSVG").addEventListener('click', (e) => {
    downloadSVG()
  }, false);

  highlight();

  
  // bron https://stackoverflow.com/questions/23218174/how-do-i-save-export-an-svg-file-after-creating-an-svg-with-d3-js-ie-safari-an
  
  
    
  
