require('dotenv').config();

const {DATABASE_URI, dbName, port} = process.env

const config = {
    DATABASE_URI,
    dbName,
    port
}

module.exports = config