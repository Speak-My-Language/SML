const db = require('../models/userModel.js');
const fetch = require('node-fetch');
require('dotenv').config();

const matchesController = {};

// rewrite how getMatches is working state isn't saved anywhere
// user id as first column
matchesController.getMatches = async (req, res, next) => {
  try {
    const getMatchesQ = `SELECT name, location, handle, email, bio, languages FROM 
      (SELECT matched_user 
        FROM matches m 
        WHERE m.userid::uuid = (SELECT id FROM users WHERE node_id= $1)::uuid
        AND m.is_matched = 'true') AS newTable 
      INNER JOIN users u ON newTable.matched_user::uuid = u.id::uuid;`

    const params = [res.locals.userSession]
    const data = await db.query(getMatchesQ, params);
    res.locals.userMatches = data.rows;
    console.log('THIS IS PARAMS: ' ,params);
    console.log('RES.LOCAL INFO USER MATCHES', res.locals.userMatches);
    return next();
  } catch (err) {
    return next({
      log: `There was an error in getMatches middleware: ERROR ${err}`,
      status: 400,
      message: { err: 'ERROR IN GETTING MATCHES No hablo your language' },
    });
  }
};

matchesController.createMatch = async (req, res, next) => {
  const { node_id, match_uuid, choice, matchedName } = req.body;
  // user_id is in form node_id, is_matched is in form int of 0 or 1
  console.log('----------------------------------------');
  console.log('node_id', node_id);
  console.log('match_uuid', match_uuid);
  console.log('choice', choice);

  try {
    // SELECT uuid using node_id from req.body
    let query = 'SELECT id, name FROM users WHERE node_id=$1;';
    let params = [node_id];
    let data = await db.query(query, params);
    let uuid = data.rows[0].id;
    let userName = data.rows[0].name;

    // if choice is 0
    if (choice === 0) {
      console.log('YOU SWIPED 0');
      // insert query into db with like = false and is_match = false
      query =
        'INSERT INTO matches (userName, matchedName, userId, matched_user, liked, is_matched) VALUES ($1, $2, $3, $4, $5, $6)';
      params = [userName, matchedName, uuid, match_uuid, false, false];
      data = await db.query(query, params);
      // if choice is 1
      console.log('QUERY FINISHED');
    } else {
      // check in db if the matched user liked the user already
      query =
        'SELECT liked FROM matches WHERE userId = $1 AND matched_user = $2';
      params = [match_uuid, uuid];
      data = await db.query(query, params);
      // if matched user hasn't liked user yet
      console.log('DATAROWS', data.rows);
      if (!data.rows.length) {
        console.log('EMPTY DATA ROWS');
        query =
          // insert query into db with like = true and is_match = false
          'INSERT INTO matches (userName, matchedName, userId, matched_user, liked, is_matched) VALUES ($1, $2, $3, $4, $5, $6)';
        params = [userName, matchedName, uuid, match_uuid, true, false];
        data = await db.query(query, params);
        console.log('QUERY FINISHED');
      } else {
        // if matched user liked user (like = true)
        console.log('OTHER PERSON SWIPED YOU');
        if (data.rows[0]) {
          console.log('THEY SWIPED 1');
          // insert query into db with like = true and is_match = true
          query =
            'INSERT INTO matches (userName, matchedName, userId, matched_user, liked, is_matched) VALUES ($1, $2, $3, $4, $5, $6)';
          params = [userName, matchedName, uuid, match_uuid, true, true];
          data = await db.query(query, params);
          console.log('QUERY FINISHED');
          // update query into db with is_match = true where id = match_uuid
          query =
            'UPDATE matches SET is_matched = $1 WHERE userId = $2 AND matched_user = $3';
          params = [true, match_uuid, uuid];
          data = await db.query(query, params);
          // otherwise, if matched user did not like user (like = false)
          console.log('QUERY FINISHED');
        } else {
          console.log('THEY SWIPED 0');
          // insert query into db with like = true and is_match = false
          query =
            'INSERT INTO matches (userName, matchedName, userId, matched_user, liked, is_matched) VALUES ($1, $2, $3, $4, $5, $6)';
          params = [userName, matchedName, uuid, match_uuid, true, false];
          data = await db.query(query, params);
          console.log('QUERY FINISHED');
        }
      }
    }
    console.log('----------------------------------------');
    return next();
  } catch (err) {
    return next({
      log: `There was an error in getMatches middleware: ERROR ${err}`,
      status: 400,
      message: { err: 'IN CREATEMATCH MIDDLEWARE No hablo your language' },
    });
  }
};

// button: update matches, controller that queries the database, flips is_match to true and reveals matches to each other
module.exports = matchesController;

// if Mireille hits 1 on Eric

// send a patch request to our matches controller once a match has -->
// liked the user and once the match has liked the user -->
// back our booleans will become true and we will be able to see we matched
