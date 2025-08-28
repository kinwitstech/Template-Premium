import {
  ChevronRight,
  Send,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const itemsServices = [
    "Custom Templates",
    "UI/UX Design",
    "Frontend Development",
    "Responsive Layouts",
    "Branding Solutions",
    "Consultation",
  ];

  const itemsQuick = [
    "About Us",
    "Our Portfolio",
    "Case Studies",
    "Testimonials",
    "Blog & Insights",
    "Contact",
  ];

  const List = ({ items }) => (
    <ul className="text-light/80 mt-4 space-y-3 text-sm/6">
      {items.map((label) => (
        <li key={label} className="group flex items-center gap-3">
          <ChevronRight className="text-light/50 size-4 shrink-0 transition group-hover:translate-x-0.5" />
          <a href="#" className="text-light/50 hover:text-light/100">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="text-light/90 bg-footer relative isolate">
      <div className="section-container section-padding responsive-flex gap-10 lg:gap-0">
        <div className="flex-[2]">
          <div className="text-light text-3xl font-black tracking-[0.18em] md:text-4xl">
            KINWITS
          </div>

          <div className="mt-8">
            <p className="text-light/60 text-[12px] tracking-[0.22em] uppercase">
              Let’s Build Together
            </p>
            <p className="text-light mt-2 text-xl font-semibold md:text-2xl">
              Premium Templates for Modern Startups
            </p>
          </div>

          <div className="bg-light/10 my-8 h-px" />

          <div>
            <p className="text-light/60 text-[12px] tracking-[0.22em] uppercase">
              Our Studio
            </p>
            <p className="text-light/90 mt-2 text-base md:text-lg">
              Shivam Tower, 1st floor, Kota, Udupi District, KA
            </p>
            <p className="text-light/80">India - 576221</p>
          </div>
        </div>

        <div className="flex flex-[3] flex-col gap-10 sm:flex-row">
          <div className="border-light/10 flex-1 lg:border-l lg:pl-8">
            <h5 className="text-light relative pl-6 font-semibold">
              <span className="bg-primary ring-primary/20 absolute top-[10px] left-0 block size-2 rounded-full ring-4" />
              What We Do
            </h5>
            <List items={itemsServices} />
          </div>

          <div className="flex-1 lg:pl-4">
            <h5 className="text-light relative pl-6 font-semibold">
              <span className="bg-primary ring-primary/20 absolute top-[10px] left-0 block size-2 rounded-full ring-4" />
              Explore
            </h5>
            <List items={itemsQuick} />
          </div>

          <div className="flex-1 lg:pl-4">
            <h5 className="text-light relative pl-6 font-semibold">
              <span className="bg-primary ring-primary/20 absolute top-[10px] left-0 block size-2 rounded-full ring-4" />
              Get Updates
            </h5>
            <p className="text-light/50 mt-4 text-sm">
              Stay inspired with our latest templates, design tips & product
              launches. No spam, only creative updates.
            </p>

            <div className="relative mt-5">
              <div className="focus-within:ring-primary/60 flex items-center rounded-full bg-white/5 ring-1 ring-white/10">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="placeholder:text-light/50 flex-1 bg-transparent px-5 py-3.5 text-sm outline-none"
                  aria-label="Email address"
                />
                <div className="relative pr-2">
                  <button
                    aria-label="Subscribe"
                    className="text-light bg-primary/50 hover:bg-primary grid size-10 cursor-pointer place-content-center rounded-full ring-0 ring-offset-0 transition"
                  >
                    <Send className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-light/90 mt-5 flex items-center gap-3 text-lg">
              <Mail className="text-primary size-4" />
              <a href="mailto:hello@kinwits.com" className="hover:underline">
                info@kinwits.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="text-light/70 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm md:flex-row">
          <p>© 2025 Kinwits. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="hover:text-light inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 hover:border-white/30"
            >
              <Facebook className="size-4" />
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="hover:text-light inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 hover:border-white/30"
            >
              <Twitter className="size-4" />
              <span>Twitter</span>
            </a>
            <a
              href="#"
              className="hover:text-light inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 hover:border-white/30"
            >
              <Instagram className="size-4" />
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="hover:text-light inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 hover:border-white/30"
            >
              <Linkedin className="size-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
