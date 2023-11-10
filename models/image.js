const mongoose=require("mongoose");
const Joi=require("joi");


const imageSchema=mongoose.Schema({
    imageName: String,
    imageUrl: String,
    created: {
        type: Date,
        default: Date.now
    },
    char: {type: mongoose.Schema.Types.ObjectId, ref:"Character"}
})

const Image=mongoose.model("Image", imageSchema);

function validateImage(img){
    const schema=Joi.object({
        imageName: Joi.string().required().min(1),
        imageUrl: Joi.string(),
        char: Joi.string()
    })
    return schema.validate(img);
}


module.exports= {validateImage, Image};
