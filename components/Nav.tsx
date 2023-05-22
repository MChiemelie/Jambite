'use client'

import { useSupabase} from '../utils/supabase-provider';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect} from 'react';
import { navVariants } from '../utils/motion';

const NavBar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { supabase } = useSupabase();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    });
    
  return (
      <motion.nav 
      className={`w-full fixed top-0 left-0 right-0 z-10 ${scroll ? 'backdrop-blur-3xl' : ''}`}
      variants={navVariants}
      initial="hidden"
      whileInView="show">
      <div className={`justify-between px-4 mx-auto md:items-center md:flex md:px-8 ${scroll ? '' : ''}`}>
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <Image src='/logo.png' alt='logo' width={80} height={80} className={`w-14 md:w-20 ${scroll ? 'w-8 md:w-14' : ''}`}/>
              </Link>
              <div className="md:hidden">
                <button
                  className={`p-2 text-sky-700 rounded-md outline-none focus:border-gray-400 focus:border ${scroll ? 'w-8' : ''}`}
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" className='w-6 md:w-8'/>
                  ) : (
                    <Image src="/menu.svg" width={30} height={30} alt="logo"
                      className="focus:border-none active:border-none w-6 md:w-8"/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`bg-sky-400 md:bg-inherit md:block ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-0 items-center justify-center md:flex text-sky-900">
                <li className={`font-medium text-xl md:text-2xl py-6 md:px-12 text-center border-b-2 md:border-b-0  border-sky-900  hover:text-sky-100 ${scroll ? 'md:text-lg' : ''}`}>
                  <Link href="/learn" onClick={() => setNavbar(!navbar)}>
                    Learn
                  </Link>
                </li>
                <li className={`font-medium text-xl md:text-2xl py-6 md:px-12 text-center border-b-2 md:border-b-0  border-sky-900  hover:text-sky-100 ${scroll ? 'md:text-lg' : ''}`}>
                  <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className={`font-medium text-xl md:text-2xl py-6 md:px-12 text-center border-b-2 md:border-b-0 border-sky-900  hover:text-sky-100 ${scroll ? 'md:text-lg' : ''}`}>
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li>
                    <button
                    className={`bg-[#344FC8] hover:bg-sky-900 hover:scale-110 w-full md:w-48 text-white my-10 p-3 rounded-3xl ${scroll ? 'scale-75 md:text-md' : ''}`}
                    onClick={() => supabase.auth.signInWithOAuth({
                      provider: 'google'
                    }) }>Login With Google</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>
  );
}

export default NavBar;