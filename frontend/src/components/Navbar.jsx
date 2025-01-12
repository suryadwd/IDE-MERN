import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const navbar = () => {

  const navigate = useNavigate()

  const handleOnClick = async() => {

    console.log("click")

    try {
      
      let res = await axios.post("http://localhost:7000/api/v1/users/logout")

      if(res.data.success){
        toast.success(res.data.message)
        navigate("/login")
      }

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <div className=" flex items-center justify-between bg-slate-950 h-16 ">
        <img className="h-48 -ml-5" src="logo2.png" alt="" />
        <div className="links flex items-center gap-7 mr-9 ">
          <Link  className=" transition-all hover:text-blue-500">Home</Link>
          <Link className=" transition-all hover:text-blue-500">About</Link>
          <Link className=" transition-all hover:text-blue-500">Services</Link>
          <Link className=" transition-all hover:text-blue-500">Contact</Link>
          <button onClick={handleOnClick} className="bg-red-700 p-2 rounded-lg">Logout</button>
        </div>
      </div>
    </>
  );
};

export default navbar;
