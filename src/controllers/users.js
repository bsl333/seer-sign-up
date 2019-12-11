const User = require('../models/user');

async function create (req, res, next) {
  console.log(req.body);
  const { firstName, lastName, email, username, password } = req.body;
  try {
    const user = new User(req.body);
    console.log(user);
    await user.save();
    res.status(201).send(user.toJSON());
  } catch (e) {
    res.status(400).send(e.message);
  }
  console.log(firstName, lastName, email, username, password);
}

module.exports = {
  create
};
