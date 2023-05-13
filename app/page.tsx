'use client'

import Nav  from "../components/Nav";
import Feature from "../components/Feature";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div
    className='sm:space-y-3 space-y-8'>
      <Nav />
      <Hero />
      <Feature
      heading="Gain the CBT Experience!"
      description='Jambite replicates the JAMB Computer Based Test experience with a realistic interface, question formats, and performance analytics.'
      image='study.svg'
      />
      <Feature
      heading="17 Subjects - We've got you covered!"
      description="Our comprehensive platform offers extensive resources and practice materials for these subjects."
      subjects={['English', 'Mathematics', 'Commerce', 'Accounting', 'Biology',
                        'Physics', 'Chemistry', 'English Literature', 'Government', 
                        'Christian Religious Knowledge', 'Geography', 'Economics', 'Islamic Religious Knowledge',
                      'Civic Education', 'Insurance', 'Current Affairs', 'History']}
      image='stats.svg'
      />
      <Feature 
      heading='Leverage over 5,000 past questions.'
      description='Gain competitive edge and boost your performance with our extensive collection of over 5,000 past questions. Our comprehensive question bank, equips you to excel in your exams.'
      image='questions.svg'
      />
      <Feature
      heading="Accurate Answers and Solutions"
      description='Be rest assured, answers and solutions have undergone rigorous review by professionals and top tutors. We prioritize accuracy and quality to provide you with reliable guidance.'
      image='review.svg'
      />
    </div>
  )
}
