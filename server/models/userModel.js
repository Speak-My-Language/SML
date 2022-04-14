const { Pool } = require('pg');

// old db
// const PG_URL = 'postgres://zxazbbvi:vVuR6fP5wr-rLS67-ltqcRYleRnWUgTR@batyr.db.elephantsql.com/zxazbbvi';

//new db
const PG_URL = 'postgres://wmswsrjr:OByDmue3uJRVVPvWrcCHViAxRrz4Sm4w@rajje.db.elephantsql.com/wmswsrjr';

const pool = new Pool({
  connectionString: PG_URL
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};