const Expedient = require('../models/expedient.model');
exports.getAllRecords = async (req, res, next) =>{
    await Expedient.find()
    .then( expedients => {
        if(expedients < [0]){
            res.status(200).json({message : "No hay pacientes registrados"});
        }else
            res.status(200).json(expedients);
    })
    .catch(err => {
        res.status(400).json(err);
    })
}
//GetRecent
exports.getPatientRecentReconrds = async (req, res, next) => {
    const {patient_id} = req.params
    await Expedient.find({patient_id}).limit(3).sort({customDate: 'descending'})
    .then( expedients => {
        if(expedients < [0]){
            res.status(200).json({message : "No hay trabajos registrados"});
        }else{
            console.log(expedients);
            res.status(200).json(expedients);
        }
    })
    .catch(err => {
        res.status(400).json(err);
    })
}
//GetRecordsBy UserID
exports.findPatientRecords = async (req, res, next) => {
    const {patient_id} = req.params
    await Expedient.find({patient_id})
    .then( patient => {
        res.status(200).json(patient)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}
exports.createRecord = async (req, res, next) =>{
    //Get Form Data
    const {name,customDate,notes} = req.body;
    const {patient_id} = req.params
    console.log(req.params);
    console.log(req.body);
    //Generate record
    expedient = new Expedient({
        patient_id,
        name,
        customDate,
        notes
    });
    //Push to db
    expedient.save().then( result => {
        console.log("Expedient Saved Result>",result);
        res.status(200).json({message : "El expediente fue creado exitosamente"});
    }).catch(err => {
        res.status(500).json({err})
    })
}