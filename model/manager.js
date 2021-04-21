const mongo=require("mongoose")
const bcrypt=require("bcrypt")

const manager=mongo.Schema({
    username:{
        type:String,
        required:[true,"Please enter Username"],
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"Please enter Password"]
    },
    email:{
        type:String,
        required:[true,"Please enter Email"]
    },
    role:{
        type:String, 
        default:"manager"
    }
})


manager.pre("save",async function (next){
    this.password= await bcrypt.hash(this.password,10)
    next()
})
 
manager.post("save", function (){
    console.log("this is run After save")  
    
}) 

module.exports=mongo.model("manager",manager)

 
