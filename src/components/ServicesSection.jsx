import {
  ComputerDesktopIcon,
  CodeBracketIcon,
  ServerIcon,
  CubeTransparentIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive, engaging user interfaces and seamless experiences tailored to your brand’s vision.",
    icon: <ComputerDesktopIcon className="text-primary h-10 w-10" />,
    number: "01",
  },
  {
    title: "Custom Development",
    description:
      "Building scalable and maintainable software solutions that fit your unique business needs.",
    icon: <CodeBracketIcon className="text-primary h-10 w-10" />,
    number: "02",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Designing and managing secure, efficient cloud systems to power your applications and data.",
    icon: <ServerIcon className="text-primary h-10 w-10" />,
    number: "03",
  },
  {
    title: "Product Strategy",
    description:
      "Aligning technology and market insights to guide your product development and growth roadmap.",
    icon: <CubeTransparentIcon className="text-primary h-10 w-10" />,
    number: "04",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full">
      <div className="section-container section-padding section-flex">
        <div className="responsive-flex mb-4 md:items-center md:justify-between">
          <div>
            <p className="section-badge">Our Services</p>
            <h1 className="section-title max-w-2xl">
              Explore Our Versatile Tech Startup Templates
            </h1>
            <p className="section-description">
              Choose from beautifully crafted templates designed to accelerate
              your product and brand presence.
            </p>
          </div>
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="group btn-primary">
              Learn More
              <span className="btn-arrow-animation">
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="responsive-grid mt-8 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group card-base dark:hover:shadow-neutral/20"
            >
              <span className="card-number">{service.number}</span>
              <div>{service.icon}</div>
              <h4 className="mt-4 mb-2 text-lg font-semibold">
                {service.title}
              </h4>
              <p className="text-base-content/70 mb-8 text-base">
                {service.description}
              </p>
              <div className="mt-auto">
                <div className="group services-btn-icon">
                  <ArrowUpRightIcon className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
