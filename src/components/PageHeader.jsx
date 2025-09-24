import { Link, useLocation } from "@tanstack/react-router";

const PageHeader = ({ title, customName = false }) => {
  const { pathname } = useLocation();

  const pathParts = pathname.split("/").filter(Boolean);

  let crumbs = [
    { name: "Home", to: "/" },
    ...pathParts.map((part, idx) => ({
      name: part.charAt(0).toUpperCase() + part.slice(1),
      to: "/" + pathParts.slice(0, idx + 1).join("/"),
    })),
  ];

  if (customName && crumbs.length > 1) {
    crumbs[crumbs.length - 1] = {
      ...crumbs[crumbs.length - 1],
      name: title,
    };
  }

  return (
    <section className="text-light relative h-64 w-full bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"
          //   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
          alt="Team working together"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="flex-center relative z-10 h-full flex-col text-center">
        <h1 className="">{title}</h1>
        <nav className="border-primary-content/80 mt-4 flex items-center space-x-2 rounded-full border p-3 text-sm">
          {crumbs.map((crumb, idx) => (
            <span key={crumb.to} className="flex items-center">
              {idx < crumbs.length - 1 ? (
                <Link
                  to={crumb.to}
                  className="hover:text-primary cursor-pointer transition-colors"
                >
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-light/80">{crumb.name}</span>
              )}
              {idx < crumbs.length - 1 && (
                <span className="text-light/50 mx-2">{">"}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default PageHeader;