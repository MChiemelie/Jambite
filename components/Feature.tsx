interface Props {
  heading: string;
  description: string[]  | string;
}

const Feature: React.FC<Props> = ({ heading, description }) => {
  const lastDescription = Array.isArray(description) ? description[description.length - 1] : description;

  return (
    <div className="flex flex-col max-w-7xl mx-auto overflow-hidden">
      <p className="text-center text-4xl font-sans font-medium m-6">{heading}</p>
      <div className="text-center text-xl font-normal w-full flex flex-wrap justify-center">
        {Array.isArray(description) ? (
          description.map((desc, index) => (
            <span className="p-1 font-medium" key={index}>
              {index === description.length - 1 ? `and ${desc}.` : `${desc},`}
            </span>
          ))
        ) : (
          <span className="p-1 font-medium">{description}</span>
        )}
      </div>
    </div>
  );
};

export default Feature;
