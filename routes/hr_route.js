let express=require('express');
let route = express.Router();

route.post('/assign task',(req,res)=>{
    res.send("HR assign task route called")
});

route.get('/viewmap',(req,res)=>{
    res.send("HR view map route called")
});

route.delete('/deletemap',(req,res)=>{
    res.send("HR dele map route called")
});

route.get('/viewtask',(req,res)=>{
    res.send("HR view task route called")
});
module.exports=route;
