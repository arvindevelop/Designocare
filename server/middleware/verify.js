const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config({path:'../config.env'});

const verify = async (req,res,next) => {

    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        next();
    } 
    catch (error) {
        console.log("error: " + error);
        res.status(401).send("Please register/Login: " + error);
    }
}

module.exports = verify;