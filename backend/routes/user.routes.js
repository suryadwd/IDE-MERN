import express from "express"
import { login, signup } from "../controller/user.controller.js"
import { createProject, getProject, saveProject } from "../controller/proj.controller.js"
import { protectedRoute } from "../middleware/protected.js"

const router = express.Router()


router.post("/signup",signup)
router.post("/login",login)
router.post("/create",protectedRoute,createProject )
router.post("/save",protectedRoute,saveProject)
router.get("/allProject",protectedRoute,getProject)


export default router

