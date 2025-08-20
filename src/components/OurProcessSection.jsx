import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const OurProcessSection = () => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="container mx-auto flex flex-col px-6 py-16">
      <div className="mb-10 text-left">
        <h4 className="text-primary mb-2 tracking-wide uppercase">
          Our Process
        </h4>
        <h2 className="text-4xl leading-snug font-extrabold">
          Digitize Your Business
        </h2>
        <div className="mt-2 max-w-xl">
          By integrating digital tools and technologies, businesses can
          streamline operations, enhance customer experiences.
        </div>
      </div>

      <div className="grid w-full grid-cols-2 gap-6 rounded-2xl bg-teal-900 p-8 text-white/80 md:grid-cols-4">
        <div className="text-center">
          <h3 className="text-5xl font-bold">
            {inView && <CountUp end={50000} duration={3} separator="," />}+
          </h3>
          <p className="mt-2 text-gray-300">Business</p>
        </div>

        <div className="text-center">
          <h3 className="text-5xl font-bold">
            {inView && <CountUp end={90000} duration={3} separator="," />}K
          </h3>
          <p className="mt-2 text-gray-300">Happy Customer</p>
        </div>

        <div className="text-center">
          <h3 className="text-5xl font-bold">
            {inView && <CountUp end={4.9} duration={3} decimals={1} />}+
          </h3>
          <p className="mt-2 text-gray-300">Time Service</p>
        </div>

        <div className="text-center">
          <h3 className="text-5xl font-bold">
            {inView && <CountUp end={8000} duration={3} separator="," />}K+
          </h3>
          <p className="mt-2 text-gray-300">Team Value</p>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
