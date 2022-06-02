
import { createNewSession } from "./createSession.js"
import { deleteSession } from "./deleteSession.js"
import { renderLogin } from "./uiController.js"

export const checkButtonState = async (req, res) => {
    const buttonState = req.body.value
     if(buttonState === 'add') {
        await createNewSession()
    }else {
        await deleteSession(req, res)
    }
    renderLogin(req, res)
}