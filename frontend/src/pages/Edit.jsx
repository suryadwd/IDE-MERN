import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Editor from "@monaco-editor/react";

const Edit = () => {

  const [code, setCode] = useState("")

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between h-[680px] w-[100%]">
        <div className="h-[100%] w-[50%]">
          <Editor
            onChange={e => setCode(e.target.value)}
            value={code}
            language="javascript"
            theme="vs-dark"
          />
        </div>

        <div className="h-[100%] w-[50%] bg-[#27272a] ">
          <div className="flex justify-between border-b-2 border-zinc-900">
          <h1 className="font-bold p-3 ">Output:</h1>
          <button className="  font-semibold bg-blue-600 transition-all hover:bg-blue-700 rounded-lg h-11 w-11 m-1">Run</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Edit;
