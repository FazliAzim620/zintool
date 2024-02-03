import React from "react";

const Menu = () => {
  const data = [
    {
      name: "Stock Video",
      child: ["Stock Footage", "Motion Graphics", " All Stock Video"],
    },
    {
      name: "Video Templates",
      child: [
        "After Effects",
        " Premiere Pro",
        " Apple Motion",
        "Final Cut Pro",
        " DaVinci Resolve",
      ],
    },
    { name: "Music", child: ["Royalty Free Music", " Logos & Idents"] },
    {
      name: "Sound Effects",
      child: [
        " Game Sounds",
        "Transitions & Movement",
        "Domestic Sounds",
        "Human Sounds",
        "Urban Sounds",
        "Nature Sounds",
      ],
      id:'sound_effects'
    },
    {
      name: "Graphic Templates",
      child: [
        " Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe InDesign",
        "Adobe XD",
        "Figma",
        "Sketch",
      ],
    },
    {
      name: "Graphics",
      child: [
        "Backgrounds",
        "Textures",
        "Social",
        "Patterns",
        "Icons",
        "Objects",
      ],
    },
    {
      name: "Presentation Templates",
      child: [
        "Keynote",
        "PowerPoint",
        "Google Slides",
        "All Presentation Templates",
      ],
    },
    { name: "Photos", child: [] },
    {
      name: "Fonts",
      child: ["Serif", " Sans-Serif", "Script and Handwritten", "Decorative"],
    },
    { name: "Add-ons", child: [] },
    { name: "More", child: [] },
  ];

  return (
    <div className="px-8 py-2 flex justify-between items-center shadow">
      <ul className="flex justify-between items-center w-[92%]">
        {data.map((item, index) => {
          return (
            <li key={index} className="relative group cursor-pointer">
              <span className="capitalize text-xs">{item.name}</span>
              {item.child.length > 0 && (
                <ul className={`absolute hidden group-hover:block ${item?.id?'w-[450px]':'w-[200px]'} bg-white shadow mt-0  py-5 rounded`}>
                  {item.child.map((childItem, childIndex) => (
                    <div className="flex ">
                    <li
                      key={childIndex}
                      className={`text-sm py-2 ${item?.id?'w-1/2':'w-auto'} hover:bg-gray-50 px-6 `}
                    >
                      {childItem}
                    </li>
                   {item?.id&& <li
                      key={childIndex}
                      className="text-sm py-2  hover:bg-gray-50 px-6 "
                    >
                      {childItem}
                    </li>}
                    </div>
                 
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
