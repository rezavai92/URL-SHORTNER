//external imports
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//internal imports
const {notFoundErrorHandler,defaultErrorHandler} = require('./middlewares/common/errorHandlers')
const commonRouter = require('./routes/common')

const app = express();
dotenv.config();

// database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{useUnifiedTopology:true,useNewUrlParser:true},(err)=>{

    if(err){

        console.log(err.message)
        throw err;
    }
    else{

        console.log("database connected");
    }

})

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
//setup view engine
app.set("view engine","ejs")


//routes

app.use("/",commonRouter);



//error

app.use(notFoundErrorHandler);
app.use(defaultErrorHandler);




const port = 3000 || process.env.PORT;

app.listen( port,()=>{

    console.log("app is listening to port",port);
})
