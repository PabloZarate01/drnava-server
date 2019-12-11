const morgan = require('morgan');
const { mongoose } = require('./database')
const express = require('express');
const app = express();
//Import routes

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

