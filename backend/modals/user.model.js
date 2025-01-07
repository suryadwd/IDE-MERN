import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  username:{
    type:String,
  },

  email:{
    type:String,
  },

  password:{
    type:String,
  },

  date:{
    type:Date,
    default:Date.now()
  },

},{timestamps:true})

export const User = mongoose.model("User",userSchema)
