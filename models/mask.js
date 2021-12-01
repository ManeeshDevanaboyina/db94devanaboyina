const mongoose = require("mongoose")
const maskSchema = mongoose.Schema({
    color:{
        type: String,
        minLength: 5
    }, 
     price: {
        type: Number,
        minLength:2
     },
size: String
})
module.exports = mongoose.model("mask", maskSchema)