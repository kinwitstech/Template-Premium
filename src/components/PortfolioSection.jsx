import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import portfolioData from "@/common/portfolioData";
import { PortfolioCard } from "@/pages/Portfolios";

export default function PortfolioSection() {
  const navigate = useNavigate();

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
          <div className="mt-8 flex justify-center md:justify-start">
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
              <PortfolioCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination mt-10 flex justify-center" />
      </div>
    </section>
  );
}
