import { Link, useLocation } from "@tanstack/react-router";

const PageHeader = ({ title }) => {
  const { pathname } = useLocation();

  const pathParts = pathname.split("/").filter(Boolean);
  console.log("🚀 ~ PageHeader.jsx:7 ~ PageHeader ~ pathParts:", pathParts);
  const crumbs = [
    { name: "Home", to: "/" },
    ...pathParts.map((part, idx) => ({
      name: title,
      to: "/" + pathParts.slice(0, idx + 1).join("/"),
    })),
  ];

  return (
    <section className="relative h-64 w-full bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"
          //   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
          alt="Team working together"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="">{title}</h1>
        <nav className="border-primary-content/80 mt-4 flex items-center space-x-2 rounded-full border p-3 text-sm">
          {crumbs.map((crumb, idx) => (
            <span key={crumb.to} className="flex items-center">
              {idx < crumbs.length - 1 ? (
                <Link
                  to={crumb.to}
                  className="hover:text-primary transition-colors"
                >
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-gray-300">{crumb.name}</span>
              )}
              {idx < crumbs.length - 1 && (
                <span className="mx-2 text-gray-400">{">"}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default PageHeader;
