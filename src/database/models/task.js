const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const taskSchema = new Schema({
    text: {
        type: String
    },

    date: {
        type: Date,
        default: new Date()
    },

    reminder: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema)