const bcrypt = require('bcryptjs')
const UserToken = require('../models/userToken.model')
var colors = require('colors');
//GET My USER
exports.findMe = (req, res, next) => {
    const userToken = req.headers.authorization.split(" ")[1];
    UserToken.findOne({userToken})
    .then(user => {
        res.status(200).json(user._id)
    }).catch(err => {
        console.log("unauthorized".black.bgRed).
        res.status(402).json({err})
    });
}