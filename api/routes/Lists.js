const router = require("express").Router();
const Lists = require("../models/List");
const verify = require("../verifyToken");

//CREATE
router.post("/", verify, async (req, res)=>{
    if(req.user.isAdmin){
        const newList = new Lists(req.body);
        
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch (err) {
            res.status(500).json(err)
        }
    }
    else{
        res.status(403).json("You are not the Admin, you don't have access");
    }
})

//DELETE
router.delete("/:id", verify, async (req, res)=>{
    if(req.user.isAdmin){        
        try {
            await Lists.findByIdAndDelete(req.params.id);
            res.status(201).json("The List has been deleted!");
        } catch (err) {
            res.status(500).json(err)
        }
    }
    else{
        res.status(403).json("You are not the Admin, you don't have access");
    }
})

//GET
router.get("/", verify, async (req, res)=>{
    typeQuery = req.query.type;
    genreQuery = req.query.genre;

    let list = [];

    try {
        if(typeQuery)
        {
            if(genreQuery)
            {
                list = await Lists.aggregate([
                    {$match: {type: typeQuery, genre: genreQuery}},                
                    {$sample: {size: 5}}
                ]);
            }
            else{
                list = await Lists.aggregate([                    
                    {$match: {type: typeQuery}},
                    {$sample: {size: 5}}                
                ]);
            }
        }
        else{
            list = await Lists.aggregate([{$sample: {size: 5}}]);
        }

        res.status(200).json(list);
    } catch (error) {
        res.status(500).json(error);
    }
})
module.exports = router;