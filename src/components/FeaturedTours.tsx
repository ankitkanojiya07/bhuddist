import {
  Calendar,
  Star,
  MapPin,
  Plane,
  Train,
  Car,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

interface Tour {
  title: string;
  image: string;
  location: string;
  duration: string;
  rating: number;
  price: string;
  shortDescription: string;
  fullDescription: string;
  bestTime: string;
  accessibility: {
    air: string;
    rail: string;
    road: string;
  };
  highlights: string[];
}

const tours: Tour[] = [
  {
    title: "Golden Triangle Tour with Varanasi",
    image:
      "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Delhi - Jaipur - Agra - Varanasi - Delhi",
    duration: "08 Days",
    rating: 4.8,
    price: "₹45,000",
    shortDescription:
      "Experience India's golden triangle with the spiritual essence of Varanasi, combining iconic monuments with sacred traditions.",
    fullDescription:
      "This comprehensive tour takes you through India's most famous tourist circuit enhanced with the spiritual depth of Varanasi. Visit the Taj Mahal, explore the pink city of Jaipur, discover Delhi's rich history, and experience the ancient spiritual traditions of Varanasi on the banks of the sacred Ganges.",
    bestTime: "October to March",
    accessibility: {
      air: "Delhi airport with international connections",
      rail: "Connected by major railway networks",
      road: "Well-connected highways throughout",
    },
    highlights: [
      "Taj Mahal at sunrise",
      "Jaipur's Pink City",
      "Ganges Aarti ceremony",
      "Red Fort Delhi",
    ],
  },
  {
    title: "Kerala Backwater Houseboat Tour",
    image:
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Cochin - Munnar - Kodaikanal",
    duration: "13 Days",
    rating: 4.7,
    price: "₹38,000",
    shortDescription:
      "Cruise through Kerala's pristine backwaters in traditional houseboats while experiencing God's Own Country.",
    fullDescription:
      "Immerse yourself in the tranquil backwaters of Kerala aboard traditional houseboats. This tour combines the lush hill stations of Munnar and Kodaikanal with the serene waterways, spice plantations, and cultural richness of Kerala, offering a perfect blend of relaxation and exploration.",
    bestTime: "September to March",
    accessibility: {
      air: "Cochin International Airport",
      rail: "Ernakulam Junction railway station",
      road: "NH 66 coastal highway access",
    },
    highlights: [
      "Traditional houseboat stay",
      "Munnar tea gardens",
      "Spice plantation tours",
      "Kathakali performances",
    ],
  },
  {
    title: "South India Tour Package",
    image:
      "https://images.pexels.com/photos/3308588/pexels-photo-3308588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Chennai - Mahabalipuram",
    duration: "17 Days",
    rating: 4.9,
    price: "₹52,000",
    shortDescription:
      "Discover South India's rich cultural heritage, ancient temples, and architectural marvels from Chennai to Mahabalipuram.",
    fullDescription:
      "Explore the cultural heart of South India with this comprehensive tour covering ancient temples, UNESCO World Heritage sites, traditional arts, and architectural wonders. From the bustling city of Chennai to the historic shore temples of Mahabalipuram, experience the diverse traditions of Tamil Nadu.",
    bestTime: "November to February",
    accessibility: {
      air: "Chennai International Airport",
      rail: "Chennai Central railway junction",
      road: "East Coast Road connectivity",
    },
    highlights: [
      "Shore Temple complex",
      "Kapaleeshwarar Temple",
      "Traditional silk weaving",
      "Classical dance performances",
    ],
  },
  {
    title: "Sanchi Tour",
    image:
      "https://images.pexels.com/photos/3889853/pexels-photo-3889853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Madhya Pradesh",
    duration: "2-3 Days",
    rating: 4.8,
    price: "₹12,000",
    shortDescription:
      "Visit the famous Sanchi Stupa built by Emperor Ashoka in 283 BCE, featuring symbolic Buddhist architecture.",
    fullDescription:
      "The Sanchi stupa, built in and around 283 BCE by Ashoka, the famous Indian emperor who converted to Buddhism, is better known for its scriptures. The second largest stupa in India after that of Amravati, the Sanchi stupa is surrounded by a railing with four carved gateways facing towards all four directions.",
    bestTime: "October to April",
    accessibility: {
      air: "Bhopal airport connected to all major cities",
      rail: "Vidisha railway station, 10 km away",
      road: "46 km from Bhopal, well connected",
    },
    highlights: [
      "Second largest stupa in India",
      "Four carved gateways",
      "Symbolic Buddhist architecture",
      "Emperor Ashoka's creation",
    ],
  },
  {
    title: "Sankisa Tour",
    image:
      "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Uttar Pradesh",
    duration: "1-2 Days",
    rating: 4.5,
    price: "₹8,000",
    shortDescription:
      "Sacred site where Buddha descended from heaven after preaching to his mother, featuring Ashokan Elephant Pillar.",
    fullDescription:
      "Sankisa lies in central Uttar Pradesh, 47 kms from Farrukhabad. It is believed to be the place where Buddha, along with Brahma and Devraj Indra descended after giving sermons to his mother in heaven.",
    bestTime: "October to March",
    accessibility: {
      air: "Nearest airport is Agra",
      rail: "46 km diversion from Kanpur highway",
      road: "Connected via Kanpur-Agra highway",
    },
    highlights: [
      "Buddha's descent site",
      "Ashokan Elephant Pillar",
      "Bisari Devi temple",
      "Annual Shravan fair",
    ],
  },
  {
    title: "Sarnath Tour",
    image:
      "https://images.pexels.com/photos/3308588/pexels-photo-3308588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Varanasi, UP",
    duration: "1-2 Days",
    rating: 4.9,
    price: "₹10,000",
    shortDescription:
      "Where Buddha preached his first sermon in the Deer Park, containing impressive stupas and Lion Capital.",
    fullDescription:
      "Sarnath, where the Buddha preached his first sermon in the Deer Park, contains the most impressive remains, as well as a modern temple. The Dharmarajika, Chaukhandi and Dharnek stupas are outstanding.",
    bestTime: "October to March",
    accessibility: {
      air: "Varanasi airport with daily connections to major cities",
      rail: "Varanasi is major rail junction",
      road: "Just 10 km from Varanasi",
    },
    highlights: [
      "Buddha's first sermon site",
      "Lion Capital of Ashoka",
      "Dharmarajika Stupa",
      "Sarnath Museum",
    ],
  },
];

const TourSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!selectedTour) {
        // Only auto-scroll when modal is not open
        setCurrentIndex((prevIndex) => (prevIndex + 1) % tours.length);
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [selectedTour]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tours.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + tours.length) % tours.length
    );
  };

  // Get visible tours (3 cards)
  const getVisibleTours = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % tours.length;
      visible.push({ ...tours[index], originalIndex: index });
    }
    return visible;
  };

  const TourModal = ({
    tour,
    onClose,
  }: {
    tour: Tour | null;
    onClose: () => void;
  }) => {
    if (!tour) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <X size={20} />
            </button>
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3">
              <h2 className="text-2xl font-bold text-gray-800">{tour.title}</h2>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin size={16} />
                <span>{tour.location}</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Calendar className="mx-auto mb-2 text-red-600" size={24} />
                <div className="font-semibold">{tour.duration}</div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Star className="mx-auto mb-2 text-red-600" size={24} />
                <div className="font-semibold">{tour.rating}/5</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">
                  {tour.price}
                </div>
                <div className="text-sm text-gray-600">Per Person</div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                About This Tour
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {tour.fullDescription}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Best Time to Visit
              </h3>
              <p className="text-gray-700">{tour.bestTime}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                How to Reach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <Plane className="text-red-600 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-gray-800">By Air</div>
                    <div className="text-sm text-gray-600">
                      {tour.accessibility.air}
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Train className="text-red-600 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-gray-800">By Rail</div>
                    <div className="text-sm text-gray-600">
                      {tour.accessibility.rail}
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Car className="text-red-600 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-gray-800">By Road</div>
                    <div className="text-sm text-gray-600">
                      {tour.accessibility.road}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Tour Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
              <button className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                Book This Tour
              </button>
              <button
                onClick={onClose}
                className="flex-1 border-2 border-red-600 text-red-600 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <TourModal tour={selectedTour} onClose={() => setSelectedTour(null)} />

        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Best Tours
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore India's most sacred Buddhist pilgrimage sites, each
              offering unique spiritual experiences and deep insights into
              Buddhist heritage and teachings.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>

            {/* Cards Container */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-16">
              {getVisibleTours().map((tour, index) => (
                <div
                  key={tour.originalIndex}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group"
                  style={{ transform: "translateZ(0)" }}
                >
                  {/* Card Wrapper with Transform */}
                  <div className="transform hover:-translate-y-2 transition-transform duration-500 h-full rounded-2xl overflow-hidden">
                    {/* Image Card */}
                    <div className="relative w-full h-48 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-50 via-black via-opacity-10 to-transparent z-10" />

                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-white bg-opacity-95 backdrop-blur-sm rounded-full px-3 py-1 z-20">
                        <div className="flex items-center space-x-1">
                          <Star
                            className="fill-current text-red-600"
                            size={14}
                          />
                          <span className="text-sm font-semibold">
                            {tour.rating}
                          </span>
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full z-20">
                        <span className="text-sm font-medium">
                          {tour.duration}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                        {tour.title}
                      </h3>

                      <div className="flex items-center space-x-2 text-gray-600 mb-3">
                        <MapPin size={16} />
                        <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                          {tour.location}
                        </span>
                      </div>

                      <p
                        className="text-gray-600 mb-4 leading-relaxed text-sm overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {tour.shortDescription}
                      </p>

                      {/* Action Button */}
                      <div className="flex justify-center">
                        <button
                          onClick={() => setSelectedTour(tour)}
                          className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-800 transition-all duration-300">
                View All Sacred Sites
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSlider;
