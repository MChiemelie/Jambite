'use client';

import React from "react";
import Image from "next/image";
import menu from "../public/menu.png";

const Nav: React.FC = () => {
  return (
    <div 
    className="flex justify-between">
      <div className="text-3xl md:text-4xl font-extrabold p-4 px-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-500">
          JamBite
        </span>
      </div>
      <Image src={menu} alt='menu' height={100} width={100}
      className="w-8 h-8 m-5" />
    </div>
  )
};

export default Nav;
