require("dotenv").config()
 const jwt = require('jsonwebtoken')
const authenticateToken = (req, res, next) => {

    const authHeader = req.headers.authorization

    const token = authHeader && authHeader.split(' ')[1]
    console.log(token);


    if (!token) {

        return res.status(401).json({ message: 'No token provided' })
    }

    try {

        console.log("verify");
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET)
        console.log("verifhhh");
        

        req.user = verifiedUser

        next();

    } catch (error) {

        res.status(403).json({ message: 'Invalid token' })
    }
}
module.exports = authenticateToken;