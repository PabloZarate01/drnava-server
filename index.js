const morgan = require('morgan'); 
require('dotenv').config({
    path:`.env.${process.env.NODE_ENV || "dev"}`
});
//const result = dotenv.config();
console.log("Env Variables",process.env.NODE_ENV)
const { mongoose } = require('./database');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Cors = require('cors')
var colors = require('colors');
//Import routes
const userRoutes = require('./src/routes/user.routes');
const patientRoutes = require('./src/routes/patient.routes')
const indexRoutes = require('./src/routes/index.routes');
const expedientRoutes = require('./src/routes/expedient.routes');
const verifyAuth = require('./src/middlewares/verifyAuth');
//Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cors())
//Own CORS Middleware
//Settings
app.set('port', process.env.PORT || 8080)
//Server
app.listen(app.get('port'), () => {
    console.log('SERVER ON PORT', app.get('port'));
    console.log("Hello")
});
//Routes
app.use('/', indexRoutes);
app.use('/api/user', userRoutes);
app.use('/api/patient',verifyAuth, patientRoutes);
app.use('/api/expedient',verifyAuth, expedientRoutes);
//app.use('/api/appointment', appointmentRoutes);
