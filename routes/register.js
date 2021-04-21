const router=require("express").Router()
const {register,deleteuser,getallusers,updateuser,signin}=require("../controllers/register")
const {tokanvarify}=require("../config/Oauth")
 
router.route("/signin").post(signin)
router.route("/register").post(register).get(tokanvarify,getallusers)
router.route("/register/:id").patch(tokanvarify,updateuser).delete(tokanvarify,deleteuser)

module.exports=router