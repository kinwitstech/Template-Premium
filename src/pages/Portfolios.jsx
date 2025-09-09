import { Link, useNavigate } from "@tanstack/react-router";
import { ZoomIn } from "lucide-react";

import portfolioData from "@/common/portfolioData";
import PageHeader from "@/components/PageHeader";
import { portfolioDetailRoute } from "@/routes/home.routes";

const PortfolioCard = ({ item }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate({ to: portfolioDetailRoute.to, params: { id: id.toString() } });
  };

  return (
    <div
      key={item.id}
      className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md"
      onClick={() => handleCardClick(item.id)}
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-x-0 bottom-0 flex h-1/2 flex-col justify-end bg-black/60 p-6 opacity-100 transition duration-500 md:inset-0 md:h-full md:opacity-0 md:group-hover:opacity-100">
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <p className="mb-4 text-sm text-gray-300">{item.category}</p>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/40">
          <ZoomIn className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};

const Portfolios = () => {
  return (
    <main className="pt-16">
      <PageHeader title="Portfolio" />
      <section className="w-full">
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {portfolioData?.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export { Portfolios, PortfolioCard };
