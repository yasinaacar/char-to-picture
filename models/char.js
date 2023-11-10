const mongoose=require("mongoose");
const Joi=require("joi");


const charSchema=mongoose.Schema({
        char: String,
        charUrl: String,
        image: {type: mongoose.Schema.Types.ObjectId, ref:"Image"}
});

const Character=mongoose.model("Character", charSchema); 

function validateCharacter(character){
    const schema=Joi.object({
        char: Joi.string().max(1).min(1).required(),
        charUrl: Joi.string(),
        image : Joi.string()
    })
     return schema.validate(character)
}

module.exports= { Character, validateCharacter }
