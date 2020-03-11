const morgan = require('morgan');
const { mongoose } = require('./database');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors')
//Import routes
const userRoutes = require('./src/routes/user.routes');
const patientRoutes = require('./src/routes/patient.routes')
const indexRoutes = require('./src/routes/index.routes');
const expedientRoutes = require('./src/routes/expedient.routes');
//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
//Settings
app.set('port', process.env.PORT || 8080)
//Server
app.listen(app.get('port'), () => {
    console.log('SERVER ON PORT', app.get('port'));
});
app.get('/', (req, res) =>{
    res.send('Server ON!');
});
//Routes
app.use('/', indexRoutes);
app.use('/api/user', userRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/expedient', expedientRoutes);
//app.use('/api/appointment', appointmentRoutes);
