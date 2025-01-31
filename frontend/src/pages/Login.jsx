import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

   const navigate = useNavigate();

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    
    setData({
      email: "",
      password: "",
    });


    try {
      
      const res = await axios.post("http://localhost:7000/api/v1/users/login",data,{
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      if(res.data.success){
        toast.success(res.data.message);
        navigate("/");
      }

    } catch (error) {
      console.log(error)
    }


  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="-mt-8 cont flex flex-col items-center justify-center min-h-screen ">
        <div className=" p-4 h-12 mb-20">
          <h1 className="font-bold">CODE IT. ANYTHING. EVERYTHING</h1>
        </div>
        <form
          onSubmit={handelOnSubmit}
          className="w-[20vw] h-[40vh] flex flex-col justify-center bg-slate-950 rounded-lg shadow-2xl shadow-black/85"
        >
          <div className="-mt-16 ">
            <img className="h-50 w-50 object-cover" src="logo.png" alt="" />
          </div>

          <div className="-mt-10 flex flex-col gap-4 p-3">
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="bg-slate-800 p-2 rounded-lg"
              placeholder="Email"
            />
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="bg-slate-800 p-2 rounded-lg"
              placeholder="Password"
            />
            <p className="ml-10 p-1">
              <Link to="/signup">
                Create an account? <span className="text-blue-400">Signup</span>
              </Link>
            </p>
            <button type="submit" className="bg-blue-500 rounded-lg p-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
