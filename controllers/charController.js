const { Character, validateCharacter } = require("../models/char");


//add character
exports.post_char=async(req,res)=>{    
    const validate=validateCharacter(req.body)
    if(validate.error){
        res.status(400).send(validate.error.details[0].message);
        return;
    }
    const char=new Character({
        char: req.body.char,
        charUrl: `http://127.0.0.1:3000/api/character/?char=${req.body.char}`,
        images : req.body.image
    });
    const newChar=await char.save();
    return res.send(newChar);
};

//update character
exports.update_char=async(req,res)=>{
    const validate=validateCharacter(req.body)
    if(validate.error){
        res.status(400).send(validate.error.details[0].message);
        return;
    }
    const updatedChar=req.body.char;
    const char= await Character.findByIdAndUpdate(req.params.id,{
        char: updatedChar,
        charUrl: `http://127.0.0.1:3000/api/character/?char=${updatedChar}`,
        image : req.body.image
    });
    if(!char){
        return console.log("char is not found")
    }
    return res.send(await Character.findById(char.id).populate("image"));

};

//delete character
exports.delete_char=async(req,res)=>{

    const char= await Character.findByIdAndDelete(req.params.id);
    if(!char){
        return console.log("char is not found")
    }
    const characters=await Character.find().populate("image");
    return res.send(characters);

};

//character by id
exports.get_char_by_id=async(req,res)=>{
    const character= await Character.findById(req.params.id).populate("image", "_id imageName imageUrl").select("_id char charUrl");
    if(!character){
        return res.status(404).send("chek the id number")
    }
    return res.send(character)

};

//character by char
exports.get_char_by_char=async(req,res)=>{

    const queryChar=req.query.char;
    
    if(queryChar.length>1){
        return res.status(400).send("char query must be alphabetic characters and length must be 1 character")
    }
    const character= await Character.findOne({char: queryChar.toUpperCase()}).populate("image", "_id imageName imageUrl").select("_id char charUrl");
    if(!character){
        return res.status(404).send(`char of "${req.query.char}" is not found. Please just into any alphabet characters, like "A"`)
    }
    return res.send(character);
};

//select all images belongs to char
exports.get_char_image=async(req,res)=>{
    
    const charQuery=req.query.char; 

    console.log(charQuery);
    const charImage=await Character.findOne({char: charQuery.toUpperCase()}).populate("image", "imageUrl").select("char");
    if(!charImage){
        return res.status(400).send("Character is not found. Are you sure about char is correct?")
    }
    return res.send(charImage);
}

//all characters
exports.get_chars=async(req,res, next)=>{
    const characters= await Character.find().populate("image", "_id imageName imageUrl ").select("_id char charUrl");
    return res.send(characters)
}
