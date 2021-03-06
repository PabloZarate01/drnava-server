const { Router } = require('express');
const router = Router();
const ExpedientController = require('../controllers/expedient.controller');
const verifyAuth = require('../middlewares/verifyAuth');
router.get('/',ExpedientController.getAllRecords);
router.get('/single/:recordId', ExpedientController.getRecordById);
router.get('/recent/:patient_id', ExpedientController.getPatientRecentReconrds);
router.post('/:patient_id', ExpedientController.createRecord);
router.get('/:patient_id', ExpedientController.findPatientRecords);
router.delete('/delete/:recordId',ExpedientController.removePatRecord);
router.put('/edit/:recordId',ExpedientController.editRecord);
//router.get('/auth', verifyAuth, UserController.findMe);

module.exports = router;