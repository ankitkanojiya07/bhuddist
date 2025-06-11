import { Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "India",
    image:
      "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Birthplace of Buddhism with sacred sites where Buddha lived, taught, and attained enlightenment.",
    highlights: [
      "Bodh Gaya - Enlightenment Site",
      "Sarnath - First Sermon",
      "Kushinagar - Final Rest",
      "Ajanta & Ellora Caves",
    ],
    tours: 15,
    rating: 4.9,
  },
  {
    name: "Sri Lanka",
    image:
      "https://images.pexels.com/photos/3308588/pexels-photo-3308588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Ancient Buddhist kingdom with magnificent temples and sacred relics.",
    highlights: [
      "Temple of Tooth Relic",
      "Sigiriya Rock",
      "Dambulla Cave Temple",
      "Anuradhapura",
    ],
    tours: 12,
    rating: 4.8,
  },
  {
    name: "Myanmar",
    image:
      "https://images.pexels.com/photos/3889853/pexels-photo-3889853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Land of golden pagodas with over 10,000 ancient Buddhist temples.",
    highlights: [
      "Shwedagon Pagoda",
      "Bagan Plains",
      "Mandalay Hill",
      "Inle Lake Monasteries",
    ],
    tours: 10,
    rating: 4.7,
  },
  {
    name: "Cambodia",
    image:
      "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Home to Angkor Wat and rich Khmer Buddhist heritage.",
    highlights: [
      "Angkor Wat Complex",
      "Bayon Temple",
      "Ta Prohm",
      "Silver Pagoda",
    ],
    tours: 9,
    rating: 4.6,
  },
  {
    name: "Bhutan",
    image:
      "https://images.pexels.com/photos/12944672/pexels-photo-12944672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Last Shangri-La with pristine Buddhist culture and stunning Himalayan monasteries.",
    highlights: [
      "Tigers Nest Monastery",
      "Punakha Dzong",
      "Thimphu Temples",
      "Bumthang Valley",
    ],
    tours: 8,
    rating: 4.9,
  },
  {
    name: "Thailand",
    image:
      "https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Vibrant Theravada Buddhist culture with ornate temples and meditation centers.",
    highlights: [
      "Wat Pho Temple",
      "Golden Buddha",
      "Floating Markets",
      "Meditation Retreats",
    ],
    tours: 14,
    rating: 4.8,
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Sacred Buddhist Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the most significant Buddhist sites across Asia, where
            ancient wisdom meets breathtaking architecture and serene spiritual
            environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="fill-current text-red-500" size={14} />
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
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users size={14} />
                    <span className="text-sm">{destination.tours} tours</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Key Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights
                      .slice(0, 2)
                      .map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-red-50 text-red-700 px-2 py-1 rounded-full text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    {destination.highlights.length > 2 && (
                      <span className="text-red-600 text-xs">
                        +{destination.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t">
                  <Link
                    to="/tours"
                    className="bg-red-600 text-white px-6 py-2 rounded-full text-sm hover:bg-red-700 transition-colors inline-block"
                  >
                    View Tours
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
