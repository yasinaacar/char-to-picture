const express=require("express");

const router=express.Router();

const charController=require("../controllers/charController");
const isAuth=require("../middlewares/isAuth");

router.post("/create", isAuth, charController.post_char); //create new character
router.put("/update/:id", isAuth, charController.update_char); //update new character
router.delete("/delete/:id", isAuth, charController.delete_char); //delete character
router.get("/list", charController.get_chars); //all characters
router.get("/image",charController.get_char_image); //select by char ---> /api/character/images/?char=${char}
router.get("/:id",charController.get_char_by_id); //select by char id
router.get("/",charController.get_char_by_char); //select by char ---> /api/character/?char=${char}




module.exports=router;