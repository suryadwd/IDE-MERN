import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  projname:{
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

export const Project = mongoose.model("Project",projectSchema)