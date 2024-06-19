import LandingImage from "../../assets/images/LandingImage.jpg";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import GroomingBanner from "./GroomingBanner";

const HomePage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
        <img
          src={LandingImage}
          className="w-full h-full object-cover"
          alt="Landing Image"
        />
        <div className="absolute bottom-0 left-5 mb-16 ml-4 w-1/2 text-yellow-50 font-thin tracking-widest text-5xl ">
          <p className="text-xl font-bold">
            Pampered Paws & Purrs:
            <br /> Your Pet's Oasis of Relaxation and Wellness
          </p>
        </div>
      </div>
      <Banner />
      <AboutUs />
      <GroomingBanner />
    </section>
  );
};

export default HomePage;
