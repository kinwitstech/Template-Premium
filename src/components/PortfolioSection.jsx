import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, ZoomIn } from "lucide-react";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const portfolioData = [
  {
    id: 2,
    title: "Business Strategy",
    category: "Finance, Investing",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "Market Analysis",
    category: "Research",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "Digital Marketing",
    category: "Advertising",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    link: "#",
  },
  {
    id: 1,
    title: "Business Meeting",
    category: "Consulting",
    image:
      "https://images.unsplash.com/photo-1590650046871-92c887180603?w=800&q=80",
    link: "#",
  },
  {
    id: 5,
    title: "Creative Presentation",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    link: "#",
  },
];

export default function PortfolioSection() {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section id="portfolio" className="w-full">
      <div className="section-container section-padding">
        <div className="responsive-flex mb-8 md:items-center md:justify-between">
          <div>
            <p className="section-badge">Our Portfolio</p>
            <h1 className="section-title max-w-2xl">
              Digitize Your Business Now With Our Best Experts
            </h1>
          </div>
          <div className="mt-8">
            <button
              className="group btn-primary"
              onClick={() => navigate({ to: "/portfolio" })}
            >
              Learn More
              <span className="btn-arrow-animation">
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>

        <hr className="border-base-content/20 mb-10" />

        <Swiper
          modules={[Pagination]}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          className="pb-10"
        >
          {portfolioData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md"
                onClick={() => handleCardClick(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 flex flex-col justify-end bg-black/60 p-6 transition duration-500 md:opacity-0 md:group-hover:opacity-100 ${activeCard === item.id ? "opacity-100" : "opacity-0"}`}
                >
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-300">{item.category}</p>
                  <a
                    href={item.link}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/40"
                  >
                    <ZoomIn className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination mt-10 flex justify-center" />
      </div>
    </section>
  );
}
