const mongoose = require('mongoose')

const shortUrlSchema =  new mongoose.Schema({

    longUrl :{
        type : String,
        required : true
    },
    shortUrl:{

        type : String,
        required : true
    },
    clicks:{
        type : Number,
        default : 0
    }

})

 const shortUrlModel = mongoose.model("ShortUrls",shortUrlSchema);

 module.exports = shortUrlModel;