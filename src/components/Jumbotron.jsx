import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import {
  A11y,
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    title: ["Inspire.", "Launch.", "Grow."],
    subtitle: "Premium Startup Template",
    description:
      "Discover stunning template crafted for ambitious brands. Elevate your digital presence and launch with confidence—your next big idea starts here.",
    bars: [
      { value: "70%", height: 180 },
      { value: "90%", height: 220 },
      { value: "100%", height: 260 },
    ],
    bg: "/slide1.mp4",
  },
  {
    title: ["Handpicked Designs for Visionaries"],
    subtitle: "Curated for Every Industry",
    description:
      "Browse our portfolio of client-ready templates—each designed to impress, convert, and scale. Find the perfect fit for your business vision.",
    bars: [
      { value: "60%", height: 150 },
      { value: "85%", height: 210 },
      { value: "100%", height: 250 },
    ],
    bg: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
  },
  {
    title: ["See What’s Possible"],
    subtitle: "Real Results. Real Clients.",
    description:
      "Explore success stories from brands who trusted our templates to power their growth. Your journey to a standout website starts here.",
    bars: [
      { value: "50%", height: 120 },
      { value: "80%", height: 200 },
      { value: "100%", height: 240 },
    ],
    bg: "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80')",
  },
];

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
        autoplay={{ delay: 30000, disableOnInteraction: false }}
        effect="fade"
        keyboard={{ enabled: true, onlyInViewport: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
        navigation={{
          prevEl: "#jumbotron-prev",
          nextEl: "#jumbotron-next",
        }}
      >
        {slides.map((slide, idx) => (
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
            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 lg:items-start">
              <div className="flex w-full max-w-xl flex-col justify-center md:w-1/2">
                <motion.p
                  className="text-primary-content mb-2 text-sm font-semibold tracking-widest uppercase drop-shadow-lg"
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
                <motion.div
                  initial={{
                    opacity: activeIndex === idx ? 0 : 1,
                    x: activeIndex === idx ? -40 : 0,
                  }}
                  animate={{
                    opacity: activeIndex === idx ? 1 : 0,
                    x: activeIndex === idx ? 0 : -40,
                  }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
                  className="max-w-xl"
                >
                  <h2 className="from-primary to-accent mb-4 bg-gradient-to-r bg-clip-text leading-tight font-extrabold text-transparent drop-shadow-2xl md:text-7xl">
                    <ReactTyped
                      strings={slide.title}
                      typeSpeed={100}
                      backSpeed={50}
                      loop
                    />
                  </h2>
                </motion.div>
                <motion.p
                  className="text-primary-content mb-8 text-lg font-medium text-balance drop-shadow md:text-xl"
                  initial={{
                    opacity: activeIndex === idx ? 0 : 1,
                    x: activeIndex === idx ? -40 : 0,
                  }}
                  animate={{
                    opacity: activeIndex === idx ? 1 : 0,
                    x: activeIndex === idx ? 0 : -40,
                  }}
                  transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
                >
                  {slide.description}
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="group from-primary/50 to-accent/50 hover:from-accent/80 hover:to-primary/80 text-primary-content w-[12rem] rounded-full bg-gradient-to-r px-8 py-4 text-lg font-bold shadow-xl transition-all duration-300"
                >
                  Contact Us{" "}
                  <span className="group-hover:text-accent ml-2 transition-all duration-300 group-hover:animate-pulse">
                    →
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
