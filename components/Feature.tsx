'use client'

import Lottie from "lottie-react";

interface Props {
  heading: string;
  description: string
  subjects?: string[];
  image: string;
}

const Feature: React.FC<Props> = ({ heading, description, image, subjects }) => {
  const lastDescription = Array.isArray(description) ? description[description.length - 1] : description;

  return (
      <div className="max-w-7xl mx-auto overflow-hidden space-y-16">
      <h1 className="text-center text-3xl font-bold m-auto text-sky-950">{heading}</h1>
      <div className="grid md:flex space-y-4">
      <p className="text-sky-900 text-lg md:text-2xl text-center md:text-left m-auto md:m-0 w-4/5 py-4 font-medium leading-10">{description}</p>
        <div className="text-sky-900 text-lg md:text-2xl text-center md:text-left m-auto md:m-0 gap-2 w-4/5 py-4 font-medium leading-8 flex flex-wrap justify-center">
          {Array.isArray(subjects) ? (
            subjects.map((subject, index) => (
              <span key={index}>
                {index === subjects.length - 1 ? `and ${subject}.` : `${subject},`}
              </span>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feature;
