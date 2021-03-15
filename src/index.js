const express = require('express');
const cors = require('cors')
require ('dotenv').config();
const config = require('./config/config');
const { connectToDatabase } = require('./database/connection/connection');
const router = require('./route/index');

const app = express()

connectToDatabase(config)

app.use(express.json());

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}

router.get("/", (req, res) => {
res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
 });

app.use(cors(corsOptions))

const port = process.env.PORT || 3030;

app.use('/', router)

app.listen(port, () => console.log(`server running on port ${port}`))

module.exports = app;