const router=require("express").Router()
const {tokanvarify}=require("../config/Oauth")
const {insertdrugs,qtylessthanten,deletedrug,updatedrugs,getalldrugs}=require("../controllers/drugs")

router.route("/").post(tokanvarify,insertdrugs).get(tokanvarify,getalldrugs)
router.route("/:id").patch(tokanvarify,updatedrugs).delete(tokanvarify,deletedrug)
router.route("/qty10").get(tokanvarify,qtylessthanten)

module.exports=router;