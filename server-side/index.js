const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const User=require('./models/user.model');


const app=express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/password-manager')

//register route
app.post("/api/register",async function(req,res){
    console.log(req.body);
    try{
         const user=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
         })
        res.json({status:'ok'});

    }
    catch(err)
    {
        // console.log(err);
        res.json({status:'error',error: 'Duplicate Email'})
    }

})


//login route
app.post("/api/login",async function(req,res){
    try{
           const user=await User.findOne({
            email:req.body.email,
            password : req.body.password,})
           
            if(user){
                return res.json({status: 'ok', user : true});
            }
            else
            {
                return res.json({status : 'error', user: false});
            }
        //  res.send(user);
    }
    catch(err)
    {
        res.json({status:'error',error: 'Duplicate Email'})
    }

})



app.listen(2000,function(){
    console.log("server is running at port 3000");
});