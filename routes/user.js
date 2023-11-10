const express=require("express");

const router=express.Router();
const userController=require("../controllers/usercontroller");
const isAuth=require("../middlewares/isAuth");


router.post("/register", isAuth, userController.post_register);
router.post("/login", userController.post_login);



module.exports=router;