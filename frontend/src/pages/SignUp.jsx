import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handelOnSubmit = (e) => {
    e.preventDefault();
    setData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="-mt-9 cont flex flex-col items-center justify-center min-h-screen ">
        <div className=" p-4 h-12 mb-24">
          <h1 className="font-bold">CODE IT. ANYTHING. EVERYTHING</h1>
        </div>
        <form
          onSubmit={handelOnSubmit}
          className="w-[20vw] h-[40vh] flex flex-col justify-center bg-slate-950 rounded-lg shadow-2xl shadow-black/85"
        >
          <div className="-mt-16 ">
            <img
              className="h-50 w-50 object-cover"
              src="logo.png"
              alt=""
            />
          </div>

          <div className="-mt-10 flex flex-col gap-4 p-3">
            <input
              type="text"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              className="bg-slate-800 p-2 rounded-lg"
              placeholder="Username"
            />
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
            <p className="ml-6">
              <Link to="/login">
                Already have an account?{" "}
                <span className="text-blue-400">Login</span>
              </Link>
            </p>
            <button type="submit" className="bg-blue-500 rounded-lg p-2">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
