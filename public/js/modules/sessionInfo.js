import { fetchAPI } from './script.js'

export const getCurrentSessionData = (sessionID) => {
    const data = await fetchAPI('GET', `https://bubble-machine-api-dummy.herokuapp.com/rest/session/${sessionID}`)
    return data
}