const bcrypt = require('bcryptjs')
const UserToken = require('../models/userToken.model')
var colors = require('colors');
//GET My USER
exports.findMe = async (req, res, next) => {
    const userToken = req.headers.authorization.split(" ")[1];
    await UserToken.findOne({userToken})
    .then(user => {
        res.status(200).json(user._id)
    }).catch(err => {
        console.log("unauthorized".black.bgRed).
        res.status(401).json({err})
    });
}