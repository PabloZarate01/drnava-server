const mongoose = require('mongoose');
const colors = require('colors');
console.log(process.env.DB_URI)
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err){
        console.error(`DB ERROR:${err}`.red)
    }else if(!err){
        console.log("DB CONNECTED!".green)
    }
});

module.exports = mongoose;