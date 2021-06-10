const shortUrl = require('../models/shortUrl')
const {nanoid} = require('nanoid')
const createError = require('http-errors')
const validator = require('validator')

const shortenUrlController =(req,res,next)=>{

if(validator.isURL(req.body.longUrl ,{
    require_protocol : true
} ) ) {

    const newShortUrl = new shortUrl({
        longUrl : req.body.longUrl,
        shortUrl : nanoid(6)

       
    })   
    newShortUrl.save()
    .then(
       (response)=>{
           res.status(200);
           res.locals.title="index";
   
           res.render("index",{
   
   
               shortenedUrl : "localhost:3000/"+response.shortUrl
           })
   
       }
    ).catch(
       (error)=>{
           next(error)
       }
    )
}

else{
 
    res.locals.errorMessage ="not a valid url! please Check Protocols (http.https,ftp ) ,host and domain of the URL again "
res.render("index", {
    title : "home"
})

}
 

}

module.exports = shortenUrlController;