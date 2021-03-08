const mongoose = require('mongoose');

const connectToDatabase = (config) => {
    mongoose.connect(config.uri, {
        useNewUrlParser:true, 
        useUnifiedTopology: true,
        dbName: config.dbName
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Mongo Database Error:'))

    db.once('open', () => console.log('connecton successful'))
}

module.exports.connectToDatabase = connectToDatabase