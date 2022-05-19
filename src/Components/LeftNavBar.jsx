import React from "react";
export default function TopNav({logo}) {
  return (
    <div className="w-[20%] h-[100vh] bg-black flex flex-col gap-3 sticky top-0 bottom-0">
      <img
        src={logo}
        alt="Logo Image"
        className="w-[15em] h-[15em] mx-auto my-3"
      />
      <div className="bg-black h-[100%] flex flex-col ">
        <div className="w-[100%] h-[7em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[2.5em] text-white pr-[1em]">
            grid_view
          </span>
          <div className="text-[1.8em] text-white">Overview</div>
        </div>
        <div className="w-[100%] h-[7em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[2.5em] text-white pr-[1em]">
            group
          </span>
          <div className="text-[1.8em] text-white">Clients</div>
        </div>
        <div className="w-[100%] h-[7em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[2.5em] text-white pr-[1em]">
            manage_accounts
          </span>
          <div className="text-[1.8em] text-white">Users</div>
        </div>
        <div className="w-[100%] h-[7em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[2.5em] text-white pr-[1em]">
            settings
          </span>
          <div className="text-[1.8em] text-white">Settings</div>
        </div>
        <div className="w-[100%] h-[7em] bg-[#000] flex flex-row  items-center pl-[2.5em]  hover:cursor-pointer hover:border-l-[0.4em] hover:bg-[#211C1C]">
          <span className="material-symbols-outlined text-[2.5em] text-white pr-[1em]">
            account_circle
          </span>
          <div className="text-[1.8em] text-white">My Account</div>
        </div>
      </div>
    </div>
  );
}
