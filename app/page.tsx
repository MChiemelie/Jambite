import Nav  from "../components/Nav";
import Feature from "../components/Feature";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div
    className='bg-gradient-to-r from-sky-300 to-sky-500 sm:space-y-3 space-y-8'>
      <Nav />
      <Hero />
      <Feature
      heading="17 Subjects - We've got you covered!"
      description={['English', 'Mathematics', 'Commerce', 'Accounting', 'Biology',
                        'Physics', 'Chemistry', 'English Literature', 'Government', 
                        'Christian Religious Knowledge', 'Geography', 'Economics', 'Islamic Religious Knowledge',
                      'Civic Education', 'Insurance', 'Current Affairs', 'History']}
      />
      <Feature 
      heading='Leverage over 5,000 past questions.'
      description='Gain a competitive edge and boost your exam performance with our extensive collection of over 5,000 past questions. Our comprehensive question bank, equips you with the knowledge and confidence to excel in your exams.'/>
      <Feature
      heading="Accurate Answers and Solutions"
      description=''
      />
    </div>
  )
}
