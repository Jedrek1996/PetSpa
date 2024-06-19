import Banner1 from "../../assets/images/Banner1.jpg";
import Banner2 from "../../assets/images/Banner2.jpg";

const Banner = () => {
  return (
    <section>
      <div className="flex border-t-4">
        <div className="w-1/2 h-auto">
          <img
            className="bg-black hover:opacity-75 transition-opacity duration-300"
            src={Banner2}
            alt="Banner 2"
          />
        </div>
        <div className="border-r-4"></div>
        <div className="w-1/2 h-auto">
          <img className="" src={Banner1} alt="Banner 1" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
