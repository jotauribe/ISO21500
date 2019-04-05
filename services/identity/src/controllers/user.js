const { UserModel } = require('../models');

const create = async function createUser(req, res, next) {
  try {
    const user = new UserModel(req.body);

    await user.save();
    res.send(user);
  } catch (error) {
    next(error);
  }
};

// Create endpoint /api/users for GET
const get = async function getUser(req, res, next) {
  try {
    const user = await UserModel.findById(req.params.id);

    res.send(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  get
};
