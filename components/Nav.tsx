import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-4xl text-sky-900 font-bold">Jambite</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-sky-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-sky-900  border-sky-900  hover:text-sky-100 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-sky-900  border-sky-900  hover:text-sky-100 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-sky-900  border-sky-900  hover:text-sky-100 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
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