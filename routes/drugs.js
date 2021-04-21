const router=require("express").Router()
const {tokanvarify}=require("../config/Oauth")
const {insertdrugs,deletedrug,updatedrugs,getalldrugs}=require("../controllers/drugs")

router.route("/").post(tokanvarify,insertdrugs).get(tokanvarify,getalldrugs)
router.route("/:id").patch(tokanvarify,updatedrugs).delete(tokanvarify,deletedrug)

module.exports=router;