let express=require('express');
let route = express.Router();

route.post('/register',(req,res)=>{
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
module.exports=empRoute;