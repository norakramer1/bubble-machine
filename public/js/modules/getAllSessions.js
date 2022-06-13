import { fetchDataFromAPI } from './apiData'

const url = 'https://bubble-machine-api-dummy.herokuapp.com/rest/session/'

export const getAllActiveSessions = async () => {
  const allSessions = await fetchDataFromAPI('GET', url)
  return await allSessions
}
