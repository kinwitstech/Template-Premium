import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  A11y,
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { slides } from "@/common/jumbotronData.js";

export default function Jumbotron() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="home"
      className="flex-center relative h-screen overflow-hidden"
    >
      <Swiper
        className="h-full w-full"
        modules={[Pagination, A11y, Autoplay, EffectFade, Keyboard, Navigation]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        keyboard={{ enabled: true, onlyInViewport: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
        navigation={{
          prevEl: "#jumbotron-prev",
          nextEl: "#jumbotron-next",
        }}
      >
        {slides?.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {slide.bg.endsWith(".mp4") ? (
              <motion.video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1 }}
                animate={{ scale: activeIndex === idx ? 1.1 : 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              >
                <source src={slide.bg} type="video/mp4" />
              </motion.video>
            ) : (
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: slide.bg }}
                initial={{ scale: 1 }}
                animate={{ scale: activeIndex === idx ? 1.1 : 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            )}
            <div className="absolute inset-0 bg-gray-900/60" />
            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center lg:items-start lg:text-left">
              <div className="flex w-full max-w-xl flex-col justify-center md:w-1/2">
                <motion.p
                  className="text-primary-content mb-4 text-sm font-semibold tracking-widest uppercase drop-shadow-lg"
                  initial={{
                    opacity: activeIndex === idx ? 0 : 1,
                    x: activeIndex === idx ? -40 : 0,
                  }}
                  animate={{
                    opacity: activeIndex === idx ? 1 : 0,
                    x: activeIndex === idx ? 0 : -40,
                  }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                >
                  {slide.subtitle}
                </motion.p>
                <motion.h1
                  initial={{
                    opacity: activeIndex === idx ? 0 : 1,
                    x: activeIndex === idx ? -70 : 0,
                  }}
                  animate={{
                    opacity: activeIndex === idx ? 1 : 0,
                    x: activeIndex === idx ? 0 : -70,
                  }}
                  transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
                  className="text-primary mb-6 max-w-xl leading-tight font-extrabold drop-shadow-2xl md:text-7xl"
                >
                  {/*<ReactTyped*/}
                  {/*  strings={slide.title}*/}
                  {/*  typeSpeed={125}*/}
                  {/*  backSpeed={75}*/}
                  {/*  loop*/}
                  {/*/>*/}
                  {slide?.title}
                </motion.h1>
                <motion.div
                  className="text-primary-content mb-10 leading-relaxed font-medium tracking-widest drop-shadow"
                  initial={{
                    opacity: activeIndex === idx ? 0 : 1,
                    x: activeIndex === idx ? -90 : 0,
                  }}
                  animate={{
                    opacity: activeIndex === idx ? 1 : 0,
                    x: activeIndex === idx ? 0 : -90,
                  }}
                  transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
                >
                  {slide.description}
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-center group btn-primary hover:bg-primary/10 mx-auto w-[14rem] lg:mx-0"
                >
                  Learn More
                  <span className="btn-arrow-animation">
                    <ArrowRight />
                  </span>
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="jumbotron-nav jumbotron-prev bg-primary/10 text-primary-content/20 hover:primary hover:text-primary-content absolute top-1/2 left-4 z-20 hidden -translate-y-1/2 rounded-full p-3 shadow-lg focus:ring-0 focus:outline-none lg:flex"
        id="jumbotron-prev"
        aria-label="Previous Slide"
        style={{ outline: "none", boxShadow: "none" }}
      >
        <ChevronLeft />
      </button>
      <button
        className="jumbotron-nav jumbotron-next bg-primary/10 text-primary-content/20 hover:primary hover:text-primary-content absolute top-1/2 right-4 z-20 hidden -translate-y-1/2 rounded-full p-3 shadow-lg focus:ring-0 focus:outline-none lg:flex"
        id="jumbotron-next"
        aria-label="Next Slide"
        style={{ outline: "none", boxShadow: "none" }}
      >
        <ChevronRight />
      </button>
    </section>
  );
}
