'use client'

import { useSupabase} from '../app/supabase-provider';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect} from 'react';

interface NavBarProps{}

const NavBar: React.FC<NavBarProps> = () => {
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
    <div>
      <nav className={`w-full fixed top-0 left-0 right-0 z-10 ${scroll ? ' bg-sky-400' : ''}`}>
      <div className={`justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ${scroll ? 'scale-y-80' : ''}`}>
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className={`text-2xl md:text-4xl text-sky-900 font-bold ${scroll ? 'text-xl' : ''}`}>Jambite</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className={`p-2 text-sky-700 rounded-md outline-none focus:border-gray-400 focus:border ${scroll ? 'w-8' : ''}`}
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image src="/menu.svg" width={30} height={30} alt="logo"
                      className="focus:border-none active:border-none"/>
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
              <ul className="h-screen md:h-auto items-center justify-center md:flex text-sky-900">
                <li className="pb-6 text-xl  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-sky-900  border-sky-900  hover:text-sky-100 md:hover:bg-transparent">
                  <Link href="/learn" onClick={() => setNavbar(!navbar)}>
                    Learn
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-sky-900  border-sky-900  hover:text-sky-100 md:hover:bg-transparent">
                  <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-sky-900  border-sky-900  hover:text-sky-100 md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li>
                  <div className='grid md:flex p-10 gap-4'>
                    <button
                    className='bg-sky-600 text-white hover:bg-sky-800 hover:scale-90 w-full m-auto md:m-0 p-3 rounded-3xl font-sans text-base'
                    onClick={() => supabase.auth.signInWithOAuth({
                      provider: 'google'
                    }) }>Sign Up With Google</button>
                    <button
                    className='bg-indigo-600 text-white hover:bg-indigo-800 hover:scale-90  w-full m-auto md:m-0 p-3 rounded-3xl font-sans text-base'>Sign In</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;