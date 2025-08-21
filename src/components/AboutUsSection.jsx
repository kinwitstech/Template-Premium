import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Cpu, Zap } from "lucide-react";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
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

          <div className="space-y-6">
            <div className="group flex items-start space-x-4">
              <span className="group-hover:animate-flip-once mt-1 block h-10 w-10 flex-shrink-0">
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
              <span className="group-hover:animate-flip-once mt-1 block h-10 w-10 flex-shrink-0">
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
  );
}
