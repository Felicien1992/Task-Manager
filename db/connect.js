//connecting cloude database Atlas and local codes node

const mongoose = require('mongoose');
// for mongoose of version below 6th version aware to add this setting for those of version
//from 6th it has them by default
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
 //exporting node by connectDB Variable and imported or required with in app js file

module.exports = connectDB