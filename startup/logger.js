const {transports, createLogger, format}=require("winston");
const {combine, timestamp, prettyPrint}=format;

require("winston-mongodb");

const config=require("config");

const username= config.get("db.username");
const password= config.get("db.password");
const databasename= config.get("db.databasename")

const logger=createLogger({
    level: "debug", //log debug
    format: combine(timestamp({format: "DD-MM-YYYY HH:mm:ss"}),
        prettyPrint()
),
    transports:[
        new transports.Console(),//prints debug errors to the console
        new transports.File({filename: "logs/logs.log", level:"error"}),//create file name of "logs.log" for level type error
        new transports.File({filename: "logs/exceptions.log", level:"error", handleExceptions: true, handleRejections: true, maxFiles:"7d"}),
        new transports.MongoDB({//save error to database if level type is error
            level: "error",
            db: `mongodb+srv://${username}:${password}@cluster0.slrguhg.mongodb.net/${databasename}?retryWrites=true&w=majority`,
            options:{
                useUnifiedTopology: true,
            },
            collection: "server_logs"//schema name
        })
    ]
});
module.exports=logger;