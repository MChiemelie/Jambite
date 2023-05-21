import React from "react";
import Image from "next/image";

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8">
  {testimonials.map((testimonial) => (
    <figure
      key={testimonial.id}
      className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800"
    >
      <Image
        className="w-36 h-36 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={`${testimonial.image}`}
        alt={testimonial.name}
        width={384}
        height={512}
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            {testimonial.testimonial}
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            {testimonial.name}
          </div>
        </figcaption>
      </div>
    </figure>
  ))}
</div>

  );
};

export default Testimonial;