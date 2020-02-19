const { Router } = require('express');
const router = Router();
//authcheck
const verifyAuth = require('../middlewares/verifyAuth');

//CONTROLLERS
const AppointmentsController = require('../controllers/Appointments.controller');
//GetAppointmentsfindAllAppointmentss
router.get('/', AppointmentsController.findAllAppointmentss);
//GET BY ID - View Appointments by id
router.get('/:AppointmentsId', AppointmentsController.findSingleAppointments);
//Delete Appointments
router.delete('/delete/:AppointmentsId', AppointmentsController.removeAppointments);
//CreateAppointments    (Create Appointments)
router.post('/', AppointmentsController.createAppointments);
//Edit Appointments info
router.put('/edit/:AppointmentsId', AppointmentsController.editAppointments)

module.exports = router;