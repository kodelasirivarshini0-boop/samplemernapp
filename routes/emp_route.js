let express=require('express');
let route = express.Router();
let {users}=require('../models/users');

route.post('/register',(req,res)=>{
    let data=req.body;
    let newuser = new users(data);
    let result = await newuser.save();
    res.send("register route called")
});

route.post('/login',(req,res)=>{
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