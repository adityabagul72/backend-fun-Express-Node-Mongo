const userModel = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            return res.json({ message: "User already exists.", success: false });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
            username,
            email,
            password: hashedPassword
        });
        
        // Generate a token for the new user
        const token = jwt.sign({ email: newUser.email, _id: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });

        return res.status(200).json({ message: 'Signup Successfully', success: true, email: newUser.email, token, name: newUser.username });

    } catch (error) {
        return res.status(500).json({ message: "Error while creating user.", success: false });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ message: "Authentication failed. Check email or password.", success: false });
        }

        const isPassMatch = await bcrypt.compare(password, user.password);
        if (isPassMatch) {
            const token = jwt.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });

            return res.status(200).json({ message: 'Login Successfully', success: true, email: user.email, token, name: user.username });
        } else {
            return res.json({ message: "Authentication failed. Check email or password.", success: false });
        }

    } catch (error) {
        return res.status(500).json({ message: "Error while logging in.", success: false });
    }
}

module.exports = { signup, login };
