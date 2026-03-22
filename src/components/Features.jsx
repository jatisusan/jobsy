import { features } from "../constants";

const Features = () => {
  return (
    <section className="bg-white p-10 my-32 rounded-xl flex flex-wrap gap-16 lg:gap-28 justify-center">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center w-64"
        >
          <div className="w-16 h-16 mb-4 p-4 border-2 border-primary-200 rounded-full flex items-center justify-center">
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="font-bebas-neue text-3xl">{feature.title}</h4>
          <p className="text-center text-text-muted">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
