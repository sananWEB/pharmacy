const mongo=require("mongoose")
require("dotenv").config()
mongo.connect(
process.env.MONGO_URL,
{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true })
.then(()=>{console.log("Database is Connected")})
.catch(()=>{console.log("Database Not is Connected")}
)