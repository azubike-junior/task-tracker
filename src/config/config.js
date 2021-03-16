require('dotenv').config();

const {DATABASE_URI, dbName, PORT, SECRET} = process.env

const config = {
    DATABASE_URI,
    dbName,
    PORT,
    SECRET
}

module.exports = config