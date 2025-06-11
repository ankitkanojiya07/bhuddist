import { Calendar, Star, MapPin, Plane, Train, Car, X } from "lucide-react";
import { useState } from "react";

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
      "The Sanchi stupa, built in and around 283 BCE by Ashoka, the famous Indian emperor who converted to Buddhism, is better known for its scriptures. The second largest stupa in India after that of Amravati, the Sanchi stupa is surrounded by a railing with four carved gateways facing towards all four directions. The entire stupa comprises symbolic representation of the gifts of nature as if explaining the Buddhist doctrine by reflecting the people's love for the nature. The use of lotus in stupa symbolises the rise of people from the mud of materialism to the reality and spirituality of life. Similarly, the female tree spirits depicted in the gateways are symbols of fertility.",
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
      "Sankisa lies in central Uttar Pradesh, 47 kms from Farrukhabad. It is believed to be the place where Buddha, along with Brahma and Devraj Indra descended after giving sermons to his mother in heaven. At the spot of descent stands a temple with a statue of the Buddha. The place is also known for a temple dedicated to Bisari Devi and an excavated Ashokan Elephant Pillar. There is also a colossal Shiva Linga here. A large fair is held at Sankisa in the month of Shravan (July-August).",
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
      "Sarnath, where the Buddha preached his first sermon in the Deer Park, contains the most impressive remains, as well as a modern temple. The Dharmarajika, Chaukhandi and Dharnek stupas are outstanding. There are also the remains of a monastery, and the beautifully polished Lion Capital of Ashoka. Sarnath contains a rich library and at the Mula gandha Kutir Vihara there are excellent frescoes by Kosetsu Nosu. The Sarnath Museum, not far from the site, contains some of the finest specimens of Buddhist sculpture.",
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
  {
    title: "Sikkim Tour",
    image:
      "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Sikkim",
    duration: "4-6 Days",
    rating: 4.7,
    price: "₹28,000",
    shortDescription:
      "Himalayan Buddhist monasteries including Rumtek and Enchey, with rare Thankas and Buddhist art objects.",
    fullDescription:
      "Sikkim is situated in the Eastern Himalayas, along the borders of Bhutan (East), Tibet (North), Nepal (West) and West Bengal (South). Its capital, Gangtok has a lot to see, specially the Research Institute of Tibetology, a World centre for the study of Buddhist philosophy & religion and has a rare collection of Thankas, statues and over 200 Buddhist icons. 24kms away, you approach the Rumtek Monastery which houses among the most unique art objects in the world. 3 kms from Gangtok is the Enchey Monastery built almost 200 years ago and was blessed by the great tantric master Lama Druptab Karpa.",
    bestTime: "March to June, September to November",
    accessibility: {
      air: "Bagdogra airport 124 km, helicopter service available",
      rail: "New Jalpaiguri 148 km away",
      road: "110 km from Siliguri, 4 hours drive",
    },
    highlights: [
      "Rumtek Monastery",
      "Tibetology Institute",
      "Enchey Monastery",
      "Himalayan views",
    ],
  },
  {
    title: "Sravasti Tour",
    image:
      "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Uttar Pradesh",
    duration: "2-3 Days",
    rating: 4.6,
    price: "₹15,000",
    shortDescription:
      "Where Buddha spent 25 years at Jetavana Monastery, site of miracles and important Buddhist teachings.",
    fullDescription:
      "Sravasti is located in the Gangetic plains in Gonda district of Uttar Pradesh. Buddha spent 25 years living in the monastery of Jetavana. Many Vinaya rules, Jatakas and Sutras were first discussed at this place. The Buddha is supposed to have astonished rival teachers by performing miracles at Sravasti. It is said that it was in Sravasti that the Buddha transformed Angulimal from a dacoit into a Buddhist monk. He also delivered many important sermons here. King Ashoka erected two pillars 21 meters high on either side of the eastern gateway of the Jetavana monastery.",
    bestTime: "October to March",
    accessibility: {
      air: "Lucknow airport 151 km away",
      rail: "Balrampur railway station 19 km",
      road: "Most convenient via Lucknow",
    },
    highlights: [
      "Jetavana Monastery",
      "Buddha's 25-year residence",
      "Miracle performance site",
      "Ashokan pillars",
    ],
  },
  {
    title: "Varanasi Tour",
    image:
      "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Uttar Pradesh",
    duration: "3-4 Days",
    rating: 4.8,
    price: "₹18,000",
    shortDescription:
      "One of the world's oldest cities, featuring sacred ghats on River Ganges and nearby Sarnath Buddhist site.",
    fullDescription:
      "Varanasi is one of the oldest living cities in the world. The great river banks at Varanasi, built high with eighteenth and nineteenth-century pavilions and palaces, temples and terraces, are lined with an endless chain of stone steps – the ghats. Each of the hundred ghats, big and small, is marked by a lingam, and occupies its own special place in the religious geography of the city. Hindus regard the Ganges as amrita, the elixir of life, which brings purity to the living and salvation to the dead. After the Buddha attained enlightenment in Bodh Gaya he came to Sarnath. Here in the Deer Park, he delivered his first sermon.",
    bestTime: "October to March",
    accessibility: {
      air: "Babatpur airport 22 km, direct flights from major cities",
      rail: "Major rail junction with connections to all cities",
      road: "On NH 2, well connected to rest of country",
    },
    highlights: [
      "Sacred Ganges ghats",
      "Ancient living city",
      "Nearby Sarnath",
      "Spiritual atmosphere",
    ],
  },
];

const FeaturedTours = () => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

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
          {/* Modal Header */}
          <div className="relative">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <X size={20} />
            </button>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <h2 className="text-2xl font-bold text-gray-800">{tour.title}</h2>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin size={16} />
                <span>{tour.location}</span>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {/* Tour Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <Calendar className="mx-auto mb-2 text-red-600" size={24} />
                <div className="font-semibold">{tour.duration}</div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <Star className="mx-auto mb-2 text-red-600" size={24} />
                <div className="font-semibold">{tour.rating}/5</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">
                  {tour.price}
                </div>
                <div className="text-sm text-gray-600">Per Person</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                About This Tour
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {tour.fullDescription}
              </p>
            </div>

            {/* Highlights */}
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

            {/* Best Time & Accessibility */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  Best Time to Visit
                </h3>
                <p className="text-gray-700">{tour.bestTime}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  How to Get There
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Plane
                      size={16}
                      className="text-red-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-gray-700">
                      {tour.accessibility.air}
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Train
                      size={16}
                      className="text-red-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-gray-700">
                      {tour.accessibility.rail}
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Car
                      size={16}
                      className="text-red-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-gray-700">
                      {tour.accessibility.road}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
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
    <section
      id="tours"
      className="py-20 bg-gradient-to-br from-red-50 via-pink-50 to-red-50"
    >
      {/* Tour Modal */}
      <TourModal tour={selectedTour} onClose={() => setSelectedTour(null)} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Best Tours</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore India's most sacred Buddhist pilgrimage sites, each offering
            unique spiritual experiences and deep insights into Buddhist
            heritage and teachings.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">Sacred Site</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="fill-current text-red-500" size={14} />
                    <span className="text-sm font-medium">{tour.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
                  <MapPin size={14} />
                  <span>{tour.location}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {tour.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {tour.shortDescription}
                </p>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar size={16} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="text-xl font-bold text-red-600">
                    {tour.price}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">
                    Key Highlights:
                  </h4>
                  <div className="space-y-1">
                    {tour.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">
                          {highlight}
                        </span>
                      </div>
                    ))}
                    <div className="text-red-600 text-xs mt-1">
                      +{tour.highlights.length - 2} more highlights
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 pt-4 border-t">
                  <button
                    onClick={() => setSelectedTour(tour)}
                    className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
                  >
                    More Info
                  </button>
                  <button className="flex-1 border-2 border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-colors font-medium text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-medium hover:bg-red-600 hover:text-white transition-colors">
            View All Sacred Sites
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
