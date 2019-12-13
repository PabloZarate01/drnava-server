const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const PatientSchema = new Schema({
    patientName : {
        type : String,
        uppercase: true,
        require : true
    },
    patientType : {
        type : String,
        uppercase: true,
        require : true
    },
    entryDate : {
        type : Date,
        default : Date.now
    },
    address : {
        street : {
            type : String,
        },
        suburb : {
            type : String,
        },
        city : {
            type : String,
        },
    },
    phoneNumbers : {
        home : {
            type : String,
        },
        office : {
            type : String,
        },
        phone : {
            type : String,
        }
    },
    email : {
        type : String,
        lowercase: true
    },
    notes : {
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

module.exports = mongoose.model('Patient', PatientSchema);