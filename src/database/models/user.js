const mongoose = require('mongoose');
const { comparePassword, hashPassword } = require('../../api/utils/password');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String
    },

    password: {
        type: String
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Task'
        }
    ]
})

userSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified('password')) return next()
    user.password = hashPassword(user.password)
    next()
})

userSchema.methods.isMatchPassword = function(password) {
    return comparePassword(password, this.password)
}

module.exports = mongoose.model('User', userSchema)