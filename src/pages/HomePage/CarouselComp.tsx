import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
const slidesData = [
  {
    text: "A top-tier pet spa offers more than just grooming—it's a retreat for your furry friend. With luxurious baths, gentle massages, and expert grooming services, every visit leaves pets feeling pampered and revitalized. The calming ambiance and attentive care ensure a stress-free experience, making it a favorite destination for pets and their owners alike.",
    user: "Emily",
  },
  {
    text: "Imagine a pet spa where luxury meets compassion. Here, pets indulge in lavish baths with nourishing shampoos and essential oil treatments that promote skin and coat health. Skilled groomers ensure every pet looks their best, while additional services like dental care and spa packages cater to their holistic needs. It's a place where pets receive VIP treatment, leaving them looking and feeling their absolute finest.",
    user: "John",
  },
  {
    text: "Imagine a pet spa where luxury meets compassion. Here, pets indulge in lavish baths with nourishing shampoos and essential oil treatments that promote skin and coat health. Skilled groomers ensure every pet looks their best, while additional services like dental care and spa packages cater to their holistic needs. It's a place where pets receive VIP treatment, leaving them looking and feeling their absolute finest.",
    user: "Charlene",
  },
];
const CarouselComponent = () => {
  return (
    <section
      className="w-full h-96 flex justify-center"
      style={{ background: "var(--color-green)" }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        isPlaying={true}
        interval={3000}
        infinite={true}
      >
        <div className="grid-cols-6 grid gap-60 place-items-center h-full">
          <div className="col-span-1">
            <ButtonBack className="text-white">{"<<"}</ButtonBack>
          </div>
          <div
            className="col-span-4 h-64 text-2xl mt-18 text-center"
            style={{ width: "45rem" }}
          >
            <Slider>
              {slidesData.map((slide, index) => (
                <Slide key={index} index={index}>
                  <div>
                    <p className="text-yellow-50 text-center font-extrabold text-2xl">
                      {slide.text}
                    </p>
                    <div className="mt-4 text-lg text-white">
                      ~ {slide.user}
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>
          </div>
          <div className="col-span-1">
            <ButtonNext className="text-white">{">>"}</ButtonNext>
          </div>
        </div>
      </CarouselProvider>
    </section>
  );
};

export default CarouselComponent;
