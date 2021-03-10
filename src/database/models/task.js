const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const taskSchema = new Schema({
    text: {
        type: String
    },

    day: {
        type: String
    },
  
    reminder: {
        type: Boolean, 
        default: ''
    }
})

module.exports = mongoose.model('Task', taskSchema)