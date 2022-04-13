const express = require('express');
const logoutRouter = express.Router();

const logoutController = require('../controllers/logoutController');

//what CRUD method should we use here?
logoutRouter.get('/', logoutController.logout, (req, res) => {
  return res.send('logged out.');
});

module.exports = logoutRouter;