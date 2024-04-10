const mongoose=require("mongoose");
const config=require("config");
const logger=require("./logger");



async function connectMongoDb(){
        try {
                console.log(config.get("db.DB_URI"))
                await mongoose.connect(config.get("db.DB_URI"));
                logger.info("mongodb connection is success...")
        } catch (err) {
                console.log(err)
        }
}

module.exports=connectMongoDb;