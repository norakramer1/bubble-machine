import { getAllSessions } from "./getAllSessions.js"

export const renderLogin = async (req, res) => {
    const sessions = await getAllSessions()
    res.render('home', {
      sessions
    })
  }
