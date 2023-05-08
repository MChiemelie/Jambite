import Image from "next/image";
import Link from "next/link";

interface Props {
  description: string;
  subjects: string[];
  date: string;
}

const Feature: React.FC<Props> = ({description, subjects, date }) => {
  return (<>
    <div className="flex flex-col h-screen border-black max-w-7xl mx-auto overflow-hidden ">
      <p
      className="text-center text-2xl">{description}</p>
      <div
      className="text-center text-base">
        {subjects.map((subject, index) => (
          <span
          className="p-2" key={index}>{subject}</span>
        ))}
      </div>
      <p>{date}</p>
    </div>
  </>
  );
};

export default Feature;
