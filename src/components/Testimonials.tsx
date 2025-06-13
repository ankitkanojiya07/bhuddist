import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "California, USA",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    tour: "Buddhist Circuit India",
    testimonial:
      "This journey transformed my understanding of Buddhism and myself. Walking in Buddha's footsteps at Bodh Gaya was profoundly moving. Our guide was incredibly knowledgeable and the entire experience was spiritually enriching.",
    date: "2 months ago",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    tour: "Golden Pagodas Myanmar",
    testimonial:
      "Myanmar exceeded all expectations. The Shwedagon Pagoda at sunset was breathtaking, and the thousands of temples in Bagan created an otherworldly experience. Perfect organization and authentic cultural immersion.",
    date: "1 month ago",
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    image:
      "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    tour: "Sri Lankan Heritage",
    testimonial:
      "The Temple of the Tooth Relic was absolutely magnificent. Every moment of this tour was carefully planned, from the ancient caves of Dambulla to the majestic Sigiriya Rock. Highly recommend for spiritual seekers.",
    date: "3 weeks ago",
  },
  {
    name: "David Park",
    location: "Seoul, Korea",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    tour: "Bhutan Sacred Journey",
    testimonial:
      "Bhutan is truly the last Shangri-La. The Tigers Nest Monastery trek was challenging but incredibly rewarding. The pristine Buddhist culture and hospitality of the Bhutanese people made this unforgettable.",
    date: "2 weeks ago",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoSliding) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoSliding]);

  const nextSlide = () => {
    setIsAutoSliding(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAutoSliding(true), 10000); // Resume auto-slide after 10s
  };

  const prevSlide = () => {
    setIsAutoSliding(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoSliding(true), 10000); // Resume auto-slide after 10s
  };

  const goToSlide = (index) => {
    setIsAutoSliding(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoSliding(true), 10000); // Resume auto-slide after 10s
  };

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            What Our Pilgrims Say
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Read testimonials from fellow spiritual travelers who have
            experienced life-changing journeys through our carefully curated
            Buddhist tours.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-xl shadow-md p-6 mx-auto max-w-2xl">
                    <div className="flex items-start space-x-3 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div>
                            <h4 className="font-semibold text-gray-800 text-sm">
                              {testimonial.name}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {testimonial.location}
                            </p>
                          </div>
                          <div className="text-xs text-gray-400">
                            {testimonial.date}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="fill-current text-amber-400"
                                size={12}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">
                            • {testimonial.tour}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <Quote
                        className="absolute -top-1 -left-1 text-amber-200"
                        size={20}
                      />
                      <p className="text-gray-600 leading-relaxed text-sm pl-5 italic">
                        "{testimonial.testimonial}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <ChevronLeft
              className="text-gray-600 group-hover:text-amber-600"
              size={20}
            />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <ChevronRight
              className="text-gray-600 group-hover:text-amber-600"
              size={20}
            />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? "bg-amber-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
