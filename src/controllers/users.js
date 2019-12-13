const User = require('../models/user');

async function create(req, res, next) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user.toJSON());
  } catch (e) {
    next({ status: 400, message: e.message });
  }
}

async function checkEmail(req, res, next) {
  try {
    const email = req.params.email;
    const emailTaken = await User.findOne({ email });
    res.status(200).send({
      available: !emailTaken
    });
  } catch (e) {
    next({ status: 400, message: e.message });
  }
}

async function checkUsername(req, res, next) {
  try {
    const username = req.params.username;
    const usernameTaken = await User.findOne({ username });
    res.status(200).send({
      available: !usernameTaken
    });
  } catch (e) {
    next({ status: 400, message: e.message });
  }
}

module.exports = {
  create, checkEmail, checkUsername
};
