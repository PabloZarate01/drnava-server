const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const AppointmentSchema = new Schema({
    patient_id : {
        type : Schema.Types.ObjectId, ref: 'User',
        require : true
    },
    notes : {
        type : String
    },
    tooths : {
        type : String
    },
    CreatedDate : {
        type : Date,
        default : Date.now
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Appointment', AppointmentSchema);