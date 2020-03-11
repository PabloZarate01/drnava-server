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