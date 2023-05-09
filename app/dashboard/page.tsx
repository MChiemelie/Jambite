import Link from 'next/link';
import React from 'react'

export default function Page() {
  const routes = [
    'English', 'Mathematics', 'Commerce', 'Accounting', 'Biology',
    'Physics', 'Chemistry', 'English literature', 'Government',
    'Christian Religious Knowledge', 'Geography', 'Economics', 'Islamic Religious Knowledge',
    'Civic Education', 'Insurance', 'Current Affairs', 'History'
  ];

  return (
   <div className='2xl:m-4'>
   <h1
     className='text-bold text-2xl text-center m-6'
     >Subjects</h1>
    <div className='flex flex-wrap justify-center'>
      {routes.map((route, index) => (
        <div key={index}>
          <Link href={`/dashboard/${route.toLowerCase().replace(' ', '-')}`}>
            <button className='bg-emerald-900 p-2 m-2 rounded'>{route}</button>
          </Link>
        </div>
      ))}
    </div>
   </div>
  );
}