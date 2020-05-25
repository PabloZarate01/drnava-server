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
    canvasDrawData : {
        type : String
    },
    enrtyDate : {
        type : Date,
        default : Date.now
    },
    computedDate : {
        type : Date,
        default : Date.now
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Expedient', ExpedientSchema);