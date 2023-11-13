const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name can not more than 20 character']
    },
    completed:{
        type:Boolean,
        default:false
    },
    phoneNumber: Number,
    address: String
})//The schema works as a data definition language which gives instruction as a
//framework of the database property and every property must have it value. 
//like "name" and this property has values according to the backend developer wishes

module.exports = mongoose.model('Task',TaskSchema)//Here during exporting of the taskschema we ensure 
//that we have annexed on it a model keyword

