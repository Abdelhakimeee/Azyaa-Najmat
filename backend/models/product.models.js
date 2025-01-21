import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    // img: [String],     for many photo 
    img: {type: [String]},
    price: {
        type: Number,
        required: [true, "Price ?"],
        min: [0, "the parice more than 0"]
    },
    name: { type: String, require:true },
    text: { type: String, trim: true, maxLength: 600 }
}, { timestamps: true });
export default mongoose.model('products', productSchema);