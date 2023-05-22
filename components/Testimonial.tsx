import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useInView } from "react-intersection-observer";

interface TestimonialData {
  id: number;
  name: string;
  image: {} | null;
  score: number;
  testimonial: string;
}


interface Props {
 testimonials: TestimonialData[];
}

const Testimonial: React.FC<Props> = ({testimonials}) => {
  const { ref, inView } = useInView();
  const animation = fadeIn("down", "tween", 0, 0.5);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mx-8">
      {testimonials.map((testimonial) => (
        <motion.figure
          key={testimonial.id}
          variants={fadeIn("up", "spring", 0, 2)}
          initial="hidden"
          whileInView="show"
          className="md:flex bg-slate-100 rounded-md p-8 md:p-0 dark:bg-slate-800"
        >
          <Image
            className="w-24 md:w-48 md:h-auto md:rounded-sm rounded-full mx-auto"
            src={`${testimonial.image}`}
            alt={testimonial.name}
            width={384}
            height={512}
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-basej font-medium">
                {testimonial.testimonial}
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {testimonial.name}
              </div>
            </figcaption>
          </div>
        </motion.figure>
      ))}
    </div>
  );
};

export default Testimonial;