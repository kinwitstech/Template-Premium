import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Example testimonials array
const testimonials = [
  {
    quote:
      "The tax planning strategies provided by their team have saved us thousands of dollars while ensuring full compliance. Their knowledge of corporate tax laws and deductions is truly impressive. We were struggling with financial forecasting and decision-making.",
    name: "Jackson Marshall",
    title: "Horse Rider",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "The tax planning strategies provided by their team have saved us thousands of dollars while ensuring full compliance. Their knowledge of corporate tax laws and deductions is truly impressive. We were struggling with financial forecasting and decision-making. The tax planning strategies provided by their team have saved us thousands of dollars while ensuring full compliance. Their knowledge of corporate tax laws and deductions is truly impressive. We were struggling with financial forecasting and decision-making.",
    name: "Jackson Marshall",
    title: "Horse Rider",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "The tax planning strategies provided by their team have saved us thousands of dollars while ensuring full compliance. ",
    name: "Jackson Marshall",
    title: "Horse Rider",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  // Add more as needed
];

export default function TestimonialsSection() {
  return (
    <section className="w-full">
      <div className="section-container section-padding responsive-flex gap-12">
        <div className="lg:w-1/3">
          <p className="section-badge">Client Stories</p>
          <h1 className="section-title">What Customer Says</h1>
          <div className="section-description">
            Positive feedback and testimonials highlight how businesses meet or
            exceed expectations, offering solutions that truly make a
            difference. Clients appreciate personalized service, prompt
            responses, and a commitment to their success.
          </div>
        </div>
        <div className="bg-primary/10 w-full rounded-xl p-8 shadow-lg lg:w-2/3">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            loop
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <Quote className="mb-8 h-10 w-10" />
                <p className="mb-8 text-lg leading-relaxed">{t.quote}</p>
                <div className="mt-5 flex items-center">
                  <img
                    className="mr-4 h-12 w-12 rounded-full border-2 border-white"
                    src={t.avatar}
                    alt={t.name}
                  />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm">{t.title}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
