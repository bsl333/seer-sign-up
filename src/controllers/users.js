const User = require('../models/user');

async function create (req, res, next) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user.toJSON());
  } catch (e) {
    res.status(400).send(e.message);
  }
}

module.exports = {
  create
};
