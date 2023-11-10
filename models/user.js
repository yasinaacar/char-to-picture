const mongoose=require("mongoose");
const Joi=require("joi");
const jwt=require("jsonwebtoken");
const config=require("config")


const userSchema=mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
        }
});
const jwtPrivateKey=config.get("auth.jwtPrivateKey")
userSchema.methods.createAuthToken=()=>{
    return jwt.sign({_id: this._id}, jwtPrivateKey); 
}

const User=mongoose.model("User", userSchema); 

function validateRegister(user){
    const schema=Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(3).required(),
        password : Joi.string().min(6).required()
    })
     return schema.validate(user)
}

function validateLogin(user){
    const schema=Joi.object({
        email: Joi.string().min(3).required(),
        password : Joi.string().min(6).required()
    })
     return schema.validate(user)
}
module.exports= { User, validateLogin, validateRegister }
