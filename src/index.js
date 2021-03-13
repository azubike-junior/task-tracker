const express = require('express');
const cors = require('cors')
require ('dotenv').config();
const config = require('./config/config');
const { connectToDatabase } = require('./database/connection/connection');
const router = require('./route/index');

const app = express()

connectToDatabase(config)

app.use(cors())

app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

const port = process.env.PORT || 3030

app.use('/', router)

app.listen(port, () => console.log(`server running on port ${port}`))

module.exports = app;