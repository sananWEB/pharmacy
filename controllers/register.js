const managerdb=require("../model/manager")
const bycrpt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config()

exports.register=(req,res)=>{

    const data=new managerdb(req.body)

    data.save()
    .then((ress)=>{
        res.status(201).json({
          status:"User is Registered",
          data:ress
        })
    })
    .catch((err)=>{

        if(err.name=="MongoError"){
           return res.status(403).json({
                error:"this username is already registered"
            })    
        }
        var error=err.message;
        res.status(403).json({
            
            error:error.slice(error.indexOf(":")+2)
        })
    }) 
}


exports.signin=async(req,res)=>{
    const data=await managerdb.find({username:req.body.username});
     
     if(data.length==0){
       return res.status(404).json({
            status:"failed",
            massage:"This Username does not exist"
        })
     }

    
const password=await bycrpt.compare(req.body.password,data[0].password)

if(password){

 const token=jwt.sign(
     {username:data[0].username,
    password:req.body.password
    },process.env.SECRET_KEY)

    res.status(200).json({
        status:"succss",
        userdata:{username:data[0].username,password:req.body.password},
        token
    })
}
else{
    res.status(404).json({
        status:"failed"   
    })
}
}


exports.getallusers=async(req,res)=>{

    const data=await managerdb.find({})
    res.send(data)
}

exports.updateuser=async(req,res)=>{

    req.body.password= await bycrpt.hash(req.body.password,10)
     
    const data=await managerdb.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({
        status:"success",
        message:"User Updated",
        data
    })
}


exports.deleteuser=async(req,res)=>{

    managerdb.findByIdAndRemove(req.params.id).then((data)=>{
        res.status(202).json({
            status:"success",
            massage:"user remove successfully",
            data,
        })
    })
    
}