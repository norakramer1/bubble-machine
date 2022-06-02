import fetch from 'node-fetch'
import { renderLogin } from './uiController.js'

const url = 'https://bubble-machine-api-dummy.herokuapp.com/rest/session/'

export const deleteSession = async (req, res) => {
    const sessionId = req.body.value
    const options = {
      headers: {
        Accept: '*/*'
      },
      method: 'DELETE'
    }
    await fetch(url + sessionId, options)
}