import userModel from '../Models/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
async function registerUser(req,res) {
    const {username,email,password,role='user'} = req.body
    const isUserExist = await userModel.findOne({
        $or:[
            {username},
            {email},
        ]
    })
    if(isUserExist){
        return res.status(409).json({
            message:'user already exists'
        })
    }
    const hash = await bcrypt.hash(password,10)
    const user = await userModel.create({
        username,
        email,
        password:hash,
        role,
    })
    const token = jwt.sign({
        id:user._id,
        role:user.role,
    },
process.env.JWT_SECRET)

res.cookie('token',token)
const registeredUser = {
    id:user.id,
    username:user.username,
    email:user.email,
    role:user.role
}
res.status(201).json({
    message:'user registered sucessfully',
    user:registeredUser
})
}

async function loginUser(req,res) {
    try{
    const {username,email,password} = req.body
    const user =await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(!user){
        return res.status(401).json({
            message:'invalid credential'
        })
    }
    const isPasswordValid = await bcrypt.compare(password,user.password)
    if(!isPasswordValid){
        return res.status(401).json({
            message:'invalid password'
        })
    }
    const token = jwt.sign({
        id:user._id,
        role:user.role
    },process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(200).json({
        message:"logged in succesfully",
        user:{
            id:user.id,
            username:user.username,
            email:user.email,
            role:user.role

        }
    })
}
catch(err){
  console.log(err);
    return res.status(500).json({
        message:'login failed'
    })
}
    
}
async function logOut(req,res) {
    res.clearCookie('token')
    res.status(200).json({
        message:'log out successfully'
    })
    
}
 export default {
   registerUser,
   loginUser,
   logOut
 };   