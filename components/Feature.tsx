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
  const animation = fadeIn("down", "tween", 0, 2);

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
    <div className="px-10 md:px-20 py-16 md:py-36 overflow-hidden space-y-8">
      <motion.h1
        variants={fadeIn("up", "tween", 0, 1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-center text-3xl md:text-5xl font-bold text-sky-950"
        ref={ref}
      >
        {heading}
      </motion.h1>
      <div className="p-0 grid md:flex space-y-4">
        <motion.div
          variants={animation}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={ref}
        >
          <Lottie animationData={image} className="w-4/5 md:w-96 md:h-96 mx-auto"></Lottie>
        </motion.div>
        <motion.p
          className="p-0 grid place-content-center text-sky-900 text-lg md:text-3xl text-center md:text-left m-auto md:w-2/5 font-medium leading-10 md:leading-9 md:tracking-wide"
          variants={fadeIn("left", "tween", 0, 3)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={ref}
        >
          {lastDescription}
          <div className="text-sky-900 text-lg text-justify md:text-lg gap-1 font-medium leading-8 flex flex-wrap py-2 md:leading-20 md:tracking-wide">
          {renderSubjects()}
        </div>
        </motion.p>
      </div>
    </div>
  );
};

export default Feature;
