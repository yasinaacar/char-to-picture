const express=require("express");

const router=express.Router();

const imageController=require("../controllers/imageController");
const isAuth=require("../middlewares/isAuth");

router.post("/create", isAuth, imageController.post_image);//add new image
router.put("/update/:id", isAuth, imageController.update_image);//update image
router.delete("/delete/:id", isAuth, imageController.delete_image);//delete image
router.get("/list", imageController.get_images);//all images
router.get("/:id",imageController.get_image_by_id); //select by id


module.exports=router;