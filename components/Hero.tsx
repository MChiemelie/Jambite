import Image from 'next/image';
import hero from '../public/hero.svg'
import Link from 'next/link';

const Feature: React.FC = () => {

 return (
  <div
  className='md:flex md:py-8'>
  <div
  className='md:p-20 md:space-y-8'>
  <h1
  className='text-sky-950 text-4xl sm:xl md:text-7xl text-center md:text-left font-extrabold font-sans'>
  Ace Your JAMB!
  </h1>
  <p
  className='text-sky-900 font-sans text-md md:text-xl text-center md:text-left m-auto md:m-0 w-4/5'>
   Practice your JAMB Computer Based Test, and put yourself ahead the game.
   With a wide range of 17 subjects available, Prepare effectively for your exams by accessing a comprehensive collection of over 20,000 past questions.
  </p>
  <Link href="/dashboard">
   <div
   className='md:space-x-10 space-y-3 md:m-0 m-4 md:my-6 grid md:flex'>
  <button
  className='bg-sky-600 w-4/5 m-auto md:m-0 md:w-1/3 p-2 rounded-sm font-sans text-base'
  >Get Started</button>
   <button
  className='bg-indigo-600 w-4/5 m-auto md:m-0 md:w-1/3 p-2 rounded-sm font-sans text-base'
  >Contact Us</button>
   </div>
  </Link>
  </div>
  <Image src={hero} alt='hero' width={100} height={100}
  className='m-auto w-3/5 md:w-1/4 md:mx-16'/>
  </div>
  
 );
};

export default Feature;
