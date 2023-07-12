const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const User=require('./models/user.model');
const Info=require('./models/user-info.model');
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const crypto=require("crypto");
const encrypt=require("./encrypt");
const decrypt=require("./decrypt");
const app=express();
app.use(cors());
app.use(express.json());

//connecting mongodb server
mongoose.connect('mongodb://localhost:27017/password-manager')

//register route
app.post("/api/register",async function(req,res){
    console.log(req.body);
    try{
            const encryptedpw=await bcrypt.hash(req.body.password,10);
            // const encryptedpw=await encrypt.encrypt(req.body.password);
            const user=await User.create({     //creating a new user
            name:req.body.name,
            email:req.body.email,
            password:encryptedpw,
         })
        res.json({status:'ok'});
    }
    catch(err)
    {
        console.log(err);
        res.json({status:'error',error: 'Duplicate Email'})
    }

})


//login route
app.post("/api/login",async function(req,res){
    console.log(req.body);
    try{
           const user=await User.findOne({
            email:req.body.email, 
        })
            const isValid=await bcrypt.compare(req.body.password,user.password);
            console.log(user);
            if(isValid){
                const token=jwt.sign({name:req.body.name,email:req.body.email},"secretkey")
                console.log("fdfdfd");
                res.json({status: 'ok', user : token});

            }
            else
            {
                console.log("running");
                return res.json({status : 'error', user: false});
            }
    }
    catch(err)
    {
        console.log(err);
        res.json({status:'error',error: 'Duplicate Email'})
    }
})


app.get("/api/home",async function(req,res){
try{
    const token=req.headers["x-access-token"];
   const decoded=jwt.verify(token,'secretkey');
   const email=decoded.email;
    console.log(email);
    const user= await User.findOne({email:email});
    console.log(user.name);
     res.json({status : "ok",name : user.name});
 }
 catch(err)
 {
    console.log(err);
    res.json({status:"error",error:"invalid-token"})
 }
   
});





app.post("/api/store",async function(req,res){
    console.log(req.body);
    try{
          
        // const encryptedpw=await bcrypt.hash(req.body.webpassword,10);
          const encryptedpw=await encrypt(req.body.webpassword);
          
          const preuser= await Info.findOneAndUpdate({
            website:req.body.website
          },{
              email:req.body.mail,
              website:req.body.website,
              username:req.body.username,
              webpassword:encryptedpw.salt1,
              webpasswordiv:encryptedpw.salt2,
              note : req.body.note,
          },{
            new :true,
            upsert:true
          })
          res.json({status:"ok"});
         
    }
    catch(err)
    {
        console.log(err);
        res.json({status:'error',error: 'Something is wrong'})
    }

})


app.get("/api/retrieve",async function(req,res){
    console.log(req.body);
     try{
          
         const token=req.headers["x-access-token"];
         const decoded=jwt.verify(token,'secretkey');
         const email=decoded.email;
         console.log(email);
         let data = await Info.find({email:email});
         let newdata=[];
        await  data.forEach(async(element)=>{
            const password= await decrypt(element.webpassword,element.webpasswordiv);
            const object={
                data: element,
                password:password.string,
            }
            newdata.push(object);
            // element.password=password.string;
            // console.log(element.password);
            // newdata.push(element);
         })
         console.log(newdata);
          res.json({status : "ok",data : newdata});
     }
     catch(err)
     {
        console.log(err);
        res.json({status:"ok"});
     }
});


app.listen(2000,function(){
    console.log("server is running at port 3000");
});