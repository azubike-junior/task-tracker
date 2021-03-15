const express = require('express');
const cors = require('cors')
require ('dotenv').config();
const config = require('./config/config');
const { connectToDatabase } = require('./database/connection/connection');
const router = require('./route/index');

const app = express()

connectToDatabase(config)

app.use(express.json());

const port = process.env.PORT || 3030;

app.use('/', router)

app.use(cors())

app.listen(port, () => console.log(`server running on port ${port}`))

module.exports = app;