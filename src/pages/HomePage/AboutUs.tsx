import ClickableButton from "../../components/Buttons/ClickableButton";

const AboutUs = () => {
  return (
    <section
      className="flex justify-center items-center h-80 w-auto flex-col"
      style={{ background: "var(--color-green)" }}
    >
      <div className="text-center w-1/2 text-2xl text-yellow-50 mb-5 ">
        We are a dedicated team of cat enthusiasts committed to providing warm,
        secure, and all-encompassing grooming sessions for our beloved feline
        customers.
      </div>
      <ClickableButton text="Contact Us" />
    </section>
  );
};

export default AboutUs;
