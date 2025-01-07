import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
import {dbConnect} from "./config/db.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser";
import codeRoutes from "./routes/code.routes.js"
import userRoutes from "./routes/user.routes.js"
const corsOptions = {
  origin:"http://localhost:5173",
  credentials:true
}
app.use(cors(corsOptions))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/code",codeRoutes)
app.use("/api/v1/users",userRoutes)

app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`
  )
  dbConnect()
})