
import jwt from "jsonwebtoken"
import { User } from "../modals/user.model"

export const protectedRoute = async (req, res, next) => {

  try {
    const token = req.cookies.jwt

    if(!token) return res.status(401).json({message:"Unauthorized"})

    const payload = jwt.verify(token, process.env.JWT_SECRET)

  const user = await User.findById(payload.id).select("-password")

    req.user = user
  
    next()

  } catch (error) {
    return res.status(500).json({message:error.message})
  }  

}