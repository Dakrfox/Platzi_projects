import { Pool } from 'pg';
const {config } = require('../config/config');
const user = encodeURIComponent(config.dbUser);
const password = encodeURIComponent(config.dbPassword);
const URI = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


const pool = new Pool({
  connectionString: URI
})

module.exports = pool;
