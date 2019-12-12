const morgan = require('morgan');
const { mongoose } = require('./database')
const express = require('express');
const app = express();
//Import routes
const userRoutes = require('./src/routes/user.routes')
const indexRoutes = require('./src/routes/index.routes')

//Middleware
app.use(morgan('dev'));
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
app.use('/', indexRoutes)
app.use('/api/user', userRoutes);


