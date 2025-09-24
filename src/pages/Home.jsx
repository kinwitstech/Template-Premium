import AboutUsSection from "@/components/AboutUsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactUsSection";
import FAQSection from "@/components/Faq";
import Jumbotron from "@/components/Jumbotron";
import OurProcessSection from "@/components/OurProcessSection";
import OurTeamSection from "@/components/OurTeam";
import PortfolioSection from "@/components/PortfolioSection";
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
      <BlogSection />
      <OurTeamSection />
      <FAQSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
