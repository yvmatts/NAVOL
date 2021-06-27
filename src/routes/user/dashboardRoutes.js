const {Router} = require('express')
const dashController = require('../../controllers/user/dashboardController')
const { requireAuth } = require('../../middleware/authMiddleware')
const dashRouter = Router()

dashRouter.get('/schedule',requireAuth, dashController.schedule_get)
dashRouter.post('/schedule',requireAuth, dashController.schedule_post)

module.exports = dashRouter