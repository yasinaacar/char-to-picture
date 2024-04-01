const mongoose=require("mongoose");
const config=require("config");
const logger=require("./logger");

const username= config.get("db.username");
const password= config.get("db.password");
const databasename= config.get("db.databasename")

async function connectMongoDb(){
        console.log(password)
        await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.slrguhg.mongodb.net/${databasename}?retryWrites=true&w=majority`);
        logger.info("mongodb connection is success...")
}

module.exports=connectMongoDb;