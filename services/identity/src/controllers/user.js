const { User } = require('../models');

const create = async function createUser(req, res, next) {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });

    user.save(function(err) {
      if (err) return res.send(err);

      res.json({ message: 'New user added' });
    });
  } catch (error) {
    next(error);
  }
};

// Create endpoint /api/users for GET
const get = async function getUser(req, res, next) {
  try {
    const user = await User.findById(req.user._id);

    res.send(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  get
};
