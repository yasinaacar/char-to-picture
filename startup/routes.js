//modules
const express=require("express");

//routes
const charRoutes=require("../routes/char");
const imageRoutes=require("../routes/image");
const userRoutes=require("../routes/user");

//middlewares
const error=require("../middlewares/error");

module.exports=function(app){
    app.use(express.json());
    app.use("/api/character",charRoutes);
    app.use("/api/image",imageRoutes);
    app.use("/api/user",userRoutes);
    app.use(error);
}