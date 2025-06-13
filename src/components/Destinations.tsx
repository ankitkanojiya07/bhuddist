import { Users, Star, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "India",
    image:
      "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    title: "India Golden Triangle Tour",
  },
  {
    name: "Sri Lanka",
    image:
      "https://images.pexels.com/photos/3308588/pexels-photo-3308588.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    title: "Golden Triangle Trip with Varanasi",
  },
  {
    name: "Myanmar",
    image:
      "https://images.pexels.com/photos/3889853/pexels-photo-3889853.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    title: "Luxury Rajasthan Tour Package",
  },
  {
    name: "Cambodia",
    image:
      "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    title: "Golden Triangle Heritage Tour",
  },
  {
    name: "Bhutan",
    image:
      "https://images.pexels.com/photos/12944672/pexels-photo-12944672.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    title: "Golden Triangle tour with Khajuraho",
  },
  {
    name: "Thailand",
    image:
      "https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    title: "Rajasthan Culture Tour",
  },
];

const travelThemes = [
  "Heritage Tours of India",
  "India Art & Culture Tours",
  "Indian Wildlife with Game Drive",
  "India Yoga & Wellness Tours",
  "India Food & Culinary Tours",
  "Adventure Tours",
  "Festival Tours",
  "India Spiritual Tours",
  "Easter Holidays",
  "Thanksgiving Vacations",
];

const TravelDestinations = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side - Travel Themes */}
      <div className="w-1/2 relative">
        <div
          className="h-full bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 p-8 text-white h-full flex flex-col justify-start pt-16">
            <h2 className="text-4xl font-bold mb-4">Travel Themes</h2>
            <p className="text-lg mb-8 opacity-90">
              Inspire you to explore India tours beyond the usual well-known
              locations.
            </p>

            <div className="space-y-3">
              {travelThemes.map((theme, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-white/90 hover:text-white cursor-pointer transition-colors"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium">{theme}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Query Button */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
          <button className="bg-red-500 text-white px-3 py-4 rounded-l-lg hover:bg-red-600 transition-colors transform -rotate-90 origin-center">
            <span className="text-xs font-medium tracking-wider">
              SEND A QUERY
            </span>
          </button>
        </div>
      </div>

      {/* Right Side - Destination Cards */}
      <div className="w-1/2 border-l border-gray-200">
        <div className="grid grid-cols-2 gap-1 h-full">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                  <div className="text-right">
                    <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                      {destination.name}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-2 leading-tight">
                      {destination.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-90">View Details</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Button */}
        <div className="fixed bottom-8 right-8">
          {/* <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-600 transition-colors shadow-lg">
            CHAT
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TravelDestinations;
