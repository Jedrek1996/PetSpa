import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section
      className="py-12 h-auto md:h-screen"
      style={{ color: "var(--color-pink)" }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="mb-6">
              Welcome to our spa, where tranquility meets luxury. We offer a
              range of services designed to help you relax, rejuvenate, and feel
              your best. Our team of experienced professionals is dedicated to
              providing you with an exceptional experience, using only the
              highest quality products and techniques.
            </p>
            <p className="mb-6">
              Whether you're looking for a soothing massage, a revitalizing
              facial, or a complete spa package, we have something to suit your
              needs. Join us and discover a haven of peace and serenity.
            </p>
            <p>
              Our commitment to your well-being extends beyond our treatments.
              We believe in creating a warm and welcoming environment where you
              can escape the stresses of daily life and focus on yourself.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-12 md:pl-8">
            <img
              src="https://via.placeholder.com/400"
              alt="Spa Image"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
