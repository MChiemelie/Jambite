import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useInView } from "react-intersection-observer";

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

  const { ref, inView } = useInView();
  const animation = fadeIn("down", "tween", 0, 0.5);

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
    <div className="max-w-7xl mx-auto overflow-hidden space-y-8">
      <motion.h1
        variants={fadeIn("up", "tween", 0, 0.5)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-center text-3xl font-bold m-auto text-sky-950"
        ref={ref}
      >
        {heading}
      </motion.h1>
      <div className="grid md:flex space-y-4">
        <motion.div
          variants={animation}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={ref}
        >
          <Lottie animationData={image} className="w-4/5 mx-auto"></Lottie>
        </motion.div>
        <motion.p
          className="text-sky-900 text-lg md:text-2xl text-center md:text-left m-auto md:m-0 w-4/5 font-medium leading-10"
          variants={fadeIn("left", "tween", 0, 0.5)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={ref}
        >
          {lastDescription}
        </motion.p>
        <div className="text-sky-900 text-lg md:text-2xl text-center md:text-left m-auto md:m-0 gap-2 w-4/5 py-4 font-medium leading-8 flex flex-wrap justify-center">
          {renderSubjects()}
        </div>
      </div>
    </div>
  );
};

export default Feature;
