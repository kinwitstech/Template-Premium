import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Cpu, Zap } from "lucide-react";
import { Layout, Users, Rocket, Clock, Briefcase } from "lucide-react";

const features = [
  {
    icon: <Layout className="text-primary h-8 w-8" />,
    title: "Modern Templates",
  },
  {
    icon: <Users className="text-primary h-8 w-8" />,
    title: "Built for Teams",
  },
  {
    icon: <Rocket className="text-primary h-8 w-8" />,
    title: "Launch Faster",
  },
  {
    icon: <Clock className="text-primary h-8 w-8" />,
    title: "On-Time Delivery",
  },
  {
    icon: <Briefcase className="text-primary h-8 w-8" />,
    title: "Business Ready",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-primary/5 py-8">
      <div className="section-container px-4">
        <div className="grid grid-cols-1 items-center gap-6 text-center sm:grid-cols-2 md:grid-cols-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex-center group border-base-content/10 flex-col px-4 last:border-r-0 lg:border-r"
            >
              <span className="group-hover:animate-flip-once">
                {feature.icon}
              </span>
              <p className="mt-2 text-lg font-medium">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function AboutUsSection() {
  const navigate = useNavigate();

  return (
    <>
      <FeatureSection />
      <section id="about-us" className="w-full">
        <div className="section-container section-padding section-grid max-w-7xl">
          <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
              alt="About Us"
              className="h-full object-cover"
            />
          </div>

          <div className="text-left">
            <p className="section-badge">About Us</p>
            <h1 className="section-title">
              Empowering Startups <br /> With Cutting-Edge Solutions
            </h1>

            <div className="space-y-6 pt-4">
              <div className="group mb-8 flex items-start space-x-4">
                <span className="group-hover:animate-flip-once mt-1 mr-6 block h-12 w-12 flex-shrink-0">
                  <Cpu className="text-primary h-full w-full" />
                </span>
                <div>
                  <h4 className="mb-4">Innovative Technology</h4>
                  <div>
                    We leverage the latest technologies to create scalable,
                    adaptable products that give startups a competitive edge in
                    the market.
                  </div>
                </div>
              </div>

              <div className="group flex items-start space-x-4">
                <span className="group-hover:animate-flip-once mt-1 mr-6 block h-12 w-12 flex-shrink-0">
                  <Zap className="text-primary h-full w-full" />
                </span>
                <div>
                  <h4 className="mb-4">Agile & Dynamic Approach</h4>
                  <div>
                    Our flexible strategies and rapid iteration cycles help
                    startups quickly respond to market changes and accelerate
                    growth.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                className="group btn-primary"
                onClick={() => navigate({ to: "/about-us" })}
              >
                Learn More
                <span className="btn-arrow-animation">
                  <ArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
