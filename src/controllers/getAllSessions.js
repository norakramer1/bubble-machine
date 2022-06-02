import fetch from 'node-fetch'
const url = 'https://bubble-machine-api-dummy.herokuapp.com/rest/session/'

export const getAllSessions = async () => {
    const data = await fetch(url)
    const response = await data.json()
    return response
  }