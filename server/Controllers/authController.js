const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../Models/userSchema');


// @desc    Auth Admin
//  @Route   POST /api/users/login
// @access  Public
// URL : http://localhost:3001/api/users/Login

const Login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // check for user email : 
    const user = await User.findOne({ email , role: 'admin'})
    if (user) {
        // compare password
        const isMatch = await bycrypt.compare(password, user.password)
        if (isMatch) {
            // create token
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
            const role = user.role
            res.status(200)
            .json({token , role , message: "Login successfully"})
        } else {
            res.status(400)
            .json({message: "Invalid credentials"})
        }
    }
})

// @desc Auth Admin
// @Route POST /api/users/register
// @access Public
// URL : http://localhost:3001/api/users/register

const Register = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body;
    if ( !name || !email || !password || !role ){
        res.status(400)
        .json({message: "Please fill all the fields"})
    }
    // check for user email : 
    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400)
        .json({message: "User already exists"})
    }
    // hash password 
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);
    // create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    })
    if (user) {
        res.status(201)
        .json({message: "User created successfully"})
    }
})


module.exports = {Register , Login}

