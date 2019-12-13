const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
});

userSchema.methods.toJSON = function() {
  const userObj = this.toObject();
  delete userObj.__v;
  delete userObj.password;
  return userObj;
};
userSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

module.exports = mongoose.model('User', userSchema);
