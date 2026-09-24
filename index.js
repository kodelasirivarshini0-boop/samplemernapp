let express=require('express');
let app=express();
let mongoose=require('mongoose');
let empRoute=require('./routes/emp_route');
let hrRoute=require('./routes/hr_route');
mongoose.connect("mongodb://localhost:27017/HRmanagement").then(()=> console.log("Database connected successfully"))
.catch((err)=> console.log(err));

app.use (express.json());
app.use("/api/emp",empRoute);
app.use("/api/hr",hrRoute);
//localhost:3000/api/emp/register =>post
//localhost:3000/apl/emp/login =>post
//localhost:3000/apl/emp/viewtask =>get
//localhost:3000/apl/emp/profile =>patch
//localhost:3000/apl/emp/logout =>post



//run the server
app.listen(3000,()=>{
    console.log("Server listening on the port 3000");
});