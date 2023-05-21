'use client'


import Nav from "../components/Nav";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Join from "../components/Join";
import Footer from "../components/Footer";

import learn from "../public/learn.json";
import review from "../public/review.json";
import test from "../public/test.json";
import exams from "../public/exams.json";

const featureData = [
  {
    heading: "Gain the CBT Experience!",
    description: "Jambite replicates the JAMB Computer Based Test experience with a realistic interface, question formats, and performance analytics.",
    image: learn,
  },
  {
    heading: "17 Subjects - We've got you covered!",
    description: "Our comprehensive platform offers extensive resources and practice materials for these subjects.",
    subjects: [
      'English', 'Mathematics', 'Commerce', 'Accounting', 'Biology',
      'Physics', 'Chemistry', 'English Literature', 'Government',
      'Christian Religious Knowledge', 'Geography', 'Economics', 'Islamic Religious Knowledge',
      'Civic Education', 'Insurance', 'Current Affairs', 'History'
    ],
    image: review,
  },
  {
    heading: "Leverage over 5,000 past questions.",
    description: "Gain a competitive edge and boost your performance with our extensive collection of over 5,000 past questions. Our comprehensive question bank equips you to excel in your exams.",
    image: test,
  },
  {
    heading: "Accurate Answers and Solutions",
    description: "Rest assured, our answers and solutions have undergone rigorous review by professionals and top tutors. We prioritize accuracy and quality to provide you with reliable guidance.",
    image: exams,
  }
];

const testimonials=[
  {
    id: 1,
    name: "John Doe",
    image: '/a1.jpg',
    score: 350,
    testimonial:
      "After multiple failed attempts at the JAMB exams, I was losing hope. But thanks to Jambite, I finally achieved a score of 350 and got admission into my dream university. Jambite truly made a difference in my life!",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: '/a2.jpg',
    score: 320,
    testimonial:
      "I couldn't believe it when I saw my JAMB score of 320. Jambite's comprehensive study materials and practice tests were instrumental in my success. I highly recommend Jambite to anyone aiming for a high score!",
  },
  {
    id: 3,
    name: "Jane Smith",
    image: '/a3.jpg',
    score: 320,
    testimonial:
      "I couldn't believe it when I saw my JAMB score of 320. Jambite's comprehensive study materials and practice tests were instrumental in my success. I highly recommend Jambite to anyone aiming for a high score!",
  },
  {
    id: 4,
    name: "Jane Smith",
    image: '/a4.jpg',
    score: 320,
    testimonial:
      "I couldn't believe it when I saw my JAMB score of 320. Jambite's comprehensive study materials and practice tests were instrumental in my success. I highly recommend Jambite to anyone aiming for a high score!",
  },
  {
    id: 5,
    name: "Jane Smith",
    image: '/a5.jpg',
    score: 320,
    testimonial:
      "I couldn't believe it when I saw my JAMB score of 320. Jambite's comprehensive study materials and practice tests were instrumental in my success. I highly recommend Jambite to anyone aiming for a high score!",
  },
  {
    id: 6,
    name: "Jane Smith",
    image: '/a6.jpg',
    score: 320,
    testimonial:
      "I couldn't believe it when I saw my JAMB score of 320. Jambite's comprehensive study materials and practice tests were instrumental in my success. I highly recommend Jambite to anyone aiming for a high score!",
  },
];

export default function Home() {
  return (
    <div className='sm:space-y-3 space-y-8'>
      <Nav />
      <Hero />
      {featureData.map((feature, index) => (
        <Feature 
          key={index} 
          heading={feature.heading} 
          description={feature.description} 
          subjects={feature.subjects} 
          image={feature.image} 
          />
      ))}
      <Testimonial testimonials={testimonials} />
      <Join/>
      <Footer />
    </div>
  );
}
