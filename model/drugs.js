const mongo=require("mongoose")


const drugs=mongo.Schema({
    name:{
        type:String,
        required:[true,"Enter the drug name"]
    },
    formula:{
        type:String,
        required:[true,"Enter the drug formula"]
    },
    price:{
        type:Number,
        required:[true,"Enter the drug price"]
    },
    actualprice:{
        type:Number,
        required:[true,"Enter the drug actual price"]
    },
    gm:{
        type:Number,
        required:[true,"Enter the drug Grams"]
    },
    companyname:{
        type:String,
        required:[true,"Enter the drug company name"]
    },
    expiredate:{
      type:Date,
        required:[true,"Enter the drug expire date"]
    },
    qty:{
        type:Number,
        required:[true,"Enter the drug quantity"]
    }
})

module.exports=mongo.model("drugs",drugs)
