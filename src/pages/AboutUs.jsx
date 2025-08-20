import { BarChart3, Lightbulb } from "lucide-react";

const AboutUs = () => {
  return (
    <main>
      <section id="about-us" className="relative py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
              alt="About Us"
              fill
              className="h-full object-cover"
            />
          </div>

          <div className="text-left">
            <h4 className="text-primary mb-2 tracking-wide uppercase">
              About Us
            </h4>
            <h2 className="mb-6 text-4xl leading-snug font-extrabold">
              Empowering Brands <br /> With Smart Strategies
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <BarChart3 className="text-primary mt-1 h-10 w-10 flex-shrink-0" />
                <div>
                  <h4 className="mb-4">Insightful Data Analysis</h4>
                  <div>
                    We go beyond numbers—transforming cash flow, revenue, and
                    expenses into meaningful insights. Our analysis reveals
                    hidden patterns, uncovers risks, and builds the foundation
                    for scalable growth.
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Lightbulb className="text-primary mt-1 h-10 w-10 flex-shrink-0" />
                <div>
                  <h4 className="mb-4">Future-Ready Strategies</h4>
                  <div>
                    From identifying market opportunities to mitigating risks,
                    we craft strategies designed to inspire confidence and
                    deliver results. Every plan is tailored to help your vision
                    thrive in a competitive world.
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="group from-primary to-accent hover:from-accent/80 hover:to-primary/80 text-primary-content rounded-full bg-gradient-to-r px-8 py-4 text-lg font-bold shadow-xl transition duration-300">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
