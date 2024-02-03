import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-6 py-2 flex justify-between items-center">
      <Link href='/' className="flex items-center gap-1 flex-1  ">
        {/* logo */}
        <div className="bg-blue-500 px-1 rounded  text-white">
          <i className="fa-solid fa-gear"></i>
        </div>
        <h1 className="text-base font-bold">ZinTools</h1>
      </Link>
      <div className="w-[45%] relative">
        {/*  search */}
        <input
          type="text"
          placeholder="Search for Movies,TV Shows,Theme & Cast"
          className="w-full border-none outline-none bg-gray-100 rounded-3xl px-4 py-2"
        />
        <i className="fa-solid fa-magnifying-glass absolute right-4 cursor-pointer bottom-3"></i>
      </div>
      <div className="flex gap-4 flex-1 justify-end items-center ">
        {/* login signup */}
        <button className="font-medium">Log in</button>
        <button className="rounded-3xl bg-blue-600 px-4 py-2 text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
