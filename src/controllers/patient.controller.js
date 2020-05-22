const Patient = require('../models/patient.model');
//GET ALL
exports.findAllPatients = async (req, res, next) => {
    await Patient.find().sort({entryDate: 'descending'})
    .then( patients => {
        res.status(200).json(patients);
    })
    .catch(err => {
        res.status(400).json(err);
    })
}
//GET BY ID
exports.findSinglePatient = async (req, res, next) => {
    const { patientId } = req.params;
    await Patient.findOne({_id:patientId})
    .then( patient => {
        res.status(200).json(patient)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}
//POST - Create new patient
exports.createPatient = async (req, res, next) =>{
    //Get Form Data
    const {name, lastName, type, address, 
        phoneNumbers, email, notes} = req.body;
        let {entryDate} = req.body;
    console.log(req.body);
    //Generate record
    if(!entryDate){
        entryDate = Date.now();
    }
    patient = new Patient({
        name,
        lastName,
        type,
        entryDate,
        address,
        phoneNumbers,
        email,
        notes
    });
    //Push to db
    patient.save().then( result => {
        console.log("Patient Saved Result>",result);
        res.status(200).json({message : "El paciente fue creado exitosamente"});
    }).catch(err => {
        res.status(500).json({err})
    })
}
//Edir patient
exports.editPatient = async (req, res, next) => {
    const { patientId } = req.params;
    await Patient.findByIdAndUpdate(patientId, req.body, {new : true})
    .then( updatedPatient => {
        res.status(200).json({message : "Editado exitosamente",updatedPatient})
    })
    .catch( err => {
        res.status(500).json({err})
    })
}
//Remove Patient
exports.removePatient = (req, res) =>{
    const { patientId } = req.params;
    console.log(patientId)
    Patient.findByIdAndDelete(patientId)
    .then( cb => {
        console.log("CallBack>>",cb);
        if(!cb){
            res.status(200).json({
                message : "No hay registros por borrar"
            })
        }else{
        res.status(200).json({
            message : "Paciente eliminado correctamente"
        })}
    })
    .catch(err => {
        res.status(500).json({err})
    })
}