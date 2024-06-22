import React from "react";
import ClickableButton from "../../components/Buttons/ClickableButton";

const AboutUs: React.FC = () => {
  return (
    <section
      className="flex justify-center items-center h-80 w-full "
      style={{ background: "var(--color-green)" }}
    >
      <div className="text-center max-w-3xl px-4">
        <div className="text-yellow-50 text-2xl md:text-3xl mb-5">
          We are a dedicated team of cat enthusiasts committed to providing
          warm, secure, and all-encompassing grooming sessions for our beloved
          feline customers.
        </div>
        <ClickableButton text="Contact Us" className="mt-4" />
      </div>
    </section>
  );
};

export default AboutUs;
