import { fetchDataFromAPI } from '../data/apiData.js'

export const getOpenedSessionData = async (sessionID) => {
  const data = await fetchDataFromAPI('GET', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}`)
  return await data
}
