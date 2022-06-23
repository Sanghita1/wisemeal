const jwt = require("jsonwebtoken");
const User = require("../models/user");

const SECRET = "This is my Secret";
const auth = async (req,res,next)=>{
    try{
        const token = req.cookies.WiseMeal;
        const decoded = jwt.verify(token, SECRET);

        const authUser = await User.findOne({_id: decoded._id, "tokens.token": token});

        if(!authUser){
            throw new Error("Please Authenticate!... You are not logged in");
        }
        
        req.user = authUser;
        next();
    }
    catch(err){
        res.redirect("/login");
    }
}

module.exports = auth;