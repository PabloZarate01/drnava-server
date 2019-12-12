const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const UserSchema = new Schema({
    userName : {
        type : String,
        lowercase: true,
        require : true
    },
    email : {
        type : String,
        lowercase: true,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    CreatedDate : {
        type : Date,
        default : Date.now
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);