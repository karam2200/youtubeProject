const { json } = require('express')
const User = require('../Modals/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const cookieOptions ={
    httpOnly: true,
    secure: false, // set to true in production
    sameSite: 'Lax'
}
exports.SignUp = async(req,res)=>{
    try {
        const { channelName , userName, about, profilePic, password} = req.body
        const isExist = await User.findOne({ userName })
        if(isExist){
            res.status(400).json({error: "Username already exists"})
        }else{
            let updatedPass = await bcrypt.hash(password, 10)
            const user = new User({channelName, userName, about, profilePic, password: updatedPass})
            await user.save()
            res.status(201).json({message: 'User registered successfully', success: 'yes',data:user})
        }
    } catch (error) {
        res.status(500).json({error: 'Server error', details: error.message})
    }
}

exports.SignIn = async (req,res)=>{
    try{
        const { userName , password } = req.body 
        const user = await User.findOne({ userName })
        if(user && await bcrypt.compare(password,user.password)){

            const token = jwt.sign({ userId: user._id}, 'Its_My_Super_Key')
            res.cookie('token',token,cookieOptions)
            res.json({ message : 'Logged in successfully', success: 'true',token,user})
        }else{
            res.status(400).json({error: 'Invalid credentials'})
        }
    }catch (error) {
       res.status(500).json({error: 'Server error', details: error.message})
    }   
}

exports.logout = async(req,res)=>{
    res.clearCookie('token', cookieOptions).json({message: 'Logged out successfully'})
}