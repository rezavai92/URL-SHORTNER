const createError = require('http-errors')

const notFoundErrorHandler =(req,res,next)=>{

   next (createError(404,"page not found") );
   
}

const defaultErrorHandler =(err,req,res,next)=>{

    res.status(err.status||500);
    console.log(err)
    
    res.locals.error= process.env.NODE_ENV ==="development" ? err :{message:err.message};
    res.locals.title ="Error-UrlShortner";
    res.render("error");
   
}

module.exports ={notFoundErrorHandler,defaultErrorHandler}