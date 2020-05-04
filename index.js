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
//Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cors())
//Own CORS Middleware
// app.use((req, res, next) => {
//     //res.header("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
    
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
//   });
//Settings
app.set('port', process.env.PORT || 8080)
//Server
app.listen(app.get('port'), () => {
    console.log('SERVER ON PORT', app.get('port'));
});
//Routes
app.use('/', indexRoutes);
app.use('/api/user', userRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/expedient', expedientRoutes);
//app.use('/api/appointment', appointmentRoutes);
