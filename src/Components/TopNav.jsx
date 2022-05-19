import React from "react";
export default function TopNav({title}) {
    return (
      <div className="w-[100] bg-inherit h-[10%] flex flex-row justify-between p-8 items-center">
            <h1 className="text-black font-bold text-[3em]">{title}</h1>
        <div className="w-[45%] h-[85%] bg-white flex flex-row items-center justify-between rounded-md">
          <div className="bg-[#ccc] flex items-center w-[50%] ml-2 rounded-[0.2em]">
            <input
              type="text"
              placeholder="Search..."
              className="w-[80%]  text-[1.5em] outline-none ml-2 p-1 bg-[#ccc]"
              
            />
            <span className="material-symbols-outlined w-[10%] text-[2em] font-bold ">
              search
            </span>
          </div>
          <div>
            <span className="material-symbols-outlined text-black text-[2.5em]">
              notifications
            </span>
          </div>
          <div className="border-l-4 h-[4em] border-black  w-[35%] flex  flex-row items-center justify-between mr-[1em] bg-[#ccc] rounded-md">
            <span className="text-black text-[1.3em] ml-2 font-bold ">
              Giovani Coder
            </span>
            <span className="material-symbols-outlined text-black text-[3.5em]">
              account_circle
            </span>
          </div>
        </div>
      </div>
    );
}