const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const conf = require('../../conf')
const path = require('path')

const handleErrors = (err) => {
    let errors = {email: null, password: null}  
    
    if (err.message === 'User not registered') {
      errors.email = 'User not registered'
    }
  
    else if (err.message === 'Invalid credentials') {
      errors.password = 'Invalid credentials'
    }
  
    else if (err.code === 11000) {
      errors.email = 'Email is already registered'
      return errors
    }
    else if (err.message.includes('user validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message
      })
    }
    return errors
  }

const maxAge = 3 * 60 * 60
const createToken = (id) => {
  return jwt.sign({ id }, conf.secretKey, {
    expiresIn: maxAge
  })
}

/**
 * Login Get
 * @param {redirectUrl} res 
 */
module.exports.login_get = (req,res) => {
  console.log(path.join(__dirname,'../../build', 'index.html'))
  res.sendFile(path.join(__dirname,'../../build', 'index.html'))
}

/**
 * Logout Post
 * @param {email, password} req 
 * @param {user._id} res 
 */
 module.exports.logout_get = (req, res) => {
  const logoutUrl = '/'
  res.cookie('jwt', '', { maxAge: 1 });
  res.status(201).json(logoutUrl);
}

/**
 * Login Post
 * @param {email, password} req 
 * @param {user._id} res 
 */
module.exports.login_post  = async (req, res) => {
    const { email, password } = req.body
  try {
    const user = await User.login(email, password)
    const token = createToken(user._id)
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.status(200).json({ id: user._id })
  } catch (err) {
    const errors = handleErrors(err)
    res.status(400).send(errors)
  }
}

/**
 * Register Post
 * @param {email, password} req 
 * @param {user._id} res 
 */
module.exports.register_post  = async(req, res) => {
    const {email, password} = req.body
    try{
        const user = await User.create({email,password})
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({id: user._id})
    } catch (err){
        const errors = handleErrors(err)
        res.status(403).send(errors)
    }
}