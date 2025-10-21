import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Share2,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const team = [
  {
    name: "Victoria Lauren",
    role: "Chief Financial Officer",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Michael Lee",
    role: "Operations Head",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Victoria White",
    role: "Cost Accountant",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "John Doe",
    role: "Chief Financial Officer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "James Anderson",
    role: "Tax Accountant",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Tomas White",
    role: "Cost Accountant",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sophia Brown",
    role: "HR Manager",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
];

function TeamCard({ m }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <h4>{m.name}</h4>
      <p className="text-primary/80 mb-4 text-sm">{m.role}</p>

      <div
        className="group relative flex h-80 items-center justify-center overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-black/5 md:h-96"
        onClick={() => setOpen(false)}
      >
        <img src={m.img} alt={m.name} className="h-full w-full object-cover" />

        <div className="absolute right-4 bottom-4">
          <div
            onClick={toggleMenu}
            className={`bg-primary flex h-11 items-center gap-2 overflow-hidden rounded-2xl px-3 backdrop-blur transition-all duration-300 ease-in-out ${open ? "bg-secondary w-[10.75rem] justify-between" : "w-11 justify-end"} group-hover:bg-primary/80 group-hover:w-[10.75rem] group-hover:justify-between md:cursor-pointer`}
          >
            <div
              className={`flex items-center gap-2 transition-opacity duration-300 ${
                open
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100 md:opacity-0"
              }`}
            >
              <a href="#" className="hover:text-light/50 text-light p-2">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-light/50 text-light p-2">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-light/50 text-light p-2">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-light/50 text-light p-2">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            <button
              onClick={toggleMenu}
              className="p-1"
              aria-label="Toggle social media menu"
            >
              <Share2 className="text-light h-4 w-4 flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurTeamSection() {
  return (
    <section id="our-team" className="bg-primary/5 w-full">
      <div className="section-container section-padding">
        <div className="mb-8 flex flex-wrap justify-between gap-6">
          <div className="max-w-3xl">
            <p className="section-badge">Our Team Experts</p>
            <h1 className="section-title">
              Meet the Experts Behind Your Financial Growth
            </h1>
          </div>

          <div className="ml-auto flex items-end gap-3 lg:mb-8">
            <button
              className="swiper-button-prev-custom hover:bg-accent hover:text-light grid h-11 w-16 place-items-center rounded-full border border-slate-200"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="swiper-button-next-custom hover:bg-accent hover:text-light grid h-11 w-16 place-items-center rounded-full border border-slate-200"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <hr className="border-base-content/20 mb-10" />

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {team.map((m) => (
            <SwiperSlide key={m.name}>
              <TeamCard m={m} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
