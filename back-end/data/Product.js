const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    // img: [String],     for many photo 
    img: String,
    price: String,
    name: String,
    text: String,
});

module.exports = mongoose.model('products', productSchema);