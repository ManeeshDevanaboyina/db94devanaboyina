const mongoose = require("mongoose")
const maskSchema = mongoose.Schema({
color: String,
price: Number,
size: String
})
module.exports = mongoose.model("mask", maskSchema)