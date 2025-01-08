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

    let {name, projLang} = req.body

    const user = await User.findOne(userId)


    let project = await Project({user:user._id, name, projLang:getStartupCode(projLanguage)})



  } catch (error) {
    console.log(error)
  }

}