const morgan = require('morgan');
const nodemon = require('nodemon');

const express = require('express');
const app = express;


app.listen(1334, (req,res) => {
    console.log("SERVER ON PORT 1334");
} )
app.get('/', (req, res) =>{
    res.send('Server ON!');
});

