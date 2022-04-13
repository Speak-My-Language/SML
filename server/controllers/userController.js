const db = require('../models/userModel.js');

const userController = {};
// check if cookie exists, if it does return the profile attached to it
userController.getUserProfile = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getUserQ = 'SELECT * FROM users WHERE node_id = $1;';
    const params = [id];
    console.log(params);
    const data = await db.query(getUserQ, params);
    // console.log(data.rows[0]);
    res.locals.userProfile = data.rows[0];
    return next();
  } catch (err) {
    return next({
      log: `There was an error in getUserProfile middleware: ERROR ${err}`,
      status: 400,
      message: { err: 'No hablo your language' },
    });
  }
};

userController.updateUser = async (req, res, next) => {
  const { profile } = req.body;
  const { id } = req.params;

  try {
    const putUserQ =
      'UPDATE users SET name = $1, email = $2, location = $3, website = $4, bio = $5, handle = $6 WHERE node_id = $7;';
    const params = [
      profile.name,
      profile.email,
      profile.location,
      profile.website,
      profile.bio,
      profile.handle,
      id,
    ];
    console.log(params);
    const data = await db.query(putUserQ, params);
    console.log(data);
    // console.log(res.locals.userProfile);
    next();
  } catch (err) {
    return next({
      log: `There was an error in updateUser middleware: ERROR ${err}`,
      status: 400,
      message: { err },
    });
  }
};

module.exports = userController;
