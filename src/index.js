const express = require('express');
const cors = require('cors')
require ('dotenv').config();
const config = require('./config/config');
const { connectToDatabase } = require('./database/connection/connection');
const router = require('./route/index');
const { register } = require('./api/controller/auth');
const { postTask } = require('./api/controller/task');

const app = express()

connectToDatabase(config)

app.use(express.json());

app.use(cors())

app.use('/', router)

app.listen(config.port, () => console.log(`server running on port ${config.port}`))