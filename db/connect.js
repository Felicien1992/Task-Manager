const mongoose = require('mongoose');

const connectDB = ( url) => {
   return mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false ,
        useUnifiedTopology: true
    })
      .then(() => console.log('Connected to the Data Base...'))
      .catch(()=> console.log('failed to connect nto the DB'))
 }

module.exports = connectDB