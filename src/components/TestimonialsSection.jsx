import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const QuoteIcon = (props) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    id="quote_mark"
    data-name="quote mark"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <rect
      id="Rectangle_3"
      data-name="Rectangle 3"
      width="24"
      height="24"
      fill="none"
    />
    <path
      id="Rectangle"
      d="M0,3A3,3,0,0,1,3,0H5A3,3,0,0,1,8,3V4c0,6-2.028,10-7,10,4-3.962,3-6,3-6H3A3,3,0,0,1,0,5Z"
      transform="translate(2 5)"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1"
    />
    <path
      id="Rectangle-2"
      data-name="Rectangle"
      d="M0,3A3,3,0,0,1,3,0H5A3,3,0,0,1,8,3V4c0,6-2.028,10-7,10,4-3.962,3-6,3-6H3A3,3,0,0,1,0,5Z"
      transform="translate(14 5)"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1"
    />
  </svg>
);

const testimonials = [
  {
    name: "Jesonal Jelins",
    title: "Team Captain",
    text: "Partnering with this financial consulting team was a game-changer for our business. Their expert guidance on cash flow management and budgeting helped us optimize resources and improve profitability.",
  },
  {
    name: "Jackson Marshall",
    title: "Horse Rider",
    text: "The tax planning strategies provided by their team have saved us thousands of dollars while ensuring full compliance. Their knowledge of corporate tax laws and deductions is truly impressive. We were struggling with financial forecasting and decision-making.",
  },
  {
    name: "Jesonal Jelins",
    title: "Team Captain",
    text: "Partnering with this financial consulting team was a game-changer for our business. Their expert guidance on cash flow management and budgeting helped us optimize resources and improve profitability.",
  },
  {
    name: "Jackson Marshall",
    title: "Horse Rider",
    text: "The tax planning strategies provided by their team have saved us thousands of dollars while ensuring full compliance. Their knowledge of corporate tax laws and deductions is truly impressive. We were struggling with financial forecasting and decision-making.",
  },
  {
    name: "Jesonal Jelins",
    title: "Team Captain",
    text: "Partnering with this financial consulting team was a game-changer for our business. Their expert guidance on cash flow management and budgeting helped us optimize resources and improve profitability.",
  },
  {
    name: "Jackson Marshall",
    title: "Horse Rider",
    text: "The tax planning strategies provided by their team have saved us thousands of dollars while ensuring full compliance. Their knowledge of corporate tax laws and deductions is truly impressive. We were struggling with financial forecasting and decision-making.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-primary/5 w-full">
      <div className="section-container section-padding flex-col gap-8">
        <div className="mb-8 flex justify-between">
          <div>
            <p className="section-badge">Client Stories</p>
            <h1 className="section-title">
              Achieving Financial Goals Together
            </h1>
          </div>
          <div>
            <QuoteIcon className="text-base-content/30 h-24 w-36" />
          </div>
        </div>
        <hr className="border-base-content/20 mb-8" />
        <Swiper
          slidesPerView={1}
          spaceBetween={72}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 1,
            },
          }}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex h-full flex-col bg-transparent">
                <p className="mb-8 text-lg leading-relaxed">{t.text}</p>
                <div className="mt-auto flex items-center">
                  <div className="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-400"></div>
                  <div>
                    <div className="text-xl font-semibold">{t.name}</div>
                    <div className="text-base-content/60">{t.title}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
