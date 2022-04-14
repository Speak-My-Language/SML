const express = require('express');
const pairProgramRouter = express.Router();
const path = require('path');

// const pairProgramRouter = require('../controllers/pairProgramController');

// this should just take us to Pair Programming yes/no page. Do we need middleware for this?
pairProgramRouter.get('/', (req, res) => {
  return res.status(200).redirect('http://localhost:8080/?program');
});

module.exports = pairProgramRouter;
