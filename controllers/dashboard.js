
exports.dashboard=(req,res)=>{


    res.status(200).json({
        totaldrugs:400,
        expireDrugs:3,
        shorageDrugs:7,
        dailysale:7893,
        user:req.user
    })


}