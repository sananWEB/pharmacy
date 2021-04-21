const drugsdb=require("../model/drugs")


exports.insertdrugs=(req,res)=>{

    const data=new drugsdb(req.body)

    data.save().then((ress)=>{ 

        res.status(201).json({
            status:"success",
            data:ress
        })
    }).catch((err)=>{
        if(err.name=="MongoError"){
            return res.status(500).json({message:"This drug is already registered"})
        }

        res.status(404).json({message:err})
    })

}


exports.getalldrugs=async(req,res)=>{

    const data= await drugsdb.find();
     res.status(200).json({
         status:"success",
         data:data
     })

}


exports.updatedrugs=async(req,res)=>{

       const data=await drugsdb.findByIdAndUpdate(req.params.id,req.body,{new:true})

       res.status(200).json({
        status:"success",
        message:"Drug Updated",
        data
    })


}

exports.deletedrug=(req,res)=>{

    drugsdb.findByIdAndDelete(req.params.id)
    .then((data)=>{
        res.status(202).json({
            status:"success",
            message:"Drug Remove Successfully",
            data
    })
    })
    
}


exports.qtylessthanten=(req,res)=>{

    drugsdb.find({qty:{$lte:10}}) 
    .then((data)=>{
        res.status(200).json({
            status:"success",
            data
        })
    })

    
}