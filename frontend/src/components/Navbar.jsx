import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <>
      <div className=" flex items-center justify-between bg-slate-950 h-16 ">
        <img className="h-48 -ml-5" src="logo2.png" alt="" />
        <div className="links flex items-center gap-7 mr-9 ">
          <Link  className=" transition-all hover:text-blue-500">Home</Link>
          <Link className=" transition-all hover:text-blue-500">About</Link>
          <Link className=" transition-all hover:text-blue-500">Services</Link>
          <Link className=" transition-all hover:text-blue-500">Contact</Link>
          <button className="bg-red-700 p-2 rounded-lg">Logout</button>
        </div>
      </div>
    </>
  );
};

export default navbar;
