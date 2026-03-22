const Hero = () => {
  return (
    <section className="w-full">
      {/* The Strip */}
      <div className="absolute top-3 left-0 w-18 sm:w-24 h-[calc(100vh-1.5rem)] strip-gradient flex flex-col items-center pt-6 z-0">
        <div className="rotate-90 whitespace-nowrap text-white font-medium tracking-widest text-[16px] flex items-center gap-2">
          <div className="h-px w-16 bg-white"></div> No. 1 Jobseeker Platform
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto pl-25 sm:pl-40 relative min-h-[80vh]">
        <h1 className="font-bebas-neue text-[120px] md:text-[160px] lg:text-[180px] leading-[0.88] tracking-[-0.012em] [word-spacing:25px] uppercase">
          GET YOUR <br /> DREAM JOB
        </h1>

        <p className="text-lg text-text-secondary max-w-md my-4">
          Simplifying the job search experience. Connecting job seekers with
          opportunities.
        </p>

        <div className=" border-2 border-bg-inverted rounded-full py-4 pl-6 md:pr-12 pr-6 flex items-center gap-4 w-fit">
          <div className="flex items-center">
            <div className="border-2 rounded-full md:w-16 md:h-16 w-12 h-12  z-10">
              <img
                src="/avatar2.webp"
                alt=""
                className="w-full h-full object-center object-cover rounded-full"
              />
            </div>
            <div className="border-2 rounded-full md:w-16 md:h-16 w-12 h-12 -ml-4 z-5">
              <img
                src="/avatar1.webp"
                alt=""
                className="w-full h-full object-center object-cover rounded-full"
              />
            </div>
            <div className="border-2 rounded-full md:w-16 md:h-16 w-12 h-12 -ml-4 flex items-center justify-center bg-primary-200">
              +
            </div>
          </div>

          <div>
            <p className="font-bebas-neue text-4xl">50K+</p>
            <p>Satisfied Users</p>
          </div>
        </div>

        <div className="absolute bottom-0 max-xl:-right-20 right-14 z-10 max-md:hidden">
          <img
            src="/hero.png"
            alt=""
            className="w-[88%] sm:w-[92%] md:w-full max-w-105 lg:max-w-135 xl:max-w-152 h-auto object-contain"
          />
        </div>

        <div className="hero-line" />

        <div className="absolute top-4 right-4 max-md:hidden flex h-32 w-32 items-center justify-center rounded-full round-gradient">
          <span className="font-bebas-neue text-4xl font-bold text-white tracking-tighter drop-shadow-md">
            NO.1
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
