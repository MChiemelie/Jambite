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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="p-4 bg-white rounded-lg shadow">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={`${testimonial.image}`}
                alt={testimonial.name}
                width={48}
                height={48}
              />
            </div>
            <h3 className="ml-2 text-lg font-medium">{testimonial.name}</h3>
          </div>
          <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
          <p className="text-gray-600">Score: {testimonial.score}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;