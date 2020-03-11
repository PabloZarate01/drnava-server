const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const ExpedientSchema = new Schema({
    patient_id : {
        type : Schema.Types.ObjectId, ref: 'User',
    },
    name : {
        type : String,
        uppercase: true,
        require : true
    },
    notes : {
        type : String
    },
    customDate : {
        type : Date,
        default : Date.now
    },
    CreatedDate : {
        type : Date,
        default : Date.now
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Expedient', ExpedientSchema);