import PageHeader from "./PageHeader";
import portfolioData from "@/common/portfolioData";
import { portfolioDetailRoute } from "@/routes/home.routes";

export default function PortfolioDetail() {
  const { id } = portfolioDetailRoute.useParams();
  const item = portfolioData.find((p) => p.id.toString() === id);

  if (!item) return <div className="p-10 text-center">Not Found</div>;

  return (
    <main className="pt-16">
      <PageHeader title={item.category} customName={true} />
      <section className="w-full">
        <div className="section-container section-padding">
          <img
            src={item.image}
            alt={item.title}
            className="h-80 w-full rounded-xl object-cover"
          />
          <h1 className="mt-6 text-3xl font-bold">{item.title}</h1>
          <p className="text-gray-500">{item.category}</p>
          <p className="mt-4 text-lg text-gray-700">
            Lorem ipsum description for {item.title}.
          </p>
        </div>
      </section>
    </main>
  );
}
