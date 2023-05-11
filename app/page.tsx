import Link from 'next/link';
import Nav  from "../components/Nav";
import Feature from "../components/Feature";

export default function Home() {
  return (
    <div
    className='bg-slate-800 space-y-4 bg:h-full'>
      <Nav  />
       <h1
       className='m-4 p-4 text-5xl sm:xl md:text-8xl text-center font-extrabold font-sans text-grey-200 text-zinc-50'>
       Ace Your JAMB!
       </h1>
       <p
       className='mx-4 md:mx-48 font-sans text-lg md:text-2xl text-center'
       >
        Practice your JAMB Computer Based Test, and put yourself ahead the game.
        With a wide range of 17 subjects available, Prepare effectively for your exams by accessing a comprehensive collection of over 20,000 past questions.
       </p>
       <Link href="/dashboard"
       className='flex'>
       <button
       className='bg-indigo-600 m-3 ml-auto p-3 rounded-sm font-sans text-lg'
       >Get Started</button>
        <button
       className='bg-teal-600 m-3 mr-auto p-3 rounded-sm font-sans text-lg'
       >Contact Us</button>
       </Link>
      <Feature
      heading="17 Subjects - We've got you covered!"
      description={['English', 'Mathematics', 'Commerce', 'Accounting', 'Biology',
                        'Physics', 'Chemistry', 'English Literature', 'Government', 
                        'Christian Religious Knowledge', 'Geography', 'Economics', 'Islamic Religious Knowledge',
                      'Civic Education', 'Insurance', 'Current Affairs', 'History']}
      />
      <Feature 
      heading='Leverage over 5,000 past questions.'
      description='Gain a competitive edge and boost your exam performance with our extensive collection of over 5,000 past questions. With our comprehensive question bank, you will be equipped with the knowledge and confidence to excel in your exams.'/>
    </div>
  )
}
