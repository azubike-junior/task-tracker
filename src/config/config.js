require('dotenv').config();

const {uri, dbName, port} = process.env

const config = {
    uri,
    dbName,
    port
}

module.exports = config