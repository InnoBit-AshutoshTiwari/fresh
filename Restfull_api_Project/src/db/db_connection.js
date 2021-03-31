const mongoos=require('mongoose')

mongoos.connect("mongodb://localhost:27017/apitesting",{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true
}).then((value)=>{console.log(`database connected! ${value}`)}).catch((err)=>{console.log("Database is not connected and the erroe is "+err)})
