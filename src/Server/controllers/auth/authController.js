const User = require('../../models/user')


const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {error: { email: '', password: ''}}        
    if (err.code === 11000) {
      errors.error.email = 'Email is already registered'
      return errors
    }
    if (err.message.includes('user validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors.error[properties.path] = properties.message
      })
    }
    return errors;
  }


module.exports.login  = (req, res) => {
    console.log(req.body)
}

module.exports.register  = async(req, res) => {
    const {email, password} = req.body
    try{
        const user = await User.create({email,password})
        res.status(201).json(user)
    } catch (err){
        const errors = handleErrors(err);
        res.status(400).json(errors)
    }
}

module.exports.logout  = (req, res) => {
    res.send('Logout POST')
}