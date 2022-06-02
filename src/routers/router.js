import express from 'express'
import { checkButtonState } from '../controllers/buttonState.js'

import { renderLogin } from '../controllers/uiController.js'

export const router = express.Router()

router
    .get('/', renderLogin)
    .post('/', checkButtonState)


