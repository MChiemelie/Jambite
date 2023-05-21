import React from "react";
import Lottie from "lottie-react";

interface Props {
  heading: string;
  description: string | string[];
  subjects?: string[];
  image: any;
}

const Feature: React.FC<Props> = ({ heading, description, subjects, image }) => {
  const lastDescription = Array.isArray(description)
    ? description[description.length - 1]
    : description;

  const renderSubjects = () => {
    if (Array.isArray(subjects)) {
      return subjects.map((subject, index) => (
        <span key={index}>
          {index === subjects.length - 1 ? `and ${subject}.` : `${subject},`}
        </span>
      ));
    }

    return null;
  };

  return (
    <div className="max-w-7xl mx-auto overflow-hidden space-y-16">
      <h1 className="text-center text-3xl font-bold m-auto text-sky-950">
        {heading}
      </h1>
      <div className="grid md:flex space-y-4">
        <Lottie animationData={image} className="w-4/5 mx-auto"></Lottie>
        <p className="text-sky-900 text-lg md:text-2xl text-center md:text-left m-auto md:m-0 w-4/5 py-4 font-medium leading-10">
          {lastDescription}
        </p>
        <div className="text-sky-900 text-lg md:text-2xl text-center md:text-left m-auto md:m-0 gap-2 w-4/5 py-4 font-medium leading-8 flex flex-wrap justify-center">
          {renderSubjects()}
        </div>
      </div>
    </div>
  );
};

export default Feature;
