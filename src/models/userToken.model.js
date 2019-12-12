const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const UserTokenSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        require : true
    },
    userToken : {
        type : String,
        required : true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('UserToken', UserTokenSchema);