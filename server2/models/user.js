const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email Address')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(value) {
            if (!value.toLowerCase().match(/[!@#$%^&*(),.?":{}|<>]/)) {
                throw new Error('Password must contain a special character')
            }
        }
    },
    profile: {
        age: {
          type: Number,
          required: true
        },
        gender: {
          type: String,
          enum: ['male', 'female', 'other'],
          required: true
        },
        preferences: {
          treatment_type: {
            type: [String],
            default: []
          },
          budget: {
            type: Number
          },
          destination_preference: {
            type: [String],
            default: []
          }
        }
      },
      bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking'
      }],
      tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
}, {
    timestamps: true
})

userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user.id.toString() }, 'thisismysecret')

  user.tokens = user.tokens.concat({ token })
  await user.save()
  
  return token
}

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })

  if (!user) {
      throw new Error('Unable to login')
  }
  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
      throw new Error('Unable to login')
  }

  return user
}

//hashing the plaintext password before saving 
userSchema.pre('save', async function (next) {
  const user = this

  if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})


const User = mongoose.model('User', userSchema)
module.exports = User