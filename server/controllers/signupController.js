const db = require('../models/userModel.js');
const { v4: uuidv4 } = require('uuid');

const signupController = {};

signupController.storeUserInDb = async (req, res, next) => {
  const id = uuidv4();
  const {
    name,
    location,
    login,
    repos_url,
    twitter_username,
    company,
    blog,
    email,
    node_id,
    bio,
  } = res.locals.profile;

  try {
    // error to meet database constraint, name set NOT NULL
    if (name == undefined || node_id == undefined) throw new Error('User input(s) invalid.');

    // Check if node_id is in db,
    // if so, skip the insert and login
    const lookUpQ = 'SELECT u.node_id FROM users u WHERE u.node_id = $1;';
    let params = [node_id];
    const userDbQuery = await db.query(lookUpQ, params);

    if (userDbQuery.rows.length === 0) {
      // no user exists for that node_id
      const storeUserInDb = `INSERT INTO users 
      (id, name, location, handle, repos_url, twitter, 
        company, website, email, node_id, bio, languages)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);`;
      params = [
        id,
        name,
        location,
        login,
        repos_url,
        twitter_username,
        company,
        blog,
        email,
        node_id,
        bio,
        JSON.stringify(res.locals.languages),
      ]; // -> node_id: 'MDQ6VXNlcjQ1NzAyNzE2'
      await db.query(storeUserInDb, params);
    }
    return next();
  } catch (err) {
    return next({
      log: `There was an error in signupController middleware: ERROR ${err}`,
      status: 400,
      message: { err: err.message },
    });
  }
};

module.exports = signupController;

// --   id UUID NOT NULL PRIMARY KEY,
// --   name VARCHAR (200) NOT NULL,
// --   location VARCHAR,
// --   handle VARCHAR,
// --   repos_url VARCHAR,
// --   twitter VARCHAR,
// --   company VARCHAR,
// --   website VARCHAR,
// --   email VARCHAR,
// --   node_id VARCHAR,
// --   bio TEXT,
// --   languages VARCHAR
// --   )
