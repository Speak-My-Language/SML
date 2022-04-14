const db = require('../models/userModel.js');

const logoutController = {};

logoutController.logout = (req, res, next) => {
  // logout handler could delete cookies (i think) or remove database record
  return next();
}

module.exports = logoutController;