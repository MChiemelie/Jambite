'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';

const Footer = () => {
 return (
   <motion.footer
   className="bg-gray-800 py-8"
   variants={footerVariants}
   initial="hidden"
   whileInView="show"
   >
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex justify-center space-x-6">
         <a href="#" className="text-gray-400 hover:text-gray-300">
           About Us
         </a>
         <a href="#" className="text-gray-400 hover:text-gray-300">
           Contact Us
         </a>
         <a href="#" className="text-gray-400 hover:text-gray-300">
           Terms of Service
         </a>
         <a href="#" className="text-gray-400 hover:text-gray-300">
           Privacy Policy
         </a>
       </div>
       <div className="mt-8 flex justify-center space-x-6">
         <a href="#" className="text-gray-400 hover:text-gray-300">
         <Image src='/instagram.png' width={30} height={30} alt='instagram'/>
         </a>
         <a href="#" className="text-gray-400 hover:text-gray-300">
         <Image src='/twitter.png' width={30} height={30} alt='twitter'/>
         </a>
         <a href="#" className="text-gray-400 hover:text-gray-300">
           <Image src='/facebook.png' width={30} height={30} alt='facebook'/>
         </a>
         <a href="#" className="text-gray-400 hover:text-gray-300">
           <Image src='/gmail.png' width={30} height={30} alt='gmail'/>
         </a>
       </div>
       <p className="mt-8 text-center text-gray-400 text-sm">
         &copy; {new Date().getFullYear()} Jambite. All rights reserved.
       </p>
     </div>
   </motion.footer>
 );
};

export default Footer;
