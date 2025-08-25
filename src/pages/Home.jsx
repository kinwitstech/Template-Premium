import AboutUsSection from "@/components/AboutUsSection";
import ContactSection from "@/components/ContactUsSection";
import FAQSection from "@/components/Faq";
import Jumbotron from "@/components/Jumbotron";
import OurProcessSection from "@/components/OurProcessSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Jumbotron />
      <AboutUsSection />
      <OurProcessSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
