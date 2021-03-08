require('dotenv').config();

const {DATABASE_URI, dbName, PORT} = process.env

const config = {
    DATABASE_URI,
    dbName,
    PORT
}

module.exports = config