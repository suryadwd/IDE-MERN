import { User } from "../modals/user.model.js"
import { Project } from "../modals/proj.model.js"


function getStartupCode(language) {
  if (language.toLowerCase() === "python") {
    return 'print("Hello World")';
  } else if (language.toLowerCase() === "java") {
    return 'public class Main { public static void main(String[] args) { System.out.println("Hello World"); } }';
  } else if (language.toLowerCase() === "javascript") {
    return 'console.log("Hello World");';
  } else if (language.toLowerCase() === "cpp") {
    return '#include <iostream>\n\nint main() {\n    std::cout << "Hello World" << std::endl;\n    return 0;\n}';
  } else if (language.toLowerCase() === "c") {
    return '#include <stdio.h>\n\nint main() {\n    printf("Hello World\\n");\n    return 0;\n}';
  } else if (language.toLowerCase() === "go") {
    return 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello World")\n}';
  } else if (language.toLowerCase() === "bash") {
    return 'echo "Hello World"';
  } else {
    return 'Language not supported';
  }
}


export const createProject = async(req, res) => {

  try {
    
    const userId = req.user.id

    let {projname, projLang} = req.body

    const user = await User.findOne({_id: userId}) 

    if(!user) return res.status(404).json({message:"user not found",success:false})

    let project = await Project({user:user._id, projname, projLang, code:getStartupCode(projLang)})

    await project.save()

    return res.status(201).json({success:true, message:"created",project})

  } catch (error) {
    console.log(error)
  }

}

export const saveProject = async(req, res) => {

  try {
    
     const {projectId , code} = req.body

     const user = await User.findOne({_id:req.user.id})

     if(!user) return res.status(400).json({message:"user not found", success:"false"})
      
     let newProject = await Project.findById(projectId)

  if(!newProject) return res.status(400).json({message:"project not found", success:"false"})

     newProject.code = code;
     await newProject.save()

     return res.status(200).json({success:true,message:"user updated",newProject})

  } catch (error) {
    return res.status(500).json({success:false,message:error.message})
    console.log(error)
  }

}

export const getProject = async  (req, res) => {

  try {
    
  const userId = req.user.id

  if(!userId) return res.status(404).json({success:false, message:"user not find"})

  const project = await Project.findOne({user:userId})

  if(!project) return res.status({message:"no project found"})

  return res.status(200).json({success:true, project})
  } catch (error) {
   return res.status(500) .json({success:false, message:error.message})
  }

}