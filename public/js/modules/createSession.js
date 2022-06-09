import createGraph from '../D3-gooGraph.js'

import { fetchDataFromAPI } from './apiData.js'

export const createSession = async (sessionID) => {
  fetchDataFromAPI('POST', 'https://bubble-machine-api-dummy.herokuapp.com/rest/session')
  const data = fetchDataFromAPI('GET', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}`)
  createGraph(await data)
}
