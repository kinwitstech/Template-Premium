import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Minus, Plus, X, ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import NavDropdownMenu from "./NavDropdown";
import { isNavItemActive } from "@/common/utils";

const navigation = [
  { name: "Home", to: "/" },
  {
    name: "Pages",
    type: "dropdown",
    items: [{ label: "About Us", to: "/about-us" }],
  },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Contact", to: "/contact" },
];

function useScrollThreshold(thresholdRatio = 0.3, pathname) {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (pathname !== "/" || !sentinelRef.current) {
      setScrolled(true);
      return;
    }
    setScrolled(false);

    // ✅ Apply thresholdRatio using rootMargin
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        rootMargin: `-${thresholdRatio * 100}% 0px 0px 0px`,
      }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [pathname, thresholdRatio]);

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
  const [theme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );
  const { pathname } = useLocation();
  const { scrolled, sentinelRef, sentinelStyle } = useScrollThreshold(
    0.1,
    pathname
  );
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "";
  }, [overlayOpen]);

  const isTransparent = !scrolled && pathname === "/";
  const isScrolled = scrolled || pathname !== "/";

  return (
    <>
      {pathname === "/" && <div ref={sentinelRef} style={sentinelStyle} />}
      <header
        className={`fixed top-0 z-30 shadow-sm transition-all duration-300 ${
          isTransparent
            ? "bg-base-100/5 text-primary-content w-full rounded-none md:top-5 md:left-1/2 md:w-[90%] md:-translate-x-1/2 md:rounded-4xl"
            : "bg-base-100 w-full shadow-md"
        }`}
      >
        <div className="mx-auto flex w-full items-center justify-between px-8 py-6">
          {/* Left: Logo */}
          <div className="flex flex-1 justify-start">
            <div
              className={`text-2xl font-bold transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-accent"
              }`}
            >
              KINWITS
            </div>
          </div>

          {/* Center: Nav Links */}
          <nav className="hidden flex-1 justify-center font-medium md:flex md:space-x-6 lg:space-x-10">
            {navigation.map((item, idx) => {
              const isActive = isNavItemActive(item, pathname);
              return (
                <div key={idx}>
                  {item.type === "dropdown" ? (
                    <NavDropdownMenu
                      label={item.name}
                      items={item.items}
                      isScrolled={isScrolled}
                      isActive={isActive}
                    />
                  ) : (
                    <div className="relative flex items-center">
                      <Link
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
                        <motion.span
                          layoutId="nav-underline"
                          aria-hidden="true"
                          className="from-primary to-primary animate-glow absolute -bottom-2 left-0 h-0.5 w-full rounded-xl bg-gradient-to-r"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: Desktop Buttons */}
          <div className="hidden flex-1 items-center justify-end space-x-5 md:flex">
            <Link
              to="/cart"
              className={`hover:bg-primary/10 rounded-full p-2 transition-colors ${
                isTransparent ? "text-primary-content" : "text-base-content"
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="btn btn-primary !px-5 !py-2 !text-sm"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOverlayOpen(true)}
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={overlayOpen}
            className={`rounded-md border p-2 transition-colors md:hidden ${
              isTransparent
                ? "border-white text-white"
                : "text-base-content border-gray-300"
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
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
              <div className="flex items-center justify-between p-4">
                <h3 className="text-accent text-xl font-bold">KINWITS</h3>
                <button
                  aria-label="Close menu"
                  onClick={() => setOverlayOpen(false)}
                >
                  <X className="text-base-content h-6 w-6" />
                </button>
              </div>

              <nav className="text-base-content flex flex-col space-y-4 p-6 text-lg font-medium">
                {navigation.map((item, idx) => {
                  const isActive = isNavItemActive(item, pathname);
                  if (item.type === "dropdown") {
                    const isOpen = openIndex === idx;
                    return (
                      <div key={item.name} className="mb-2 flex flex-col">
                        <button
                          onClick={() => toggleDropdown(idx)}
                          className={`flex w-full items-center justify-between pb-3 ${
                            isActive ? "text-primary" : ""
                          }`}
                        >
                          <span>{item.name}</span>
                          {isOpen ? (
                            <Minus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="mt-2 ml-4 flex flex-col space-y-2 text-base">
                            {item.items.map((sub) => {
                              const subActive = isNavItemActive(sub, pathname);
                              return (
                                <Link
                                  key={sub.label}
                                  to={sub.to}
                                  onClick={() => setOverlayOpen(false)}
                                  className={`${
                                    subActive ? "text-primary" : ""
                                  } pb-4`}
                                >
                                  {sub.label}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={idx}
                      to={item.to}
                      onClick={() => setOverlayOpen(false)}
                      className={`${isActive ? "text-primary" : ""}`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Divider */}
              <div className="mt-auto space-y-4 border-t border-gray-200 p-6">
                <Link
                  to="/cart"
                  onClick={() => setOverlayOpen(false)}
                  className="text-base-content hover:text-primary flex items-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Cart
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setOverlayOpen(false)}
                  className="btn btn-primary w-full !py-3 text-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
