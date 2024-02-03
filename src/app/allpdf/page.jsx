'use client'
import Link from "next/link";
import React, { useState } from "react";

const Allpdf = () => {
    const [bookmark,setBookmark]=useState([])
  const data = [
    {
      icon: "fa-regular fa-file-pdf",
      title: "PDF to Word",
      desc: "use the best online tool to edit pdfs in your browser.",
    },
    {
      icon: "fa-solid fa-crop",
      title: "PDF to PPT",
      desc: "Crop PDF online to a selected area,adjust margin size...",
    },
    {
      icon: "fa-solid fa-text-height",
      title: "PDF to Excell",
      desc: "the easiest way to replace text online",
    },
    {
      icon: "fa-regular fa-file-pdf",
      title: "PDF to JPG",
      desc: "Rotate and save your PDF page online for free",
    },
    {
      icon: "fa-solid fa-crop",
      title: "PDP to TXT",
      desc: "Crop PDF online to a selected area,adjust margin size...",
    },
    {
      icon: "fa-solid fa-text-height",
      title: "PDF to Excell",
      desc: "the easiest way to replace text online",
    },
    {
      icon: "fa-regular fa-file-pdf",
      title: "PDF to PPT",
      desc: "Rotate and save your PDF page online for free",
    },
  ];
  const bookmarkHandler = (id) => {
    const index = bookmark.findIndex((item) => item === id);
    if (index !== -1) {
        const updatedBookmark = [...bookmark.slice(0, index), ...bookmark.slice(index + 1)];
        setBookmark(updatedBookmark);
    } else {
        // If the id doesn't exist in the bookmark array, add it
        const updatedBookmark = [...bookmark, id];
        setBookmark(updatedBookmark);
    }
}

  return (
    <div className="px-7 py-4 ">
      <Link href="/" className="text-sm ">
        <i className="text-xs mr-1 fa-solid fa-backward"></i>back  
      </Link>
      <div className="flex  w-full justify-between flex-wrap mt-3 gap-2">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="ring-1 ring-gray-200  relative group w-[32%] rounded-md h-[10rem] p-4 "
            >
                <span 
                onClick={()=>bookmarkHandler(index)} 
                className="hidden group-hover:block absolute right-3 cursor-pointer">
             {bookmark?.find((id)=>id===index)?<i className="fa-solid fa-bookmark"></i>: <i className="fa-regular fa-bookmark"></i>}

                </span>
              <i
                className={item.icon}
                style={{ padding: "0.3rem", fontSize: "2rem", color: "orange" }}
              ></i>
              <h1 className="text-base font-bold py-2">{item.title}</h1>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allpdf;
