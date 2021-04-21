const router=require("express").Router();
const {dashboard}=require("../controllers/dashboard")
const {tokanvarify}=require("../config/Oauth")

router.route("/").get(tokanvarify,dashboard)

module.exports=router