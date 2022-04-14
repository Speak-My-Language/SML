const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController');

userRouter.get('/:id', userController.getUserProfile, (req, res) => {
  return res.status(200).json(res.locals.userProfile);
});

userRouter.put('/:id', userController.updateUser, (req, res) => {
  return res.status(200).json({});
});

module.exports = userRouter;
