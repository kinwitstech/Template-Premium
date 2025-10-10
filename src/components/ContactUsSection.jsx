import { useForm } from "react-hook-form";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // integrate with backend or email API
  };

  return (
    <section id="contact-us" className="bg-primary/5 w-full">
      <div className="section-container section-padding grid grid-cols-1 gap-8 px-4 md:grid-cols-2">
        <div className="relative">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62116.74862608805!2d74.70572406066144!3d13.331805262523147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb69938f41cf%3A0xcccc99e431850143!2sUdupi%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2suk!4v1755971055333!5m2!1sen!2suk"
            className="h-[500px] w-full rounded-lg shadow"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="rounded-lg">
          <p className="section-badge">Get in Touch</p>
          <h1 className="section-title">Send us a Message</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  placeholder="Name *"
                  {...register("name", { required: "Name is required" })}
                  className="input-default"
                />
                {errors.name && (
                  <p className="error-msg">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  {...register("phone")}
                  className="input-default"
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email *"
                {...register("email", { required: "Email is required" })}
                className="input-default"
              />
              {errors.email && (
                <p className="error-msg">{errors.email.message}</p>
              )}
            </div>
            <div>
              <textarea
                rows="4"
                placeholder="Message"
                {...register("message")}
                className="input-default"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-accent/60 hover:bg-accent text-primary-content rounded-lg px-6 py-3 shadow transition sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
