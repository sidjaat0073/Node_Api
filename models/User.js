//User's Collection Model

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
       
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
        
    }
});



module.exports = mongoose.model('User',UserSchema);