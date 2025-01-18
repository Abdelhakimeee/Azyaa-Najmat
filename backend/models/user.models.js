import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String, required: true, unique: true,
        match: [/^\S+@\S+$/, 'Invalid email format']
    },
    password: { type: String, required: true },
    age: { type: Number, default: 18 },
}, { timestamps: true });

export default mongoose.model('User', userSchema);