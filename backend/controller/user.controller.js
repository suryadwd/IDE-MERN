import { User } from "../modals/user.model.js"
import bcrypt from "bcryptjs"
import { genTokAndCookies } from "../utils/genToken.js"

export const signup = async(req, res) => {

  try {
    
    const {username, email, password} = req.body

    if(!username || !email || !password) return res.status(400).json({success:false, message:"All fields are required"})

    const userExisit = await User.findOne({email})

    if(password.length < 6 ) return res.status(400).json({success:false, message:"password must be of 6 digit"})

    if(userExisit) return res.status(400).json({success:false, message:"user already exist"})

    const hashPass = await bcrypt.hash(password, 10)

    const newUser = new User({username, email, password:hashPass})

    const payload = {id:newUser._id}

    genTokAndCookies(payload,res)

    await newUser.save()

    return res.status(201).json({success:true,message:"user created",newUser})


  } catch (error) {
    console.log(error)
  }

}


export const login = async(req, res) => {

  const {email, password} = req.body

  if(!email || !password) return res.status(400).json({success:false, message:"all fields are required"})

  const userExist = await User.findOne({email})

  if(!userExist) return res.status(400).json({success:false, message:"User not exist"})

  const isMatch = await bcrypt.compare(password, userExist.password)

  if(!isMatch) return res.status(400).json({success:false, message:"password invalid"})

    return res.status(200).json({success:true, message:"login", userExist})

}