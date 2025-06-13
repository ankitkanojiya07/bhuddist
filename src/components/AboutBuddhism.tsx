import React from "react";
import { MapPin, Users, Heart, Star, Globe, Phone } from "lucide-react";

const importantLinks = [
  "Destination Wedding",
  "Fairs & Festivals",
  "Indian Wildlife",
  "States of India",
  "Cities of India",
  "MICE Tourism",
  "Currency",
  "Weather",
  "E-visa",
];

const WhoWeAre = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left content - Main content area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-amber-600 text-white p-2 rounded-full">
                <Users size={24} />
              </div>
              <h2 className="text-2xl font-bold text-red-600">Who we are?</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              {/* <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="text-amber-600" size={28} />
                  <h3 className="text-2xl font-bold text-gray-800 m-0">
                    Namaste & Welcome to India!
                  </h3>
                </div>
              </div> */}

              <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
                <p>
                  Spirituality is a state of being. It can connotate different
                  things to different people, but the underlying pursuit remains
                  to connect to a higher version of the self. Spirituality not
                  just helps you rediscover yourself but also unearth the
                  nuances of daily life. While people choose divergent paths to
                  awaken their higher self, traveling acts one of the best
                  catalysts.
                </p>

                <p>
                  Buddhist Tour helps people by taking them on a timeless
                  journey across the Indo Gangetic Plains. Everyone has a
                  spiritual journey that is unique and intimate, which is why we
                  have made it our mission to provide a travel experience that
                  is one of its kinds. Our team consists of trained
                  professionals and erudite experts who have in-depth knowledge
                  of the regions and the way Buddhism connects to each of them.
                </p>

                <p>
                  We ensure to arrange for luxurious and hassle-free travel to
                  Buddhist pilgrimage sites, only with the motto to bring you
                  closer to yourself. We are a people's organization, which is
                  why you can rely on us for your comfort, quality of services
                  and exciting travel itinerary.
                </p>

                <p>
                  Buddhist Tours grows every moment with the trust of the
                  people. We believe in building relationships with you that
                  last for a lifetime, just like the enthralling and memorable
                  experience of the travel that goes beyond words. Our extensive
                  network of representatives works 24*7 to provide you with a
                  seamless pilgrimage to Buddhist destinations across the Indo
                  Gangetic plains.
                </p>

                <p>
                  Seeded with the foundation of providing personalized services
                  on your journey to spirituality, Buddhist Tours offers one of
                  the most competitive rates. Be it hotels or other supplies, we
                  offer the best in class services backed by unparalleled rates.
                </p>

                <p>
                  With Buddhist Tours, we take you through the life of the
                  high-spirited Buddha, in its very essence, while you
                  renaissance through each moment.
                </p>

                {/* <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl mt-8">
                  <div className="text-center">
                    <p className="text-lg mb-4">With best regards</p>
                    <p className="text-xl font-semibold mb-2">Sincerely,</p>
                    <p className="text-2xl font-bold">For Buddhist Tour</p>
                  </div>
                </div> */}
              </div>

              {/* Key highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                  <Globe className="mx-auto text-amber-600 mb-3" size={32} />
                  <h4 className="font-bold text-gray-800 mb-2">
                    Indo Gangetic Plains
                  </h4>
                  <p className="text-sm text-gray-600">
                    Sacred Buddhist destinations
                  </p>
                </div>
                <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                  <Phone className="mx-auto text-amber-600 mb-3" size={32} />
                  <h4 className="font-bold text-gray-800 mb-2">24/7 Support</h4>
                  <p className="text-sm text-gray-600">
                    Dedicated travel assistance
                  </p>
                </div>
                <div className="text-center bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl">
                  <Star className="mx-auto text-amber-600 mb-3" size={32} />
                  <h4 className="font-bold text-gray-800 mb-2">
                    Competitive Rates
                  </h4>
                  <p className="text-sm text-gray-600">
                    Best value spiritual journeys
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar - Important Links */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl sticky top-8">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="text-amber-600" size={24} />
                <h3 className="text-2xl font-bold text-gray-800">
                  Important Link
                </h3>
              </div>
              <div className="border-b-2 border-gray-800 w-16 mb-6"></div>

              <div className="space-y-3">
                {importantLinks.map((link, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-amber-50 transition-colors cursor-pointer border-l-4 border-transparent hover:border-amber-600">
                      <span className="text-gray-700 group-hover:text-amber-700 font-medium">
                        {link}
                      </span>
                      <span className="text-gray-400 group-hover:text-amber-600">
                        ❯
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl text-white text-center">
                <h4 className="font-bold mb-2">Start Your Journey</h4>
                <p className="text-sm opacity-90 mb-3">
                  Discover the path to enlightenment
                </p>
                <button className="bg-white text-amber-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
