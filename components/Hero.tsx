import {motion} from 'framer-motion';
import Link from 'next/link';
import Lottie from "lottie-react";
import hero from "../public/hero.json";
import { textVariant, zoomIn } from '@/utils/motion';
import { useSupabase} from '../utils/supabase-provider';

const Feature: React.FC = () => {
  const { supabase } = useSupabase();

 return (
  <div
  className='md:flex py-32 md:py-48 md:px-20 space-y-8'>
  <div
  className='space-y-6 md:w-11/12'>
  <motion.h1
  variants={textVariant(3)}
  initial="hidden"
  whileInView="show"
  className='text-sky-950 text-4xl md:text-7xl text-center md:text-left font-extrabold'>
  Ace Your JAMB!
  </motion.h1>
  <motion.p
  variants={textVariant(4)}
  initial="hidden"
  whileInView="show"
  className='text-sky-900 text-lg md:text-2xl text-center md:text-left mx-auto md:m-0 w-4/5 py-2 font-medium leading-6'>
   Practice your JAMB Computer Based Test, and put yourself ahead the game.
   With a wide range of 17 subjects available, Prepare effectively for your exams by accessing a comprehensive collection of over 20,000 past questions.
  </motion.p>
  <Link href="/" className='grid md:flex space-x-auto md:space-x-6 space-y-3 md:space-y-0 md:mx-0 md:my-6'>
  <motion.button
  variants={zoomIn(5, 1)}
  initial="hidden"
  whileInView="show"
  className='bg-[#344FC8] hover:bg-[#2a345f] w-4/5 md:w-1/2 mx-auto md:m-0  p-3 rounded-sm font-sans text-base text-white'
  onClick={() => supabase.auth.signInWithOAuth({
    provider: 'google'
  }) }
  >Get Started</motion.button>
  </Link>
  </div>
  <Lottie className='mx-auto w-2/3 md:w-2/5' animationData={hero} />
  </div>
 );
};

export default Feature;
