const router = require("express").Router();
const user = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass
    });

    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch(err){
        res.status(500).json(err)
    }
})

//LOGIN
router.post("/login", async(req, res)=>{
    try{
        const createdUser = await user.findOne({email: req.body.email});
        if(createdUser == null)
        {
            res.status(401).json("Wrong credentials! Try again");
        }
        else{
            const hashedPass = await bcrypt.compare(req.body.password, createdUser.password);

            if(!hashedPass)
            {
                res.status(401).json("Wrong credentials! Try again");
            }
            else{
                const accessToken = jwt.sign({id: createdUser._id, isAdmin: createdUser.isAdmin}, process.env.SECRET_KEY, { expiresIn:"5d"});
                const {password, ...otherCred} = createdUser._doc;
                res.status(200).json({...otherCred, accessToken});
            }
        }        
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});

module.exports = router;