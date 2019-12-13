const { Router } = require('express');
const router = Router();
//authcheck
const verifyAuth = require('../middlewares/verifyAuth');

//CONTROLLERS
const PatientController = require('../controllers/patient.controller');
//GetPatientfindAllPatients
router.get('/', PatientController.findAllPatients);
//GET BY ID - View patient by id
router.get('/:patientId', PatientController.findSinglePatient);
//Delete patient
router.delete('/delete/:patientId', PatientController.removePatient);
//CreatePatient    (Create Patient)
router.post('/', PatientController.createPatient);
//Edit Patient info
router.put('/edit/:patientId', PatientController.editPatient)

module.exports = router;