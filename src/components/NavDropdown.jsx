import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { isNavItemActive } from "@/common/utils";

export default function NavDropdownMenu({
  label,
  items,
  isScrolled,
  isActive,
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  function handleMouseEnter() {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 300);
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`group hover:from-primary hover:to-accent flex items-center gap-2 bg-transparent font-medium ring-0 transition-colors duration-300 focus:ring-0 focus:ring-offset-0 ${
          isScrolled
            ? "hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
            : "from-primary-content to-primary-content bg-gradient-to-r bg-clip-text text-transparent"
        }`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        {isActive && (
          <>
            <motion.span
              layoutId="nav-underline"
              className="from-primary to-accent animate-glow absolute -bottom-2 left-0 h-0.5 w-[75%] rounded-xl bg-gradient-to-r"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
              aria-hidden="true"
            />
          </>
        )}
        <ChevronDown
          className={`text-base-content h-4 w-4 transition-transform duration-200 ${
            isScrolled ? "text-base-content" : "text-light"
          } ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, translateY: 10, scale: 0.98 }}
            animate={{ opacity: 1, translateY: 0, scale: 1 }}
            exit={{ opacity: 0, translateY: 10, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className={`absolute top-5 left-0 mt-5 min-w-[250px] rounded-xl p-4 shadow-xl ${
              isScrolled
                ? "bg-base-100 text-base-content"
                : "bg-light text-black"
            }`}
          >
            <ul>
              {items.map((item, idx) =>
                item.type === "flyout" ? (
                  <FlyoutMenu
                    key={idx}
                    label={item.label}
                    items={item.items}
                    isScrolled={isScrolled}
                  />
                ) : (
                  <DropdownItem
                    key={item.label}
                    to={item.to}
                    label={item.label}
                  />
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownItem({ to, label }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <li>
      <Link
        to={to}
        className="group relative flex items-center px-4 py-2 transition-all"
      >
        <span
          className={`bg-primary ring-primary/20 absolute left-2 block h-1 w-3 rounded-full ring-4 transition-all duration-200 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"} `}
        />
        <span
          className={`transition-all duration-200 ${isActive ? "translate-x-5" : "group-hover:translate-x-5"} `}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

/* ========== Flyout Menu ========== */
function FlyoutMenu({ label, items, isScrolled }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const hasActiveChild = items.some((item) => isNavItemActive(item, pathname));

  useEffect(() => {
    if (hasActiveChild) {
      setOpen(true);
    }
  }, [hasActiveChild]);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex w-full items-center justify-between px-4 py-2">
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            open ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, translateX: 16 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 16 }}
            transition={{ duration: 0.18 }}
            className={`absolute top-0 left-full min-w-[220px] rounded-lg p-4 shadow-lg ${
              isScrolled
                ? "bg-base-100 text-base-content"
                : "bg-light text-black"
            }`}
          >
            {items.map((item) => (
              <DropdownItem key={item.label} to={item.to} label={item.label} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
