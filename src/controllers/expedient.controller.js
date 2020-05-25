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
    await Expedient.find({patient_id}).limit(3).sort({entryDate: 'descending'})
    .then( expedients => {
        if(expedients >= [0]){
            console.log(expedients);
            res.status(200).json(expedients);
        }else{
            res.status(204).json({message : "No hay trabajos registrados"});
        }
    })
    .catch(err => {
        res.status(400).json(err);
    })
}
//GetRecordsBy UserID
exports.findPatientRecords = async (req, res, next) => {
    const {patient_id} = req.params
    await Expedient.find({patient_id}).sort({entryDate: 'descending'})
    .then( patRecords => {
        res.status(200).json(patRecords)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}
exports.createRecord = async (req, res, next) =>{
    //Get Form Data
    const {name,notes,canvasDrawData} = req.body;
    let {entryDate} = req.body;
    const {patient_id} = req.params
    console.log(req.params);
    console.log(req.body);
    //Generate record
    if(!entryDate){
        entryDate = Date.now();
    }
    expedient = new Expedient({
        patient_id,
        name,
        entryDate,
        notes,
        canvasDrawData
    });
    //Push to db
    expedient.save().then( result => {
        console.log("Expedient Saved Result>",result);
        res.status(200).json({message : "El expediente fue creado exitosamente"});
    }).catch(err => {
        res.status(500).json({err})
    })
}
//Remove Patient
exports.removePatRecord = (req, res) =>{
    const { recordId } = req.params;
    console.log(recordId)
    Expedient.findByIdAndDelete(recordId)
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
//Edit Record
exports.editRecord = async (req, res, next) => {
    const { recordId } = req.params;
    await Expedient.findByIdAndUpdate(recordId, req.body, {new : true})
    .then( updatedRecord => {
        res.status(200).json({message : "Editado exitosamente",updatedRecord})
    })
    .catch( err => {
        res.status(500).json({err})
    })
}
//GET BY ID
exports.getRecordById = async (req, res, next) => {
    const { recordId } = req.params;
    await Expedient.findOne({_id:recordId})
    .then( record => {
        res.status(200).json(record)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}