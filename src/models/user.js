const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minLength: 8
    }
})

userSchema.pre('save', async function(next) {
    const salt = await bcryptjs.genSalt()
    this.password = await bcryptjs.hash(this.password, salt)
    next()
  })

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcryptjs.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('Invalid credentials');
    }
    throw Error('User not registered');
  };

const user = mongoose.model('user', userSchema);

module.exports = user;