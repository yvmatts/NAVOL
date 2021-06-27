const studentSchedule = require('../../models/student/studentSchedule')
const jwt_decode = require('jwt-decode')

module.exports.schedule_post = async (req, res) => {
    
    try {
        const studentId = jwt_decode(req.cookies.jwt).id
        const schedule = req.body.schedule
        const student = await studentSchedule.findOne({studentId})
        if(student) {
            student.schedule = schedule
            const update = await student.save()
            res.send('Scheduler updated')
        } else {
            const newStudent = await studentSchedule.create({studentId, schedule})
            if(!newStudent){
                throw(Error('Unable to update schedule'))
            }
            res.send('Scheduler updated')
        }
    } catch(err) {
        res.json({error: 'Unable to update schedule'})
    }
}  

module.exports.schedule_get = async (req, res) => {
    try {
        const studentId = jwt_decode(req.cookies.jwt).id
        const student = await studentSchedule.findOne({studentId})
        if(student) {
            const schedule = student.schedule
            res.json({schedule: schedule})
        } else {
            res.json({schedule: []})
        }
    } catch(err) {
        res.json({error: 'Unable to update schedule'})
    }
}