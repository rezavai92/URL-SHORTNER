const express = require('express')
const commonRouter = express.Router()
const shortUrlModel = require("../models/shortUrl")
const shortenUrlController =require('../controllers/shortenUrlController');
const { NotExtended } = require('http-errors');


//post 
commonRouter.post("/" ,shortenUrlController);




//get 

commonRouter.get("/",(req,res)=>{
 
    console.log("got")
    res.render("index",{title :"Home-URLshortner"});
})


commonRouter.get("/:url",async(req,res,next)=>{

    console.log(req.params.url)
    try{
    const data = await shortUrlModel.findOne({
        shortUrl :  req.params.url
    })

    console.log(data);
    if(data){

        console.log(data)
        res.redirect(data.longUrl);
    }
    else{

        res.send("<p> no data found</p>");
    }
}
    catch(error){

        next(error)
    } 
    

} )


module.exports = commonRouter;