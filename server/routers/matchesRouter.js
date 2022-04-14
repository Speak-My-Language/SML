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
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type,Authorization ,Accept'
    );
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Expose-Headers', 'Authorization');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type, Authorization'
    );
    console.log(res.locals.userMatches, res.locals.userSession);
    return res.status(200).send(res.locals.userMatches);
    // return res.status(200).redirect('http://localhost:8080/?matches');
  }
);

module.exports = matchesRouter;
