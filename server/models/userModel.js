const { Pool } = require('pg');

const PG_URL = 'postgres://zxazbbvi:vVuR6fP5wr-rLS67-ltqcRYleRnWUgTR@batyr.db.elephantsql.com/zxazbbvi';

const pool = new Pool({
  connectionString: PG_URL
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback)
};