const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://ps5840432:gRC9epPJ22Yly2Rm@cluster0.vnxr1.mongodb.net/");
const Userschema=mongoose.Schema({
    Email:{
        type:String,

    },

    Password:{
        type:String
    }
})

module.exports=mongoose.model("user",Userschema);