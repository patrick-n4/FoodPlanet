import React from "react";
import TopNav from "../../Components/TopNav";
import Juice from "./../../IMAGES/Juice.jpg";
export default function MenuPage() {
  const btns = ["All", "Drink", "Starter", "Appetizer", "Dessert", "Main"];
  const menuItems = ["Appetizer", "Starter", "Main", "Dessert", "Drink"];
  const menuLists = [
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },

    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    ,
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    },
    {
      img: Juice,
      description: "Tom Yummy's Gin, Grenadine, Citrus & Ginger",
      amount: 4000
    }
  ];
  return (
    <div className="flex flex-col w-[80%] h-[100%]">
      <TopNav title="MenuPage" />
      <div className="flex flex-row h-full ml-[2em] gap-2">
        <div className="w-[75%] h-full">
          <div className="flex flex-col gap-3 sticky top-0 bg-white">
            <div className="flex items-center gap-3">
              {btns.map((data, index) => {
                return (
                  <button
                    className="hover:bg-[#F39401]  hover:text-white text-[#F39401] rounded-md px-[1.5em] text-[1em] py-[0.5em] border border-[#F39401] focus:bg-[#F39401] focus:text-white"
                    key={index}
                  >
                    {data}
                  </button>
                );
              })}
            </div>
            <div>
              <span className="font-bold text-[1.3em] opacity-60">
                {menuLists.length} values
              </span>
            </div>
          </div>
            <div className="flex h-[100%] pl-[2em] gap-4 mt-[2em] overflow-auto">
              <div className="w-[100%] flex flex-col gap-[2em]">
                {menuLists.map((data, index) => {
                  return (
                    <div
                      className="flex flex-row h-[7%] w-[97%] bg-white shadow-lg rounded-md gap-3 items-center"
                      key={index}
                    >
                      <div className="w-[12%] h-[90%] ">
                        <img
                          src={data.img}
                          className="w-[80%] h-[100%] rounded-lg"
                        />
                      </div>
                      <div className="w-[70%] h-[90%] text-[1.3em] flex items-center font-bold ">
                        {data.description}
                      </div>
                      <div className="w-[18%] h-[90%] flex items-center text-[1.5em] font-bold">
                        {data.amount} RWF
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
        </div>
        <div className="w-[25%] flex flex-col gap-[1em] bg-white shadow-2xl h-[25%] p-2 rounded-md sticky top-0">
          <div className="font-bold text-[1.4em] flex justify-center">
            New Menu Item
          </div>
          <div className="h-[40vh] w-full flex flex-col gap-[2.3em] p-2">
            {menuItems.map((data, item) => {
              return (
                <div className="flex flex-row justify-between">
                  <span className="flex w-[50%] items-center">
                    <input type="radio" className="w-[1.3em] h-[2em]" />
                    <span className="text-[1.2em] font-bold ml-4  ">
                      {data}
                    </span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined border">
                      add
                    </span>
                    <span className="text-[1.3em] font-bold text-[#F39401]">
                      New
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

