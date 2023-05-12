'use client';

import React from "react";
import Image from "next/image";
import menu from "../public/menu.png";

const Nav: React.FC = () => {
  return (
    <div 
    className="flex justify-between">
      <div className="text-2xl md:text-5xl font-extrabold p-4 px-6">
        <span className="bg-clip-text text-transparent bg-indigo-900">
          JamBite
        </span>
      </div>
      <Image src={menu} alt='menu' height={100} width={100}
      className="w-8 md:h-8 h-6 m-6 md:mx-12" />
    </div>
  )
};

export default Nav;
