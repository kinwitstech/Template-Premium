import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calculator,
  Calendar,
  Folder,
  MapPin,
  User,
} from "lucide-react";

import PageHeader from "./PageHeader";
import portfolioData from "@/common/portfolioData";
import { portfolioDetailRoute } from "@/routes/home.routes";

const icons = { Calendar, User, Folder, Calculator, MapPin };

const MetaData = ({ metaData = [] }) => {
  return (
    <div className="border-base-content/10 grid grid-cols-1 items-center gap-6 border-b pt-12 pb-8 text-center sm:grid-cols-2 lg:grid-cols-5">
      {metaData?.map((item) => {
        const Icon = icons[item?.icon];
        return (
          <div
            className="border-base-content/10 flex flex-col items-center space-y-1 last:border-r-0 md:items-start lg:border-r"
            key={item.id}
          >
            <div className="flex items-center space-x-2">
              <Icon className="text-primary h-5 w-5" />
              <span className="">{item.label}</span>
            </div>
            <span className="text-neutral-dark text-sm font-medium">
              {item.value}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const DetailCard = ({ item }) => {
  return (
    <>
      <img
        src={item.image}
        alt={item.title}
        className="h-160 w-full rounded-xl object-cover"
      />
      <MetaData metaData={item?.metaData} />
      <div className="my-8">
        <h1 className="mb-6">{item.heading}</h1>
        <p className="text-base-content/70 leading-relaxed">
          {item.description}
        </p>
      </div>
    </>
  );
};

const Testimonial = ({ item }) => {
  return (
    <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
      <div className="flex flex-col items-start space-y-6 md:flex-row md:items-center md:space-y-0 md:space-x-8">
        <div className="relative flex-shrink-0">
          <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-200 md:h-24 md:w-24">
            <img
              src={item?.authorImage || ""}
              alt="Calvin Carlo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <blockquote className="mb-4 text-xl leading-relaxed font-semibold lg:text-2xl">
            {item?.testimonial || ""}
          </blockquote>
          <cite className="not-italic">
            {item?.testimonialAuthor || ""} -{" "}
            <span className="text-primary/75">{item?.authorRole || ""}</span>
          </cite>
        </div>
      </div>
    </div>
  );
};

const ProjectChallenges = ({ challenges = [] }) => {
  return (
    <div className="border-base-content/10 mt-12 mb-10 border-b">
      <h2 className="mb-4">Project Challenges</h2>
      <p className="text-base-content/70 mb-8">
        Investors in the capital markets range from individual retail investors
        to large institutional investors, such as pension funds, mutual funds,
        and hedge funds. These investors are drawn to the capital markets by the
        potential for returns, whether through dividends, capital appreciation,
        or interest payments.
      </p>

      <div className="mb-12 grid gap-x-6 gap-y-3 sm:grid-cols-2">
        {challenges.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2 md:items-center">
            <ArrowUpRight className="text-primary/80 h-5 w-5 flex-shrink-0" />
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="mb-16 grid gap-6 md:grid-cols-2">
        <img
          src="https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg"
          alt="Professional"
          className="w-full rounded-lg object-cover"
        />
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg"
            alt="Business Meeting"
            className="w-full rounded-lg object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <span className="bg-opacity-80 bg-primary/80 text-light flex h-14 w-14 items-center justify-center rounded-full">
              ▶
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const NavigationButtons = ({ item }) => {
  const navigate = useNavigate();
  const currentIndex = portfolioData.findIndex((p) => p.id === item.id);
  const lastIndex = portfolioData.length - 1;

  const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
  const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;

  const prevItem = portfolioData[prevIndex];
  const nextItem = portfolioData[nextIndex];

  return (
    <div className="flex items-center justify-between font-medium">
      <button
        onClick={() =>
          navigate({
            to: portfolioDetailRoute.to,
            params: { id: prevItem.id.toString() },
          })
        }
        className="group flex items-center gap-2 hover:font-bold"
      >
        <ArrowLeft className="group-hover:text-primary h-5 w-5" />{" "}
        {prevItem?.title}
      </button>

      <button
        onClick={() =>
          navigate({
            to: portfolioDetailRoute.to,
            params: { id: nextItem.id.toString() },
          })
        }
        className="group flex items-center gap-2 hover:font-bold"
      >
        {nextItem?.title}{" "}
        <ArrowRight className="group-hover:text-primary h-5 w-5" />
      </button>
    </div>
  );
};

/**
 * The PortfolioDetail component renders detailed information about a specific portfolio item based on
 * the provided ID.
 * @returns The PortfolioDetail component is being returned. It displays detailed information about a
 * specific portfolio item based on the provided id. If the item with the specified id is not found in
 * the portfolioData, it will display a "Not Found" message. Otherwise, it will render the details of
 * the portfolio item including its category, image, metadata, heading, description, testimonials,
 * project challenges, and navigation buttons.
 */
export default function PortfolioDetail() {
  const { id } = portfolioDetailRoute.useParams();
  const item = portfolioData.find((p) => p.id.toString() === id);

  if (!item) return <div className="p-10 text-center">Not Found</div>;

  return (
    <main className="pt-16">
      <PageHeader title={item.category} customName={true} />
      <section className="w-full">
        <div className="section-container section-padding">
          <DetailCard item={item} />
          <Testimonial item={item} />
          <ProjectChallenges challenges={item.challenges} />
          <NavigationButtons item={item} />
        </div>
      </section>
    </main>
  );
}
