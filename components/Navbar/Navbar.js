"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { BiSolidMessageAltDetail } from "react-icons/bi";

const Navbar = ({ className }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  let firstclass = `flex flex-col w-[16rem] bg-blue-950 h-lvh box-border ${className}`
  return (
    <header className={firstclass} >
      <div className="flex items-center m-4 justify-between">
        <div className="flex items-center gap-2">
          <span>
            <a href="#">
              <FaUserCircle />
            </a>
          </span>
          Hello,User
        </div>
        <div className="">
          <a href="">
            <FaBell />
          </a>
        </div>
      </div>
      <hr className="mb-3" />

      <div className="m-4">
        <div className="flex items-center justify-between">
          <span><BiSolidMessageAltDetail className="w-[25px] h-[25px]" /></span>
          <span className="mr-[2.4rem]">Disscussion Fourm</span>
          <span className="cursor-pointer" onClick={handleClick}>
            <FaAngleDown />
          </span>
        </div>
        {open && (
          <ul className="mt-2">
            <li className="flex items-center gap-1 pb-1">
              <span>
                <LuCircleDollarSign className="w-[25px] h-[25px]" />
              </span>
              <a href="">Market Stories</a>
            </li>
            <li className="pl-6 pt-1 pb-1 hover:bg-slate-400"><a href="">Sentiment</a></li>
            <li className="pl-6 pt-1 pb-1 hover:bg-slate-400"><a href="">Market</a></li>
            <li className="pl-6 pt-1 pb-1 hover:bg-slate-400"><a href="">Sector</a></li>
            <li className="pl-6 pt-1 pb-1 hover:bg-slate-400"><a href="">WatchList</a></li>
            <li className="pl-6 pt-1 pb-1 hover:bg-slate-400"><a href="">Events</a></li>
            <li className="pl-6 pt-1 pb-1 hover:bg-slate-400"><a href="">News/Interview</a></li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
