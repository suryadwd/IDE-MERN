import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
export const dbConnect = () => {

  mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("db Connected"))
  .catch((err) => console.log(err))

}