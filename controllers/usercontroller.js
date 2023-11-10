const {User, validateRegister, validateLogin}=require("../models/user");
const bcrypt=require("bcrypt");

exports.post_register=async(req,res)=>{
    const { error }=validateRegister(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

    const hashedPassword=await bcrypt.hash(req.body.password, 10)

    const user=new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    await user.save();

    const token=user.createAuthToken();

    return res.header("x-auth-token", token).send(user);
}

exports.post_login=async(req,res)=>{

    const {error}=validateLogin(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

    const email=req.body.email;

    const user=await User.findOne({email: email});

    if(!user){
       return  res.status(404).send("Registered email is not found");
    }
    
    const isSuccess=await bcrypt.compare(req.body.password, user.password);

    if(!isSuccess){
        return res.status(400).send("incorrect e-mail or password")
    }

    const token=user.createAuthToken(); //this function belogns to userSchema methods. (/models/user.js) 
    
    return res.header("x-auth-token", token).send(user);
}

