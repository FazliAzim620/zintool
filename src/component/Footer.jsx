import React from "react";
import FooterCard from "./FooterCard";

const Footer = () => {
  const items1 = ["Documentaries", "Themes", "Chrome casts"];
  const items2 = [
    " Download Chrome Browser",
    "Chrome Browser for Enterprise",
    "Chrome Browser Devices",
    "ChromeOS",
    "Google Cloud",
    "Google Workspace",
  ];
  const items3 = ["Documentaries", "Themes", "Chrome casts"];
  const items4 = [
    " Download Chrome Browser",
    "Chrome Browser for Enterprise",
    "Chrome Browser Devices",
    "ChromeOS",
    "Google Cloud",
    "Google Workspace",
  ];
  const items5 = ["Documentaries", "Themes", "Chrome casts"];
  const footeritem = [
    "Privacy Policy",
    "Terms and conditions",
    " Cookies Policy",
    "About us",
    "EULA",
    "Contact",
  ];

  return (
    <div className="bg-[#F1F3F4] w-full h-[90vh] mt-48 ">
      {/* ------------------------------- footer topbar */}
      <div className="border-b mx-8 py-6 flex items-center gap-6">
        <p className="font-semibold text-lg text-gray-600">Follow us</p>
        <i className="fa-brands text-xl text-gray-600 fa-youtube  duration-500 transition-all hoverShadow cursor-pointer hover:translate-x-1"></i>
        <i className="fa-brands text-xl text-gray-600 fa-twitter  duration-500 transition-all hoverShadow cursor-pointer hover:translate-x-1"></i>
        <i className="fa-brands text-xl text-gray-600 fa-facebook-f  duration-500 transition-all hoverShadow cursor-pointer hover:translate-x-1"></i>
      </div>
      {/* ------------------------------- footer topbar end */}
      <div className="border-b mx-8 mt-4 pb-6 flex  justify-start items-start ">
        <FooterCard title="Internal Links" items={items1} />
        <FooterCard title="Enterprise" items={items2} />
        <FooterCard title="Internal Links" items={items3} />
        <FooterCard title="Enterprise" items={items4} />
        <FooterCard title="Internal Links" items={items5} />
      </div>
      <div className="flex items-center justify-between mx-8 mt-10">
     <div className="flex items-center gap-8">
     <p className="font-bold text-xl">
          Similar{" "}
          <span className="bg-black duration-500 transition-all hoverShadow cursor-pointer hover:translate-x-2 rounded-xl text-white px-4 py-2">
            Watch
          </span>
        </p>
        <ul className="flex gap-6 text-gray-600 items-center ">
          {footeritem?.map((item, ind) => (
            <li key={ind} className="text-xs">{item}</li>
          ))}
        </ul>
     </div>
     <div>
        <button title="Change Theme" className="duration-500 transition-all hoverShadow bg-gray-300 w-10 flex justify-center items-center text-2xl text-gray-700 h-10 p-4 rounded-full">
        <i className="fa-regular fa-moon"></i>
        </button>
     </div>
      </div>
    </div>
  );
};

export default Footer;
