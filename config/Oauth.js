
const jwt=require("jsonwebtoken")
require("dotenv").config()
exports.tokanvarify=async(req,res,next)=>{

    const token=req.headers.token
    if(!token){
        return res
          .status(401)
          .json({ message: "No authentication token, authorization denied" });
      }


   jwt.verify(req.headers.token,process.env.SECRET_KEY,(err,data)=>{

    if(err){
       return res.status(404).json({message:"Tokan is not varify, authorization denied"})
    }
    
    else{
        req.user = data

    }
   })

    next()
}