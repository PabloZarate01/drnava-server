const { Router } = require('express');
const router = Router();
//authcheck
const verifyAuth = require('../middlewares/verifyAuth');
//CONTROLLERS
const PatientController = require('../controllers/patient.controller');

//GetPatientfindAllPatients
router.get('/', PatientController.findAllPatients);
//CreatePatient    (Create Patient)
router.post('/crear', PatientController.createPatient);
//GET BY ID - View patient by id
//router.post('/:patientId', PatientController.createPatient);

module.exports = router;