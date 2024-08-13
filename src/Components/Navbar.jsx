import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa6";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Update from "./Updates";

function Navbar() {
  const country = "IN";
  const [searchHovered, setSearchHovered] = useState(false);
  const [micHovered, setMicHovered] = useState(false);
  const [update, setUpdate] = useState(false);

  return (
    <div className="px-4 bg-black text-white flex justify-between sticky top-0">
      <div className="flex items-center">
        <button className="p-4">
          <FiMenu size={"1.5em"} />
        </button>
        <Link to={"/"} className="flex font-semibold p-4">
          <FaYoutube color="red" size={"1.5em"} />
          YouTube<sup className="text-gray-500 font-normal">{country}</sup>
        </Link>
      </div>
      <div className="flex items-center p-2">
        <form
          className="rounded-full border-gray-500 border h-full w-96 relative"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type={"text"}
            size={36}
            placeholder={"Search"}
            className="bg-transparent h-full absolute left-4 text-gray-500 focus:border-0 focus:outline-none"
          />
          <button
            className="bg-gray-800 h-full rounded-r-full px-5 absolute right-0"
            onMouseEnter={() => setSearchHovered(true)}
            onMouseLeave={() => setSearchHovered(false)}
          >
            <RiSearch2Line size={"1.5em"} />
          </button>
          {searchHovered && (
            <div
              className="absolute -bottom-10 -right-4 transform -translate-x-1/2 bg-gray-700 text-white text-sm py-1 px-2 rounded-md opacity-0 transition-opacity duration-300"
              style={{ opacity: searchHovered ? 1 : 0 }}
            >
              Search
            </div>
          )}
        </form>
        <div className="relative">
          <button
            className="ml-6 rounded-full bg-gray-800 p-2"
            onMouseEnter={() => setMicHovered(true)}
            onMouseLeave={() => setMicHovered(false)}
          >
            <FaMicrophone size={"1.5em"} />
          </button>
          {micHovered && (
            <div
              className="absolute -bottom-10 -right-32 transform -translate-x-1/2 bg-gray-700 text-white text-sm py-1 px-2 rounded-md opacity-0 transition-opacity duration-300"
              style={{ opacity: micHovered ? 1 : 0 }}
            >
              Search with your voice
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative p-2 rounded-full hover:bg-slate-800 ml-3">
          <RiVideoAddLine size={"1.5em"} />
        </div>
        <button className="relative p-2 rounded-full hover:bg-slate-800 ml-3" onClick={()=>{setUpdate(true)}}>
          <FaRegBell size={"1.5em"} />
        </button>
        <div className="relative rounded-full ml-3">
          <img
            alt="Avatar"
            src={`${process.env.PUBLIC_URL}/avatar.png`}
            className="w-[2em] h-[2em] rounded-full"
          />
        </div>
        {update && <Update setUpdate={setUpdate}/>}
      </div>
    </div>
  );
}

export default Navbar;
