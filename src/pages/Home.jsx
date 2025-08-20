import AboutUsSection from "@/components/AboutUsSection";
import Jumbotron from "@/components/Jumbotron";
import OurProcessSection from "@/components/OurProcessSection";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <AboutUsSection />
      <OurProcessSection />
    </main>
  );
}
