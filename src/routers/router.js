import express from 'express'
import { renderLogin } from '../controllers/uiController.js'
// import { socket } from '../controllers/uiController.js'
import { renderOnboarding } from '../controllers/uiController.js'


export const router = express.Router()

router
    .get('/', renderLogin)
    .post('/socket', renderLogin)
    .get('/onboarding', renderOnboarding)



