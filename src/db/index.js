import { config } from 'dotenv/types';
const pg = require('pg')
const dotConfig = require('../config');

// create a config to configure both pooling behavior
// and client options
// note: all config is optional and the environment variables
// will be read if the config is not present
var config = {
  user: dotConfig.dbUser, // env var: PGUSER
  database: dotConfig.dbName, // env var: PGDATABASE
  password: dotConfig.dbPassword, // env var: PGPASSWORD
  host: dotConfig.dbHost, // Server hosting the postgres database
  port: dotConfig.dbPort, // env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
}

const pool = new pg.Pool(config)

async function query(q) {
  const client = await pool.connect()
  let res
  try {
    await client.query('BEGIN')
    try {
      res = await client.query(q)
      await client.query('COMMIT')
    } catch (err) {
      await client.query('ROLLBACK')
      throw err
    }
  } finally {
    client.release()
  }
  return res
}

export default async function doQuery(str_query) {
  var res
  try {
    const { rows } = await query(str_query)
    return rows[0].res

  } catch (err) {
    console.log('Database ' + err)
    res = ('' + err).replace('error: ', '').replace('"', '\'').replace('\"', '\'')
    res = { "error": res }
    return { "res": res }
  }

}
