import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const OurProcessSection = () => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="our-process" ref={ref} className="bg-primary/5 w-full">
      <div className="section-container section-padding section-flex">
        <div className="mb-10 text-left">
          <p className="section-badge">Our Process</p>
          <h1 className="section-title">Digitize Your Business</h1>
          <div className="section-description">
            By integrating digital tools and technologies, businesses can
            streamline operations, enhance customer experiences.
          </div>
        </div>

        <div className="bg-accent text-primary-content/90 divide-primary-content/20 grid w-full grid-cols-1 gap-6 divide-y rounded-2xl px-4 py-18 sm:grid-cols-2 sm:divide-x md:grid-cols-4 md:divide-y-0">
          <div className="text-center">
            <h3 className="text-7xl font-bold">
              {inView && <CountUp end={5} duration={3} separator="," />}K+
            </h3>
            <p className="text-primary-content mt-2">Business</p>
          </div>

          <div className="text-center">
            <h3 className="text-7xl font-bold">
              {inView && <CountUp end={90} duration={3} separator="," />}K
            </h3>
            <p className="text-primary-content mt-2">Happy Customer</p>
          </div>

          <div className="text-center">
            <h3 className="text-7xl font-bold">
              {inView && <CountUp end={4.9} duration={3} decimals={1} />}+
            </h3>
            <p className="text-primary-content mt-2">Time Service</p>
          </div>

          <div className="text-center">
            <h3 className="text-7xl font-bold">
              {inView && <CountUp end={8} duration={3} separator="," />}K+
            </h3>
            <p className="text-primary-content mt-2">Team Value</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
