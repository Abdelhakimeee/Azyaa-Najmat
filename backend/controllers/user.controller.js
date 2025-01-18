import User from '../models/user.models.js';
import bcrypt from 'bcrypt';

// fetch all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// creat new user
export const createUser = async (req, res) => {
    const { name, email, password, age } = req.body;

    try {
        // check if the user exist
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        // hashed the passWord
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, age, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update user data
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email, age },
            { new: true }
        );

        if (!updatedUser) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete User
export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};