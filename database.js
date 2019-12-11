const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/drnava-db', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err){
        console.log("DB ERROR >>>",err)
    }else if(!err){
        console.log("DB CONNECTED! ("+err+" error)")
    }
});

module.exports = mongoose;