const Appointment = require('../models/appointment.model');
exports.deleteAppointment = async (req, res, next) => {
    res.json({
        message : "Cita borrada"
    });
}