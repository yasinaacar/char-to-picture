require("express-async-errors"); 
const express=require("express");
const cors=require("cors");
const path=require("path");


const app=express();


app.use(cors({
    origin: "*",
    methods: "GET"
}))

app.use("/picture", express.static(path.join("public/images")));

const connectMongoDb=require("./startup/db");
const dummyData=require("./data/dummyData");

if(process.env.NODE_ENV == "production"){
    require("./startup/production")(app);
}

//routes
require("./startup/routes")(app);

//loger
require("./startup/logger");

(async ()=>{
    await connectMongoDb();
    // await dummyData();
})()

const port=process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`waiting for port ${port}`)
})