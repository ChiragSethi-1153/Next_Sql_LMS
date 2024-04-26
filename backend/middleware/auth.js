const jwt = require('jsonwebtoken')
const key = process.env.JWT_KEY


exports.verifyToken = async (req, res, next) => {
    try {
        console.log(req.cookies)
        const token = req.cookies.authorization
        
        // console.log(header)
        // console.log(req.headers)
        // const token = header.split(" ")[1]
        // console.log(token)

        if (!token) {
            return res.status(404).json({ message: "No token Found" })
        }
        else {
            jwt.verify(token, key, (err, user) => {
                if (err) {
                    return res.status(400).json({ message: "Invalid Token" })
                }
                else {
                    console.log(user.role)
                    // console.log(user.id);
                    req.id = user.id
                    req.role = user.role
                    next();
                }
            });

        }
    } catch (err) {
        console.log(err)
        return res.sendStatus(500)
    }

};