const express = require('express')

const redirectRouter = express.Router();


redirectRouter.get(":shortUrl",(req,res)=>{


    res.redirect(req.params.shortUrl); 
} )