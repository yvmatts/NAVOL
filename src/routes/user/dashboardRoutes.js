const {Router} = require('express')
const dashController = require('../../controllers/user/dashboardController')
const { requireAuth } = require('../../middleware/authMiddleware')
const dashRouter = Router()

dashRouter.post('/schedule', dashController.schedule_post)

module.exports = dashRouter