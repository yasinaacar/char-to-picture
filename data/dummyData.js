const mongoose=require("mongoose");
const { Character } = require("../models/char");
const path = require("path");
const pictures= path.join(__dirname,"../public/images")
const fs=require("fs");
const {Image}  = require("../models/image");


const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Ç","Ö","Ü","Ğ","İ","Ş"];

async function dummyData(){
    try {
        const characters=await Character.find();
        if(characters.length==0){
            for (let char of alphabet) {

                const character=new Character({
                    char: char,
                    charUrl: `http://127.0.0.1:3000/api/character/?char=${char}`
                });
                await character.save();
            }
            
        }
        console.log("Chars is already added")

        const images=await Image.find();
        if(images.length==0){
            fs.readdir(pictures,async (err,files)=>{
                if(err){
                    console.log(err)
                }
                for (let pic of files) {
                    const picture=new Image({
                        imageName: pic,
                        imageUrl: `http://127.0.0.1:3000/picture/${pic}`,
                    });
                    await picture.save()
                    //take the last saved picture picture name and split from ".". After the split take the front of "."
                    const picChar=picture.imageName.split(".");
                    //Find character by char of ${picChar} and update character
                    const updatedChar=await Character.findOneAndUpdate({char: picChar[0]},{image:picture.id});
                    //After updated character take the id and find last added image later update char part of image  
                    await Image.findByIdAndUpdate(picture.id,{
                        char: updatedChar.id
                    })
                }
            })
        }
        return console.log("Image is already added")

    } catch (err) {
        console.log(err)
    }
}

module.exports=dummyData;


