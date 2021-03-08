const {MongoClient} = require('mongodb')

const connectToMongoClient = (config) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(config.uri, 
            {useNewUrlParser: true, useUnifiedTopology: true},
            (err, client) => {
                if(err) {
                    reject(err)
                }
                const db = client.db(config.dbName)
                resolve(db, client)
            }
            )
    })
}

module.exports = connectToMongoClient;