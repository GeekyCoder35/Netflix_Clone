const router = require("express").Router();
const Movies = require("../models/Movie");
const verify = require("../verifyToken");

//CREATE
router.post("/", verify, async (req, res)=>{
    if(req.user.isAdmin){
        const newMovie = new Movies(req.body);
        
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (err) {
            res.status(500).json(err)
        }
    }
    else{
        res.status(403).json("You are not the Admin, you don't have access");
    }
})

//UPDATE
router.put("/:id", verify, async (req, res)=>{
    if(req.user.isAdmin){        
        try {
            const updatedMovie = await Movies.findByIdAndUpdate(req.params.id, {$set: req.body},{ new: true});
            res.status(200).json(updatedMovie);
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
            await Movies.findByIdAndDelete(req.params.id);
            res.status(200).json("The movie has been deleted!");
        } catch (err) {
            res.status(500).json(err)
        }
    }
    else{
        res.status(403).json("You are not the Admin, you don't have access");
    }
})

//GET
router.get("/find/:id", verify, async (req, res)=>{      
    try {            
        const movie = await Movies.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET FEATURED MOVIE OR SERIES
router.get("/random", verify, async (req, res)=>{
    const type = req.query.type;
    let movie;      
    try {            
        if(type==='series')
        {
            movie = await Movies.aggregate([
                {$match: {isSeries: true}},
                {$sample : {size : 1}}
            ]);
        }
        else{
            movie = await Movies.aggregate([
                {$match: {isSeries: false}},
                {$sample : {size : 1}}
            ]);
        }
        res.status(200).json(movie);
    } 
    catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL
router.get("/", verify, async (req, res)=>{
    if(req.user.isAdmin){        
        try {
            const allMovies = await Movies.find();
            res.status(200).json(allMovies.reverse());
        } catch (err) {
            res.status(500).json(err)
        }
    }
    else{
        res.status(403).json("You are not the Admin, you don't have access");
    }
})

module.exports = router;