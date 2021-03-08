const mongoose = require('mongoose');

const connectToDatabase = (config) => {
    mongoose.connect(config.DATABASE_URI, {
        useNewUrlParser:true, 
        useUnifiedTopology: true,
        dbName: config.dbName
    });

    const db = mongoose.connection;

    db.once('open', () => console.log('connecton successful'))
}

module.exports.connectToDatabase = connectToDatabase