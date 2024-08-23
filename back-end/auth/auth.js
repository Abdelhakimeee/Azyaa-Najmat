const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
require('dotenv').config();

const USER = {
    name: process.env.USER_NAME,
    password: process.env.USER_PASSWORD
}

const authenticateToken = (req, res, next) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({message:'مطلوب تسجيل الدخول'})

    jwt.verify(token, 'secret_key', (err, user)=>{
        if (err) return res.status(403).json({message: 'رمز التكوين غير صالح'})
        req.user = user;
        next();
    })


}
router.post('/login', (req, res)=>{
    const {name, password} = req.body;

    if (name === USER.name && password === USER.password) {
        const token = jwt.sign({userId: 1}, 'secret_key',{expiresIn: '1m'})
        res.json({token})
    }else {
        res.status(401).json({message: 'اسم المستخدم أو كلمة المرور غير صحيحة'})
    }
})
module.exports = router;