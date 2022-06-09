
import createDragGraph from '../D3-dragGraph.js'

import { fetchDataFromAPI } from './apiData.js'

export const resetSession = async (sessionID) => {
  await fetchDataFromAPI('PUT', 'https://bubble-machine-api-dummy.herokuapp.com/rest/session/3/reset')
  const data = await fetchDataFromAPI('GET', 'https://bubble-machine-api-dummy.herokuapp.com/rest/session/3')
  createDragGraph(await data)
}
