const express =require('express');


require("./db/db_connection")

const app=express();
const port=8000;

const Student=require("./db/db_schema");
const auth=require("./auth")
const test=auth("Ashutos@gmail.com").then((value)=>{return value})


console.log('test '+test);

app.use(express.json());

app.get("/",(req,res)=>
{
    res.send("This is the home page!");
});


app.post("/signup",(req,res)=>{
    console.log(req.body);
    
    const user=new Student(req.body);
    user.save().then(()=>res.send(`successfull registered! :${user}`)).catch((e)=>console.log(e));
});


app.listen(port,()=>
{
    console.log(`Server start at port no ${port}`);
})
