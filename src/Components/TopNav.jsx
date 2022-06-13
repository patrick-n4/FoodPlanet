import { Circle } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function TopNav({ title, user }) {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user) navigate("/login")
  },[])
  return (
    <div className="w-[100] bg-inherit h-[5 %] flex flex-row justify-between p-8 items-center">
      <h1 className="text-black font-bold text-[2.5em]">{title}</h1>
      <div className="w-[45%] h-[85%] bg-white flex flex-row items-center justify-between rounded-md">
        <div className="flex items-center w-[50%] ml-2 rounded-[0.2em] border">
          <input
            type="text"
            placeholder="Search..."
            className="w-[80%]  text-[1em] outline-none ml-2 p-1"
          />
          <span className="material-symbols-outlined w-[10%] text-[1.5em] font-bold opacity-[50%]">
            search
          </span>
        </div>
        <div>
          <span className="material-symbols-outlined text-black text-[1.5em]">
            notifications
          </span>
        </div>
        <div className="w-[35%] flex  flex-row items-center justify-between mr-[1em]  rounded-md shadow-xl">
          <div className="text-black px-5 h-[4rem] gap-2 flex items-center text-[1.2em] justify-center  font-bold ">
            <span className="truncate">{user?.firstName}</span>
            <Circle style={user?.status === "ACTIVE" ? {color: "green"} : {color: "gray"}} sx={{width: 15, height: 15}}/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
