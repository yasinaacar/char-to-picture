const {validateImage, Image}=require("../models/image");

//add image
exports.post_image=async(req,res)=>{
    const result=validateImage(req.body);
    if(result.error){
        return res.send(result.error.details[0].message)
    }

    const image=new Image({
        imageName: req.body.imageName,
        imageUrl: `http://127.0.0.1:3000/picture/${req.body.imageName}`,
        char: req.body.char
    });
    const newImage=await image.save();
    return res.send(newImage);
};

//update image
exports.update_image=async(req,res)=>{
    const result=validateImage(req.body);
    if(result.error){
        return res.send(result.error.details[0].message);
    }
    const image= await Image.findByIdAndUpdate(req.params.id,{
        imageName: req.body.imageName,
        imageUrl: `http://127.0.0.1:3000/picture/${req.body.imageName}`,
        char: req.body.char
    }).populate("char", "char charUrl");
    if(!image){
        return res.send("image is not found")
    }
    return res.send(image);

};

//delete image
exports.delete_image=async(req,res)=>{

    const image= await Image.findByIdAndDelete(req.params.id);
    if(!image){
        return console.log("image is not found")
    }
    const images=await Image.find().populate("char", "char imageUrl");
    return res.send(images);

};

//image by id
exports.get_image_by_id=async(req,res)=>{
    const image= await Image.findById(req.params.id).populate("char", "char charUrl").select("_id imageName imageUrl");
    if(!image){
        return res.status(400).send(`The image with id number ${req.params.id} was not found. Are u sure about id number is correct? `)
    }
    return res.send(image)
};

//all images
exports.get_images=async(req,res)=>{
    const images= await Image.find().populate("char", "char charUrl").select("_id imageName imageUrl");
    return res.send(images)
};
