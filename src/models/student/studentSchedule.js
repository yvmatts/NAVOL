const mongoose = require('mongoose')

const studentScheduleSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    schedule: {
        type: String,
        required: true
    }
})

const studentSchedule = mongoose.model('studentSchedule', studentScheduleSchema)
module.exports = studentSchedule