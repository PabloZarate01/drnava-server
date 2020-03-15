const mongoose = require('mongoose');
const colors = require('colors');
mongoose.connect('mongodb://localhost:27017/drnava-db', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err){
        console.error(`DB ERROR:${err}`.red)
    }else if(!err){
        console.log("DB CONNECTED!".green)
    }
});

module.exports = mongoose;