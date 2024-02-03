'use client'
import { useState, useRef } from "react";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
  {
    icon:"fa-solid fa-file-word",
    title: "PDF to Word",
    desc: "use the best online tool to edit pdfs in your browser.",
      bgcolor:'#6b93f8'  
},
  {
    icon: "fa-solid fa-file-powerpoint",
    title: "PDF to PPT",
    desc: "Crop PDF online to a selected area,adjust margin size...",
 bgcolor:'#e18b66'  
},
  {
    icon: "fa-solid fa-text-height",
    title: "PDF to Excel",
    desc: "the easiest way to replace text online",
    bgcolor:'#6bb675'  
},
  {
    icon: "fa-solid fa-file-image",
    title: "PDF to JPG",
    desc: "Rotate and save your PDF page online for free",
     bgcolor:'#72bba9'  
},
  {
    icon:"fa-solid fa-file-lines",
    title: "PDF to TXT",
    desc: "Crop PDF online to a selected area,adjust margin size...",
     bgcolor:'#D27F30'  
},
  {
    icon: "fa-solid fa-text-height",
    title: "PDF to Excel",
    desc: "the easiest way to replace text online",
    bgcolor:'#6bb675'  
},
  {
    icon: "fa-solid fa-file-powerpoint",
    title: "PDF to PPT",
    desc: "Rotate and save your PDF page online for free",
    bgcolor:'#e18b66'  
},
];

const MultiCarousel = () => {
  const [bookmark, setBookmark] = useState([]);
  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const bookmarkHandler = (id) => {
    const index = bookmark.findIndex((item) => item === id);
    if (index !== -1) {
      const updatedBookmark = [
        ...bookmark.slice(0, index),
        ...bookmark.slice(index + 1),
      ];
      setBookmark(updatedBookmark);
    } else {
      const updatedBookmark = [...bookmark, id];
      setBookmark(updatedBookmark);
    }
  };

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <div className="w-[85%]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold capitalize py-4">Convert from PDF</h1>
        <Link href={"/allpdf"}>
          <button className="bg-gray-100 rounded-3xl px-6 py-2 text-gray-500 text-xs flex items-center gap-2">
            ALL <i className="text-[12px] fa-solid fa-chevron-right"></i>{" "}
          </button>
        </Link>
      </div>
      <Carousel
        ref={carouselRef}
        responsive={responsive}
      >
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="ring-1 ring-gray-200  relative duration-500 transition-all hoverShadow m-1 group w-[95%] rounded-md h-[10rem] p-4 "
            >
              <span
                onClick={() => bookmarkHandler(index)}
                className="hidden group-hover:block absolute right-3 cursor-pointer"
              >
                {bookmark?.find((id) => id === index) ? (
                  <i className="fa-solid fa-bookmark"></i>
                ) : (
                  <i className="fa-regular fa-bookmark"></i>
                )}
              </span>

              <i
                className={item.icon}
                style={{ padding: "0.3rem", fontSize: "2rem", color: item?.bgcolor }}
              ></i>
              <h1 className="text-base font-bold py-2">{item.title}</h1>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          );
        })}
      </Carousel>
      <div className=" absolute bottom-16 left-[5%] w-[82%] flex justify-between">
        <button onClick={prevSlide} className="border rounded-full h-[2rem] w-[2rem]"><i className="text-gray-500 fa-solid fa-arrow-left"></i></button>
        <button onClick={nextSlide} className="border rounded-full h-[2rem] w-[2rem]"><i className="text-gray-500 fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default MultiCarousel;
