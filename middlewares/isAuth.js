const jwt=require("jsonwebtoken");
const config=require("config");

module.exports=(req,res,next)=>{
    const token=req.header("x-auth-token"); //take the token information from header
    if(!token){
        return res.status(401).send("You haven't access for this process")
    }

    try {
        //verify token
        const decodedToken=jwt.verify(token, config.get("auth.jwtPrivateKey"));
        req.user=decodedToken;

        next();
        
    } catch (ex) {
        res.status(400).send("invalid token")
    }
}