const User = require("../../database/models/user")

const getUser = async (req, res, next) => {
    const {_id} = req.params
    const user = await User.findOne({_id});
    user.password = undefined

    req.user = user;
    return next()
}

module.exports = getUser