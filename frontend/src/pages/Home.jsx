import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <Navbar />

      <div className="flex items-center mt-4 p-6 justify-between">
        <h1 className="text-3xl">Hi 👋,&nbsp; Suraj</h1>
        <button className="bg-blue-600 rounded-lg p-3 transition-all hover:bg-blue-800">
          Create Project
        </button>
      </div>

      <div className=" bg-zinc-800 m-7 flex items-center hover:bg-zinc-900 transition-all ">
        <div className="h-32 w-32 object-contain">
          <img src="logo3.png" alt="" />
        </div>

        <div className="ml-2">
          <h2 className="font-bold">Python Project</h2>
          <h4 className="font-semibold mt-1">5 jan 2025</h4>
        </div>

        <div className="ml-[74%]">
          <button className="bg-blue-600 p-2 hover:bg-blue-800 transition-all  rounded-lg mr-5">
            <Link to="/edit">Edit</Link>
          </button>
          <button className="bg-red-700 p-2 hover:bg-red-800 transition-all rounded-xl">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
