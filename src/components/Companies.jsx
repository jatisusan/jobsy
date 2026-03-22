import { Link } from "react-router";

const Companies = () => {
  return (
    <section className="mt-8 mb-28 flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex-1 flex justify-center items-center relative">
        <img
          src="/companies.png"
          alt=""
          className="w-[75%] h-auto object-contain"
        />

        <img src="/map.webp" alt="" className="absolute top-10 left-0" />
      </div>

      <div className="flex-1 mt-10 md:mt-0">
        <span className="border-2 border-accent-200 rounded-3xl px-4 py-2 text-sm text-accent-200 font-medium uppercase">
          Why choose us
        </span>
        <h2 className="font-bebas-neue text-4xl my-6">
          Trusted by top companies
        </h2>
        <p className="text-text-muted mb-6">
          We partner with leading companies to bring you the best job
          opportunities. Join our community and get access to exclusive job
          listings from top employers. Our platform is designed to connect you
          with the best companies in the industry, helping you find your dream
          job faster and easier.
        </p>

        <Link to="/jobs" className="btn-primary">
          Explore jobs
        </Link>
      </div>
    </section>
  );
};

export default Companies;
