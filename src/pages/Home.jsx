import AboutUsSection from "@/components/AboutUsSection";
import FAQSection from "@/components/Faq";
import Jumbotron from "@/components/Jumbotron";
import OurProcessSection from "@/components/OurProcessSection";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Jumbotron />
      <AboutUsSection />
      <OurProcessSection />
      <ServicesSection />
      <FAQSection />
      <Testimonials />
    </main>
  );
}
