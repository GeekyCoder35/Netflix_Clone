const jwt = require("jsonwebtoken");

function verify (req, res, next){
    const authHeader = req.headers.token;
    
    if(authHeader)
    {
        const token = authHeader.split(" ")[1];
        
        //basically this checks the access-token created while we logged in and returns an error or the userid & isadmin
        //next() is used to jump to the router
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if(err)
            {
                res.status(403).json("Invalid token error");
            }
            else{
                req.user = user;
                next();
            }
        })
    }
    else{
        res.status(401).json("Wrong Credentials!");
    }
}


module.exports = verify;