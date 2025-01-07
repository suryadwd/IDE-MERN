import express from "express"
import { sample } from "../controller/code.controller.js"

const router = express.Router()


router.get("/",sample)

export default router

