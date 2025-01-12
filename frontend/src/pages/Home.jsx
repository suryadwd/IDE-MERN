import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Select from 'react-select';

const Home = () => {
  const [click, setClick] = useState(false);

  
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#000',
      borderColor: '#555',
      color: '#fff',
      padding: '5px',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#000',
      color: '#fff',
      width: "100%"
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#333' : '#000',
      color: '#fff',
      cursor: 'pointer',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#aaa',
    }),
  };

  const languageOptions = [
    {value: 'python', label: 'Python'},
    {value: 'javascript', label: 'javascript'},
    {value: 'cpp', label: 'cpp'},
    {value: 'c', label: 'c'},
    {value: 'java', label: 'java'},
  ]

  return (
    <>
      <Navbar />

      <div className="flex items-center mt-4 p-6 justify-between">
        <h1 className="text-3xl">Hi 👋,&nbsp; Suraj</h1>
        <button
          onClick={() => setClick(true)}
          className="bg-blue-600 rounded-lg p-3 transition-all hover:bg-blue-800"
        >
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

      {
        click && <div className="flex flex-col items-center justify-center h-screen w-screen fixed  left-0 top-0 bg-zinc-800">
          <div className="flex flex-col h-[45%] w-[35%] border-2">
              <h1 className="font-bold p-3 text-2xl " >Create Project</h1>
              <input type="text" className="p-3 m-3 bg-black text-white rounded-lg border-none " placeholder="Project Name" />
              <Select 
              className="m-3 border-none"
              placeholder="Select a Language"
              options={languageOptions}
              styles={customStyles}
            />
          </div>
        </div>
      }

    </>
  );
};

export default Home;
