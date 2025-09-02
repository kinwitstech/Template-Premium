import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Image as ImageIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const team = [
  { name: "James Garcia", role: "Finance Director" },
  { name: "Victoria Lauren", role: "Chief Financial Officer" },
  { name: "James Anderson", role: "Tax Accountant" },
  { name: "Tomas White", role: "Cost Accountant" },
  { name: "Victoria Lauren1", role: "Chief Financial Officer" },
  { name: "James Anderson1", role: "Tax Accountant" },
  { name: "Tomas White1", role: "Cost Accountant" },
];

function TeamCard({ m }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h4>{m.name}</h4>
      <p className="text-primary/80 mb-4 text-sm">{m.role}</p>

      <div
        className="group relative flex h-80 items-center justify-center overflow-hidden rounded-3xl bg-slate-100 shadow-sm ring-1 ring-black/5 md:h-96"
        onClick={() => setOpen((prev) => !prev)}
      >
        <ImageIcon className="h-16 w-16 text-slate-400" />

        <div className="absolute right-4 bottom-4">
          <div
            onClick={() => setOpen((prev) => !prev)}
            className={`bg-primary/20 flex h-11 items-center gap-2 overflow-hidden rounded-2xl px-3 backdrop-blur transition-all duration-300 ease-in-out ${
              open ? "bg-primary/80 w-43 justify-between" : "w-11 justify-end"
            } group-hover:bg-primary/80 group-hover:w-43 group-hover:justify-between`}
          >
            <div
              className={`flex items-center gap-2 transition-opacity duration-300 ${
                open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
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

            <Share2 className="text-light h-4 w-4 flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurTeamSection() {
  return (
    <section id="our-team" className="w-full">
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
              className="swiper-button-prev-custom hover:bg-primary/80 hover:text-light grid h-11 w-16 place-items-center rounded-full border border-slate-200 ring-0 ring-offset-0"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="swiper-button-next-custom hover:bg-primary/80 hover:text-light grid h-11 w-16 place-items-center rounded-full border border-slate-200 ring-0 ring-offset-0"
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
