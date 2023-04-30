import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import jamb from '../public/jamb.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Image
       src={jamb} alt='jamb' width={100} height={100}
       className='p-2 m-2 rounded'/>
       <h1
       className='
       m-4 p-4 md:my-16
       font-extrabold font-Söhne text-center text-4xl 
       md:text-7xl md:font-extrabold sm:font-extrabold leading-9 tracking-wider'
       >
       Ace Your JAMB!
       </h1>
       <p
       className='m-2 p-2 mx-14 sm:mx-6
       font-md font-Söhne 
       text-center text-lg leading-7 tracking-wider sm:leading-7 sm:tracking-wider'
       >
        Are you preparing for the JAMB Computer-Based Test? Look no further than Jambite! Our website provides free study materials and resources to help you succeed on exam day. From practice questions to online mock exams, we&apos;ve got everything you need to ace the JAMB CBT. Sign up today and start your journey towards academic success!
       </p>
       <Link href="/dashboard"
       className='flex items-center'>
       <button
       className='bg-emerald-900 p-4 m-4 align-middle rounded mx-auto'
       >Get Started</button>
       </Link>
    </>
  )
}
