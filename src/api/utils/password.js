const bcrypt = require('bcryptjs')


const hashPassword = (password) => {
    const hash = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, hash)
}

const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword)
}

module.exports = {hashPassword, comparePassword}