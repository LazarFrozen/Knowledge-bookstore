import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: "src/data/carousel/carousel-item-1.jpg" },
    { url: "src/data/carousel/carousel-item-2.jpg" },
    { url: "src/data/carousel/carousel-item-3.jpg" },
    { url: "src/data/carousel/carousel-item-4.jpg" },
    { url: "src/data/carousel/carousel-item-5.jpg" },
  ];

  function handlePreviousSlide() {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function handleNextSlide() {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function handleGoToslide(slideIndex) {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="relative h-full">
      <img
        src={`${slides[currentIndex].url}`}
        alt="carousel images"
        className="h-full w-full"
      />
      <FaArrowAltCircleLeft
        onClick={handlePreviousSlide}
        className="text-secondaryColor absolute left-7 top-2/4 cursor-pointer rounded-full border-2 text-5xl"
      />
      <FaArrowAltCircleRight
        onClick={handleNextSlide}
        className="text-secondaryColor absolute right-7 top-2/4 cursor-pointer rounded-full border-2 text-5xl"
      />
      <div className="absolute inset-x-0 -bottom-12 flex justify-center gap-6">
        {slides.map((slide, slideIndex) => (
          <div className="shadow-2xl shadow-gray-800" key={slideIndex}>
            <img
              src={slide.url}
              alt="slider images"
              className="h-24 w-48 cursor-pointer transition-all hover:scale-110"
              key={slideIndex}
              onClick={() => handleGoToslide(slideIndex)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
