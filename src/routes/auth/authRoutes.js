const {Router} = require('express')
const authController = require('../../controllers/auth/authController')
const authRouter = Router()

authRouter.get('/',authController.login_get)
authRouter.post('/register', authController.register_post)
authRouter.post('/login', authController.login_post)
authRouter.get('/logout', authController.logout_get)

module.exports = authRouter