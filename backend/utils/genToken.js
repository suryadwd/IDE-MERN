import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const genTokAndCookies = (payload, res) => {

  const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"5d"})

  res.cookie("jwt",token,{maxAge:5*24*60*60*1000})

}