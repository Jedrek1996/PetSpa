import ClickableButton from "../../components/Buttons/ClickableButton";
import GroomingImage from "../../assets/images/GroomingBannerImg.png";

const GroomingBanner = () => {
  return (
    <section className="bg-yellow-50" style={{ color: "var(--color-pink)" }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center md:w-1/2">
          <h5 className="my-6 text-3xl sm:text-2xl md:text-3xl font-semibold text-center">
            ˚˚ؘGrooming is our specialty༄♡˚
          </h5>
          <p
            className="text-xl mb-10 font-extralight text-center"
            style={{ color: "var(--color-light-pink)" }}
          >
            Discover our comprehensive grooming menu, offering spa sessions,
            specialized treatments, and a host of other services tailored to
            your feline friend's needs! Take advantage of our affordable rates
            and pet taxi services for a stress-free grooming experience.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center">
            <ClickableButton text="Spa Menu" className="m-5" />
            <ClickableButton text="Latest Promotion" />
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center p-6 m-6">
          <img
            src={GroomingImage}
            className="w-full h-auto object-cover"
            alt="Grooming"
          />
        </div>
      </div>
    </section>
  );
};

export default GroomingBanner;
