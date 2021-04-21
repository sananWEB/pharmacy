const express=require("express")
const app=express();
require("./mongo")
const PORT=process.env.PORT || 3000
const resgister=require("./routes/register")
const dashboard=require("./routes/dashboard")
const drugs=require("./routes/drugs")


app.use(express.json())
app.use("/",resgister)
app.use("/dashboard",dashboard)
app.use("/drugs",drugs)

app.listen(PORT,console.log("Server is Running...")) 