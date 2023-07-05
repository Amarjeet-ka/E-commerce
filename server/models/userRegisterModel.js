const mongoose = require('mongoose');

const userRegisterSchema = new mongoose.Schema({
    name : {
     type : String,
     required:true
    },
    email : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    }
})


const userRegister = mongoose.model('userRegister',userRegisterSchema)

module.exports = userRegister;