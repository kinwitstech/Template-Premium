import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import NavDropdownMenu from "./NavDropdown";
import { isNavItemActive } from "@/common/utils";

const navigation = [
  { name: "Home", to: "/" },
  {
    name: "Pages",
    type: "dropdown",
    items: [
      { label: "About Us", to: "/about-us" },
      { label: "Contact Us", to: "/contact-us" },
      {
        label: "Portfolio Grid More",
        type: "flyout",
        items: [
          { label: "Portfolio", to: "/portfolio" },
          { label: "Portfolio Grid 3", to: "/portfolio-grid-3" },
          { label: "Portfolio Grid 4", to: "/portfolio-grid-4" },
        ],
      },
    ],
  },
  { name: "FAQ", to: "/faq" },
  { name: "Testimonials", to: "/testimonials" },
  { name: "Contact", to: "/contact" },
];

function useScrollThreshold(thresholdRatio = 0.8, pathname) {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (pathname !== "/" || !sentinelRef.current) {
      // For non-home routes, always set scrolled to true
      setScrolled(true);
      return;
    }
    setScrolled(false); // Reset on route change to "/"
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel is not intersecting viewport, user has scrolled past threshold
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [pathname]);

  const sentinelStyle = {
    position: "absolute",
    top: `${thresholdRatio * 100}vh`,
    height: "1px",
    width: "100%",
    pointerEvents: "none",
    opacity: 0,
  };

  return { scrolled, sentinelRef, sentinelStyle };
}

const Navbar = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );
  const { pathname } = useLocation();
  const { scrolled, sentinelRef, sentinelStyle } = useScrollThreshold(
    0.5,
    pathname
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
  }, [overlayOpen]);

  const isTransparent = !scrolled && pathname === "/";
  const isScrolled = scrolled || pathname !== "/";

  return (
    <>
      {pathname === "/" && <div ref={sentinelRef} style={sentinelStyle} />}
      <header
        className={`fixed top-0 z-30 shadow-sm ${
          isTransparent
            ? "bg-base-100/5 text-primary-content top-5 left-1/2 w-[70%] -translate-x-1/2 rounded-4xl"
            : "bg-base-100 w-full shadow-md"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex-1">
            <img
              src="/kinwits_logo.png"
              alt="Logo"
              className="ml-2 inline-block h-9 w-9"
            />
          </div>

          <nav className="hidden flex-1 justify-center space-x-8 font-medium md:flex">
            {navigation.map((item, idx) => {
              const isActive = isNavItemActive(item, pathname);
              return (
                <>
                  {item.type === "dropdown" ? (
                    <NavDropdownMenu
                      key={idx}
                      label={item.name}
                      items={item.items}
                      isScrolled={isScrolled}
                      isActive={isActive}
                    />
                  ) : (
                    <div key={idx} className="relative flex items-center">
                      <Link
                        key={idx}
                        to={item.to}
                        className={`hover:from-primary hover:to-accent transition-colors duration-300 ${
                          isScrolled
                            ? "text-base-content hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
                            : "from-primary-content to-primary-content bg-gradient-to-r bg-clip-text text-transparent"
                        } ${isActive ? "font-semibold" : ""}`}
                      >
                        {item.name}
                      </Link>
                      {isActive && (
                        <>
                          <motion.span
                            layoutId="nav-underline"
                            className="from-primary to-accent animate-glow absolute -bottom-2 left-0 h-0.5 w-full rounded-xl bg-gradient-to-r"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </div>
                  )}
                </>
              );
            })}
          </nav>

          <div className="flex flex-1 items-center justify-end space-x-4">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <SunIcon className="swap-on h-5 w-5 text-yellow-500" />
              <MoonIcon className="swap-off h-5 w-5 text-yellow-400" />
            </label>

            {/* Mobile menu button */}
            <button
              onClick={() => setOverlayOpen(true)}
              className="rounded-md border border-gray-300 p-2 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay Menu (mobile, tablet) */}
      <AnimatePresence>
        {overlayOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setOverlayOpen(false)}
            />
            <motion.div
              initial={{ translateX: "100%" }}
              animate={{ translateX: 0 }}
              exit={{ translateX: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="bg-base-100 fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-sm flex-col shadow-xl"
            >
              <div className="flex items-center justify-end border-b p-4">
                <button onClick={() => setOverlayOpen(false)}>
                  <X className="text-base-content h-6 w-6" />
                </button>
              </div>
              <nav className="text-base-content flex flex-col space-y-6 p-6 text-lg font-medium">
                {navigation.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOverlayOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
