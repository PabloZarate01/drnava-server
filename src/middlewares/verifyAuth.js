const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log("My tokenn:",token);
        const me = jwt.verify(token, process.env.JWT_KEY);
        console.log('Me from auth-verify:',me);
        next()
    }catch (err) {
        res.status(401).json({
            message : "Error with authentication"
        });
    }
};