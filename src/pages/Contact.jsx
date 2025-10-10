import { Calendar, Headphones, MapPin } from "lucide-react";

import ContactSection from "@/components/ContactUsSection.jsx";
import PageHeader from "@/components/PageHeader";

const items = [
  {
    id: "01",
    icon: <MapPin className="text-primary h-10 w-10" />,
    title: "Our Address",
    text: "132, Tic St, Kingston, New York 12401 USA.",
  },
  {
    id: "02",
    icon: <Headphones className="text-primary h-10 w-10" />,
    title: "24/7 Support",
    text: "+(528) 456-7592, info@example.com",
  },
  {
    id: "03",
    icon: <Calendar className="text-primary h-10 w-10" />,
    title: "Opening Hours",
    text: "Sat – Mon 10 am – 8 pm, Fri Off – Day",
  },
];

const InfoCards = () => {
  return (
    <section id="contact-info" className="w-full">
      <div className="section-container section-padding grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="group card-base dark:hover:shadow-neutral/20 relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-slate-600">{item.text}</p>

            <span className="group-hover:text-secondary absolute top-4 right-4 text-5xl font-bold text-slate-100">
              {item.id}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <main className="pt-16">
      <PageHeader title="Contact" />
      <InfoCards />
      <ContactSection />
    </main>
  );
};

export default Contact;
