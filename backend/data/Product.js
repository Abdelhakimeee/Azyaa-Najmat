import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    // img: [String],     for many photo 
    img: String,
    price: String,
    name: String,
    text: String,
});
export default mongoose.model('products', productSchema);