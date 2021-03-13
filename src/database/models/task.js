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
        default: false
    },

    user: {
        type: Schema.Types.ObjectId,
        ref:'Task'
    }

})

module.exports = mongoose.model('Task', taskSchema)