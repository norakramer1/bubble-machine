
// import createGraph from '../D3-gooGraph.js'
import { fetchDataFromAPI } from './apiData.js'

const sessionID = 3
export const nextStep = async () => {
  fetchDataFromAPI('POST', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}/step`)
  // const data = await fetchDataFromAPI('GET', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}`)
  // createGraph(await data)
}
