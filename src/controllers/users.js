const User = require('../models/user');

async function create(req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user.toJSON());
  } catch (e) {
    res.status(400).send(e.message);
  }
}

async function checkEmail(req, res) {
  const email = req.params.email;
  const emailTaken = await User.findOne({ email });
  res.status(200).send({
    available: !emailTaken
  });
}

async function checkUsername(req, res) {
  const username = req.params.username;
  const usernameTaken = await User.findOne({ username });
  res.status(200).send({
    available: !usernameTaken
  });
}

module.exports = {
  create, checkEmail, checkUsername
};
