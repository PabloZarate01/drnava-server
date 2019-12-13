const Patient = require('../models/patient.model');
//GET
exports.findAllPatients = async (req, res, next) => {
    await Patient.find()
    .then( patients => {
        if(patients < 0){
            res.status(200).json({message : "No hay pacientes registrados"});
        }else
            res.status(200).json(patients);
    })
    .catch(err => {
        res.status(400).json(err);
    })
}
//POST
exports.createPatient = async (req, res, next) =>{
    //Get Form Data
    const {patientName, patientType, 
        entryDate,adrStreet, adrSuburb, adrCity, 
        phoneNumbers, email, notes} = req.body;
    console.log(patientData);
    //Generate record
    patient = new User({
        patientName,
        patientType,
        entryDate,
        adrStreet,
        adrSuburb,
        adrCity,
        phoneNumbers,
        email,
        notes
    });
    //Push to db
    patient.save().then( result => {
        console.log("Patient Saved Result>",result);
        res.status(200).json({message : "El paciente fue creado exitosamente"});
    }).catch(err => {
        res.status(500).json({message:"Error al guardar en la base de datos. Por favor, intente más tarde"})
    })
}