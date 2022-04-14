const express = require('express');
const fetch = require('node-fetch');

const authController = require('../controllers/authController');
const matchesController = require('../controllers/matchesController');
const cookieController = require('../controllers/cookieController');
const signupController = require('../controllers/signupController');

const matchesRouter = express.Router();

matchesRouter.post('/', matchesController.createMatch, async (req, res) => {
  return res.status(200).send('POST to matches went through');
});

matchesRouter.get(
  '/',
  // cookieController.getUserSession,
  matchesController.getMatches,
  async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    return res.status(200).json(res.locals.userMatches)
  }
);

module.exports = matchesRouter;
