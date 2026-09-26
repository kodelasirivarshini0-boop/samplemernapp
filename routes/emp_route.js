let express=require('express');
let route = express.Router();
let {users}=require('../models/users');
let bcrypt=require('bcrypt');


route.post('/register',async(req,res)=>{
    let data=req.body;
    data.password=await bcrypt.hash(data.password,10);
    let newuser = new users(data);
    let result =  await newuser.save();
    res.send(result)
});



route.post('/login',(req,res)=>{
    let data=req.body;
    let emailcheck=users.findOne({email:data.email});
    if(!emailcheck){
        res.send("user not found");
    }
    res.send{"login successful"};
    else{
        res.send("invalid password");

    }else{
        res.send{}
    }
    res.send("login route called")
});

route.patch('/profile',(req,res)=>{
    res.send("profile route called")
});

route.post('/logout',(req,res)=>{
    res.send("logout route called")
});

route.get('/viewtask',(req,res)=>{
    res.send("viewtask route called")
})
module.exports=route;