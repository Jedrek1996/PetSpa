import ClickableButton from "../../components/Buttons/ClickableButton";
import GroomingImage from "../../assets/images/GroomingBannerImg.png";

const GroomingBanner = () => {
  return (
    <section className=" bg-yellow-50" style={{ color: "var(--color-pink)" }}>
      <div className=" mx-auto flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-center items-center mx-28 w-1/2">
          <h5 className="my-6 text-3xl sm:p-10 sm:text-2xl md:text-3xl font-semibold text-center md:text-left">
            ˚˚ؘGrooming is our specialty༄♡˚
          </h5>
          <p
            className="text-xl mb-10 font-extralight "
            style={{ color: "var(--color-light-pink)" }}
          >
            Discover our comprehensive grooming menu, offering spa sessions,
            specialized treatments, and a host of other services tailored to
            your feline friend's needs! Take advantage of our affordable rates
            and pet taxi services for a stress-free grooming experience.
          </p>

          <span className="space-x-14 sm:p-5">
            <ClickableButton text="Spa Menu" />
            <ClickableButton text="Latest Promtion" />
          </span>
        </div>

        <div className="w:1/3 flex justify-center p-6 mt-6">
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
