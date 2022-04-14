const db = require('../models/userModel.js');
const cookieController = {};
//save token should take the token and saves it into the cookie
cookieController.saveToken = (req, res, next) => {
  res.cookie('auth_token', res.locals.access_token, {
    overwrite: true,
    httpOnly: false,
  });
  return next();
};

cookieController.saveUserSession = (req, res, next) => {
  res.cookie('user_session', res.locals.profile.node_id, {
    overwrite: true,
    httpOnly: false,
  });
  req.app.locals.user_session = res.locals.profile.node_id;
  return next();
};

cookieController.getUserSession = (req, res, next) => {
  const { user_session } = req.cookies; // -> { user_session: asdhfaskfh, auth_token: asdfdsaf }
  res.locals.userSession = user_session;
  return next();
};

module.exports = cookieController;
