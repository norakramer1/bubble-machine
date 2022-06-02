import fetch from 'node-fetch'
const url = 'https://bubble-machine-api-dummy.herokuapp.com/rest/session/'

export const createNewSession = async () => {
    const options = {
      headers: {
        Accept: '*/*'
      },
      method: 'POST'
    }
    const data = await fetch(url, options)
    const response = await data.json()
    return response
  }