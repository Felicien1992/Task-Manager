const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name can not more than 20 character']
    },
    completed:Boolean
})

module.exports = mongoose.model('Task',TaskSchema)

