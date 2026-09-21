let express=require('express');
let app=express();
let empRouter = require('./routes/emp_route')

app.use("/api/emp",empRouter);

app.listen(3000,()=>{
    console.log("server listening on the port 3000");
});