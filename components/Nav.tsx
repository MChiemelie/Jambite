'use client';

import Image from 'next/image';
import Timer from "../components/Timer";
import account from '../public/account.png'
const Nav: React.FC = () => {
  return (
    <>
    <menu
    className='font-serif text-emerald-300 text-2xl
    p-4 bg-white flex justify-between'
    >
      <span>Jambite</span>
      <Timer />
      <Image
      src={account}
      height={50}
      width={50}
      alt='acc'
      />
    </menu>
    </>
  )
};

export default Nav;
