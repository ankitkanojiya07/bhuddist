import React from "react";
import {
  MapPin,
  Users,
  Star,
  Calendar,
  Camera,
  Mountain,
  Compass,
} from "lucide-react";

const destinations = [
  {
    name: "India - Buddhist Circuit",
    image:
      "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The birthplace of Buddhism, India offers the most sacred pilgrimage sites where Buddha lived, taught, and attained enlightenment.",
    longDescription:
      "India is the spiritual heart of Buddhism, where Prince Siddhartha Gautama became the Buddha over 2,500 years ago. The Buddhist Circuit encompasses the most sacred sites including Bodh Gaya, Sarnath, Kushinagar, and Ajanta-Ellora caves.",
    highlights: [
      "Bodh Gaya - Enlightenment Site",
      "Sarnath - First Sermon Location",
      "Ajanta & Ellora Caves",
      "Kushinagar - Final Rest",
      "Kapilvastu - Childhood Home",
      "Nalanda University",
    ],
    tours: 15,
    rating: 4.9,
    bestTime: "October to March",
    duration: "10-14 Days",
    difficulty: "Easy",
    culture: "Ancient Buddhist heritage with magnificent temples and stupas",
  },
  {
    name: "Sri Lanka",
    image:
      "https://images.pexels.com/photos/3308588/pexels-photo-3308588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Ancient Buddhist kingdom with magnificent temples, sacred relics, and a living Buddhist tradition spanning over 2,000 years.",
    longDescription:
      "Sri Lanka is home to one of the oldest Buddhist traditions in the world. The island preserves ancient Buddhist relics including the Sacred Tooth Relic of Buddha, and features stunning temple complexes carved into rock faces.",
    highlights: [
      "Temple of Tooth Relic",
      "Sigiriya Rock Fortress",
      "Dambulla Cave Temple",
      "Anuradhapura Ancient City",
      "Polonnaruwa",
      "Mihintale",
    ],
    tours: 8,
    rating: 4.7,
    bestTime: "December to March",
    duration: "8-12 Days",
    difficulty: "Easy to Moderate",
    culture: "Theravada Buddhism with colorful festivals and rituals",
  },
  {
    name: "Myanmar",
    image:
      "https://images.pexels.com/photos/3889853/pexels-photo-3889853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Land of golden pagodas with over 10,000 ancient Buddhist temples and a deeply spiritual culture.",
    longDescription:
      "Myanmar offers an authentic Buddhist experience with thousands of temples in Bagan, magnificent golden pagodas, and monasteries where ancient traditions continue unchanged for centuries.",
    highlights: [
      "Shwedagon Pagoda",
      "Bagan Temple Plains",
      "Mandalay Hill",
      "Inle Lake Monasteries",
      "Golden Rock Pagoda",
      "Mingun Pagoda",
    ],
    tours: 6,
    rating: 4.9,
    bestTime: "November to February",
    duration: "9-12 Days",
    difficulty: "Easy to Moderate",
    culture: "Traditional Theravada Buddhism with morning alms ceremonies",
  },
  {
    name: "Cambodia",
    image:
      "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Home to the magnificent Angkor Wat complex and rich Khmer Buddhist heritage.",
    longDescription:
      "Cambodia showcases the grandest Buddhist temple complex in the world at Angkor Wat, along with numerous other temples that demonstrate the sophisticated Khmer civilization and its deep Buddhist roots.",
    highlights: [
      "Angkor Wat Complex",
      "Bayon Temple",
      "Ta Prohm Temple",
      "Silver Pagoda",
      "Banteay Srei",
      "Preah Khan",
    ],
    tours: 5,
    rating: 4.6,
    bestTime: "November to March",
    duration: "6-10 Days",
    difficulty: "Easy to Moderate",
    culture: "Khmer Buddhism with magnificent temple architecture",
  },
  {
    name: "Bhutan",
    image:
      "https://images.pexels.com/photos/12944672/pexels-photo-12944672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The last Shangri-La with pristine Buddhist culture and stunning Himalayan monasteries.",
    longDescription:
      "Bhutan is the only country that measures Gross National Happiness and maintains a carbon-negative status. This Himalayan kingdom preserves pure Vajrayana Buddhist traditions in spectacular mountain settings.",
    highlights: [
      "Tigers Nest Monastery",
      "Punakha Dzong",
      "Thimphu Temples",
      "Bumthang Valley",
      "Trongsa Dzong",
      "Paro Dzong",
    ],
    tours: 4,
    rating: 4.9,
    bestTime: "March to May, September to November",
    duration: "7-10 Days",
    difficulty: "Moderate to Challenging",
    culture: "Vajrayana Buddhism with colorful festivals and dzongs",
  },
  {
    name: "Thailand",
    image:
      "https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Vibrant Theravada Buddhist culture with ornate temples and renowned meditation centers.",
    longDescription:
      "Thailand offers both magnificent temple architecture in Bangkok and peaceful meditation retreats in the countryside. The country is known for its welcoming monks and accessible meditation practices.",
    highlights: [
      "Wat Pho Temple",
      "Golden Buddha Temple",
      "Wat Arun",
      "Meditation Retreats",
      "Floating Markets",
      "Ayutthaya Ruins",
    ],
    tours: 7,
    rating: 4.5,
    bestTime: "November to February",
    duration: "7-10 Days",
    difficulty: "Easy",
    culture: "Theravada Buddhism with meditation and wellness focus",
  },
];

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#ed3237] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Buddhist Destinations
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover sacred lands where Buddha walked, taught, and transformed
            the world. Each destination offers unique insights into Buddhist
            heritage and spiritual practices.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <MapPin size={16} />
              <span>6 Countries</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <Camera size={16} />
              <span>Sacred Sites</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
              <Mountain size={16} />
              <span>Spiritual Journeys</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">
                      {destination.tours} Tours
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="fill-current text-red-400" size={14} />
                      <span className="text-sm font-medium">
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      {destination.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar size={16} />
                        <span>{destination.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Compass size={16} />
                        <span>{destination.difficulty}</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Best Time: {destination.bestTime}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Highlights:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {destination.highlights
                        .slice(0, 4)
                        .map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">
                              {highlight}
                            </span>
                          </div>
                        ))}
                    </div>
                    {destination.highlights.length > 4 && (
                      <div className="text-red-600 text-xs mt-2">
                        +{destination.highlights.length - 4} more sites
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-1">
                      <Star className="fill-current text-red-400" size={16} />
                      <span className="text-sm font-medium text-gray-700">
                        {destination.rating} ({destination.tours} tours
                        available)
                      </span>
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors text-sm font-medium">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin Your Buddhist Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Each destination offers a unique perspective on Buddhist teachings
            and culture
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            View All Tours
          </button>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;
