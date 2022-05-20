import React from "react";

export default function Footer({logo}) {
  return <div className="bg-[#FF8C1A] h-[60vh] w-[100%] flex flex-row justify-evenly items-center">
    <div className="bg-red-400 h-[70%] w-[20%]">
      <img src={logo} alt="" />
    </div>
    <div className="bg-red-400 h-[70%] w-[20%]"></div>
    <div className="bg-red-400 h-[70%] w-[20%]"></div>
    <div className="bg-red-400 h-[70%] w-[20%]"></div>
  </div>;
}
