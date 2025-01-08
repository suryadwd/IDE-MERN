import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  name:{
    type:String
  },

  projLang:{
    type:String,
    enum:["python","javascript","java","cpp","c","go","bash"]
  },

  code:{
    type:String
  },

  date:{
    type:Date,
    default:Date.now()
  }


}, {timestamps:true})

export const Profile = mongoose.model("Profile",projectSchema)