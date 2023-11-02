const mongoose = require('mongoose');



const connectDb = ( url) => {
   return mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false ,
        useUnifiedTopology: true
    })
    // .then(() => console.log('connected to the Data Base..')).catch((err)=> console.log('err'))
}

module.exports = connectDb