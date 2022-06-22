import updateGraph from '../d3/D3-graph.js'
import { getOpenedSessionData } from '../sessions/currentSessionData.js'
import { deleteSession } from '../sessions/deleteSession.js'

export const getSessionTabs = () => {
  const sessionTabs = document.querySelectorAll('header > ul li')

  sessionTabs.forEach(session => {
    const openSession = async () => {
      if (session.className === 'addButton') {
        return
      } else {
        sessionTabs.forEach(session => session.classList.remove('opened'))
        const data = await getOpenedSessionData(session.className)
        updateGraph(await data)
        session.classList.add('opened')
      }
    }
    session.addEventListener('click', () => openSession())
  })
}

export const getTabCloseButtons = () => {
  const tabCloseButtons = document.querySelectorAll('header > ul li button')

  tabCloseButtons.forEach(tab => {
    const clicked = () => {
      if (tab.className) {
        deleteSession(tab.className)
        window.location.hash = ''
      }
    }
    tab.addEventListener('click', clicked)
  })
}
