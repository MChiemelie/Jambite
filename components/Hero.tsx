import Image from 'next/image';
import hero from '../public/discuss.svg'
import Link from 'next/link';

const Feature: React.FC = () => {

 return (
  <div
  className='md:flex py-16 md:py-36'>
  <div
  className='md:px-14 py-8 space-y-4'>
  <h1
  className='text-sky-950 text-5xl md:text-7xl text-center md:text-left font-extrabold'>
  Ace Your JAMB!
  </h1>
  <p
  className='text-sky-900 text-lg md:text-2xl text-center md:text-left m-auto md:m-0 w-4/5 py-4 font-medium leading-8'>
   Practice your JAMB Computer Based Test, and put yourself ahead the game.
   With a wide range of 17 subjects available, Prepare effectively for your exams by accessing a comprehensive collection of over 20,000 past questions.
  </p>
  <Link href="/dashboard">
   <div
   className='grid md:flex space-x-auto md:space-x-6 space-y-3 md:space-y-0 md:mx-0 m-4 md:my-6 '>
  <button
  className='bg-sky-600 hover:bg-sky-800 hover:scale-90 w-4/5 m-auto md:m-0 md:w-1/3 p-3 rounded-sm font-sans text-base'
  >Get Started</button>
   <button
  className='bg-indigo-600 hover:bg-indigo-800 hover:scale-90  w-4/5 m-auto md:m-0 md:w-1/3 p-3 rounded-sm font-sans text-base'
  >Contact Us</button>
   </div>
  </Link>
  </div>
  <Image src={hero} alt='hero' width={100} height={100}
  className='m-auto w-4/5 md:w-1/3 md:mx-16'/>
  </div>
  
 );
};

export default Feature;
