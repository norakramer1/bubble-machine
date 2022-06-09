
import createDragGraph from '../D3-dragGraph.js'

import { fetchDataFromAPI } from './apiData.js'

export const nextStep = async (sessionID) => {
  fetchDataFromAPI('POST', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}/step`)
  const data = await fetchDataFromAPI('GET', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}`)
  createDragGraph(await data)
}
