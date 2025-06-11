import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1920&auto=format&fit=crop",
    title: "Buddha's Sacred Journey",
    cta: "Begin Your Journey",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1591794740616-19e8e29ee5c1?q=80&w=1920&auto=format&fit=crop",
    title: "Temple of Serenity",
    cta: "Find Peace",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1920&auto=format&fit=crop",
    title: "Path to Enlightenment",
    cta: "Discover Wisdom",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1920&auto=format&fit=crop",
    title: "Meditation Sanctuary",
    cta: "Join Meditation",
  },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image with Parallax Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-red-900/40 to-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="text-center">
                  <div
                    className={`space-y-8 text-white transform transition-all duration-1000 delay-300 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    {/* Buddha Symbol */}
                    <div className="text-red-400 text-6xl mb-6 opacity-80">
                      ☸
                    </div>

                    <h1 className="text-4xl lg:text-7xl font-bold leading-tight drop-shadow-2xl">
                      {slide.title}
                    </h1>

                    <div className="pt-8">
                      <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-12 py-4 rounded-full font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-1 text-lg border border-red-500/30">
                        {slide.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 group pointer-events-auto border border-white/20"
        >
          <ChevronLeft
            size={24}
            className="group-hover:-translate-x-1 transition-transform"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 group pointer-events-auto border border-white/20"
        >
          <ChevronRight
            size={24}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>

        {/* Bottom Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-6 pointer-events-auto">
          {/* Slide Indicators */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-red-500 w-12 h-3"
                    : "bg-white/50 hover:bg-white/70 w-3 h-3"
                } rounded-full`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <button
            onClick={toggleAutoPlay}
            className="bg-white/10 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>

          {/* Slide Counter */}
          <div className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20">
            <span className="text-sm font-medium">
              {String(currentSlide + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
