import {motion} from 'framer-motion';
import Link from 'next/link';
import Lottie from "lottie-react";
import hero from "../public/hero.json";
import { textVariant } from '@/utils/motion';

const Feature: React.FC = () => {
 return (
  <div
  className='md:flex py-16 md:py-36'>
  <div
  className='md:px-14 py-8 space-y-4'>
  <motion.h1
  variants={textVariant(2)}
  initial="hidden"
  whileInView="show"
  className='text-sky-950 text-4xl md:text-7xl text-center md:text-left font-extrabold'>
  Ace Your JAMB!
  </motion.h1>
  <motion.p
  variants={textVariant(3)}
  initial="hidden"
  whileInView="show"
  className='text-sky-900 text-lg md:text-2xl text-center md:text-left mx-auto md:m-0 w-4/5 py-1 font-medium leading-6'>
   Practice your JAMB Computer Based Test, and put yourself ahead the game.
   With a wide range of 17 subjects available, Prepare effectively for your exams by accessing a comprehensive collection of over 20,000 past questions.
  </motion.p>
  <Link href="/dashboard">
   <div
   className='grid md:flex space-x-auto md:space-x-6 space-y-3 md:space-y-0 md:mx-0 m-4 md:my-6 '>
  <button
  className='bg-sky-600 hover:bg-sky-800 hover:scale-90 w-4/5 m-auto md:m-0 md:w-1/3 p-3 rounded-sm font-sans text-base'
  >Get Started</button>
   </div>
  </Link>
  </div>
  <Lottie className='m-auto w-4/5 md:w-5/6 md:mx-auto' animationData={hero} />
  </div>
  
 );
};

export default Feature;
