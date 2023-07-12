const mongoose=require("mongoose");


//creating a userinfo Schema
const Info =new mongoose.Schema({
    email: {type: String, required:true},
    website : {type :String , requiered : true, unique: true},
    webpassword : {type : String ,required: true},
    webpasswordiv:{type:String,requiered:true},
    username : { type : String, required: true},
    note : {type : String},
})

const model=mongoose.model('UserInfo',Info);

module.exports=model;
