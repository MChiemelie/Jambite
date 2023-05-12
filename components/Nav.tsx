'use client';

import React from "react";
import Image from "next/image";
import menu from "../public/menu.png";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <div 
    className="flex justify-between">
      <div className="text-2xl md:text-4xl font-extrabold p-6 md:p-8 px-6">
        <span className="bg-clip-text text-transparent bg-indigo-900">
          JamBite
        </span>
        <nav>
          <ul>
            <li><Link href='#About'></Link></li>
            <li><Link href='#Subjects'></Link></li>
            <li><Link href='#About'></Link></li>
          </ul>
        </nav>
      </div>
      <Image src={menu} alt='menu' height={100} width={100}
      className="w-8 md:h-8 h-6 m-6 md:mx-12" />
    </div>
  )
};

export default Nav;
