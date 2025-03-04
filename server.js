const express=require("express");
const app=express();
const data=require("./model/db")
const PORT=8000;

app.use(express.json());

app.post('/user',async(req,res)=>{
    try{
        let{Email, Password}=req.body;
       if(!Email){
        res.status(404).json({message:"email not enter"})
       }
       if(!Password){
        res.status(404).json({message:"Password not enter"})
       }
         
   let create=await data.create({
    Email,
    Password
   })
   res.status(201).json(create)
   
}
catch(err){
  res.status(404).json({message:err.message})
}
})

app.listen(PORT,()=>{
    console.log(` Port is running on ${PORT}`)
})