import {
  MapPin,
  Clock,
  Star,
  Plane,
  Train,
  Car,
  Camera,
  Mountain,
  Users,
} from "lucide-react";

const PackagesPage = () => {
  const packages = [
    {
      title: "Ajanta and Ellora Tour",
      description:
        "Ajanta & Ellora are world famous for the rock cut temples. The 30 rock caves of Ajanta are in the shape of a mammoth horse-shoe, nestling in an inner fold of the Sahyadri Hills.",
      detailedDescription:
        "In Ellora, there are 34 cave temples, 12 Mahayana Buddhist caves, 17 Hindu caves and 5 caves of the Jain faith. 22 more caves dedicated to Shiva were recently discovered. Ajanta & Ellora is a protected monument site under the Archaeological Survey of India and has been included in the World Heritage list of monuments.",
      bestTime: "October to March",
      temperature: "Max: 34°C, Min: 12°C",
      rainfall: "800mm from June to September",
      duration: "3-4 Days",
      price: "₹18,000",
      rating: 4.8,
      highlights: [
        "UNESCO World Heritage Sites",
        "30 Rock-cut Caves at Ajanta",
        "34 Cave Temples at Ellora",
        "Buddhist, Hindu & Jain Monuments",
      ],
      transportation: {
        air: "Aurangabad (108 km)",
        rail: "Jalgaon (58 km on Central Railway)",
        road: "99 km from Aurangabad, 487 km from Mumbai",
      },
      image: "/images/ajanta-ellora.jpg",
    },
    {
      title: "Nagarjunakonda Tour",
      description:
        "As the area was threatened with submergence by the reservoir, an Archaeological Survey team made determined efforts to virtually transplant nine monuments from the valley onto Nagarjunakonda.",
      detailedDescription:
        "The hill forms an island in the middle of the reservoir. A museum at Nagarjunakonda contains Buddhadatu or Buddhist relics. Tiger sanctuary: the largest wildlife sanctuary in Andhra Pradesh lies between Nagarjunasagar and upstream Srisailam. Spread over 3,500 sq.kms, it encompasses thickly wooded hills in five districts- Nalgonda, Kurnool, Mahboobnagar, Guntur and Prakasam.",
      bestTime: "October to March",
      temperature: "Pleasant winter climate",
      duration: "2-3 Days",
      price: "₹12,000",
      rating: 4.5,
      highlights: [
        "Buddhist Relics Museum",
        "Nine Transplanted Monuments",
        "Tiger Sanctuary (3,500 sq.km)",
        "Island Museum",
      ],
      transportation: {
        air: "Hyderabad (149 km)",
        rail: "Macherla (22 km on Hyderabad-Guntur line)",
        road: "170 km from Hyderabad, well connected",
      },
      image: "/images/nagarjunakonda.jpg",
    },
    {
      title: "Orissa Buddhism Tour",
      description:
        "Dhauli: Dating from 260 BC the Dhauli edicts give detailed instructions to Ashoka's administrators to rule his subjects with gentleness and fairness.",
      detailedDescription:
        "Driving down the Puri-Konark Highway from Bhubaneshwar one comes across Dhauli hill on the banks of the River Daya. Surrounded by the soothing greenery of paddy fields, lies the 3rd Century BC Ashokan Rock Edict. The Peace Pagoda built in collaboration with the Kalinga-Japanese Buddhist Sangha is completely modern and an excellent foil.",
      bestTime: "October to March",
      temperature: "Pleasant tropical climate",
      duration: "4-5 Days",
      price: "₹19,000",
      rating: 4.7,
      highlights: [
        "Dhauli Ashokan Edicts (260 BC)",
        "Lalitagiri, Ratnagiri, Udaigiri",
        "Buddhist University Ruins",
        "Peace Pagoda",
      ],
      transportation: {
        air: "Bhubaneshwar (daily flights to major cities)",
        rail: "Super fast trains to major cities",
        road: "Well connected by national highways",
      },
      locations: [
        {
          name: "Lalitagiri",
          description:
            "Earliest Buddhist complex of 1st century A.D. with huge brick monastery and votive stupas on a rugged sandstone hill.",
        },
        {
          name: "Ratnagiri",
          description:
            "Great centre of Vajrayana Buddhism till 12th century in the fertile Birupa river valley, 90 kms from Bhubaneshwar.",
        },
        {
          name: "Udaigiri",
          description:
            "5 kms from Ratnagiri, with remains of sprawling monastery and rock-cut sculptures adorning the hilltop.",
        },
      ],
      image: "/images/orissa-buddhism.jpg",
    },
    {
      title: "Rajgir Tour",
      description:
        "Rajgir, which means 'the royal palace', is a place of great sanctity and significance for the Buddhists and Jains. Lord Buddha had delivered many of His sermons over here during His 12-years stay at Rajgir.",
      detailedDescription:
        "Situated 100 kilometers southeast of Patna, the state capital of Bihar, the city of Rajgir is also famous for health and winter resort with its warm water ponds. Lord Buddha spent 12 years in Rajgir and delivered many sermons here.",
      bestTime: "October to March",
      temperature: "Cold and Pleasant winter, Hot summer",
      duration: "2-3 Days",
      price: "₹10,000",
      rating: 4.6,
      highlights: [
        "Griddhakuta (Vulture's Peak)",
        "Venuvana Monastery",
        "Sattapani Caves",
        "Hot Springs with medicinal value",
      ],
      transportation: {
        air: "Patna (100 km)",
        rail: "Bakhtiyarpur (54 km on Delhi-Howrah line)",
        road: "Excellent roads to Patna, Bodh Gaya",
      },
      attractions: [
        {
          name: "Griddhakuta or Vulture's Peak",
          description:
            "Sacred site where Buddha set in motion His second wheel of law and preached for three months in rainy season.",
        },
        {
          name: "Venuvana",
          description:
            "Historical monastery built by King Bimbisara for Lord Buddha to reside.",
        },
        {
          name: "Sattapani Caves",
          description:
            "Sacred site where first Buddhist council was convened in 483 BCE after Buddha's death.",
        },
        {
          name: "Hot Springs",
          description:
            "Situated at foot of Vaibhava hill, filled with water from seven streams with medicinal value.",
        },
      ],
      festivals: [
        "Buddha Jayanti (May)",
        "Malamasa Mela",
        "Rajgir Dance Festival",
      ],
      image: "/images/rajgir.jpg",
    },
    {
      title: "Vaishali Tour",
      description:
        "Small village surrounded by banana and mango groves as well as rice fields. Excavations have brought to light an impressive historical past with one of the world's first democratic republics.",
      detailedDescription:
        "Historians maintain that one of the world's first democratic republics with an elected assembly flourished here in the 6th century B.C. Lord Buddha visited Vaishali frequently and at Kolhua preached his last sermon. Emperor Ashoka erected one of his famous lion pillars here.",
      bestTime: "October to March",
      temperature: "Pleasant winter climate",
      duration: "2-3 Days",
      price: "₹9,000",
      rating: 4.4,
      highlights: [
        "Buddha's Last Sermon Site",
        "First Democratic Republic",
        "Ashokan Lion Pillar",
        "Vishwa Shanti Stupa",
      ],
      transportation: {
        air: "Patna (55 km)",
        rail: "Hajipur (35 km)",
        road: "Regular buses from Patna and major Bihar towns",
      },
      significance: [
        "Lord Buddha's last sermon at Kolhua",
        "Second great Buddhist council venue",
        "Lord Mahavira's birthplace (527 BC)",
        "Women admitted to Holy Order here",
      ],
      image: "/images/vaishali.jpg",
    },
    {
      title: "Allahabad Tour",
      description:
        "Allahabad stands at the confluence of two of India's holiest rivers, the Ganga and the Yamuna. Sangam, as the confluence is called, is the venue of many sacred fairs and rituals.",
      detailedDescription:
        "Hindu mythology has it that Lord Brahma chose this land where three rivers would flow into a quiet confluence. A third mythical Saraswati river gives the confluence its name 'Triveni'. The city attracts thousands of pilgrims throughout the year, swelling to millions during the world-famous Kumbh Mela.",
      bestTime: "October to March",
      temperature: "Pleasant winter, avoid summer",
      duration: "2-3 Days",
      price: "₹8,000",
      rating: 4.3,
      highlights: [
        "Triveni Sangam (Three Rivers)",
        "Kumbh Mela Venue",
        "Colonial Architecture",
        "Allahabad University",
      ],
      transportation: {
        air: "Varanasi (147 km) or Lucknow (210 km)",
        rail: "Well connected to all major cities",
        road: "National Highways 2 and 27",
      },
      significance: [
        "Confluence of Ganga, Yamuna & Saraswati",
        "Tirth Raj - King of all pilgrimage centres",
        "Kumbh Mela every 12 years",
        "British colonial heritage",
      ],
      trainConnections: [
        "Kalka Mail (Delhi/Kolkata)",
        "Air Conditioned Express (Amritsar-Calcutta)",
        "Prayag Raj Express (New Delhi)",
        "Magadh Vikramshila Express (Delhi-Patna)",
      ],
      image: "/images/allahabad.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#ed3237] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our Buddhist Tour Packages
            </h1>
            <p className="text-xl mb-8">
              Discover our carefully curated Buddhist pilgrimage packages, each
              offering unique spiritual experiences and historical insights into
              India's rich Buddhist heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Explore Packages
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Contact Expert
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Premium Buddhist Tour Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each package is designed to provide an immersive spiritual journey
              through India's most sacred Buddhist sites, complete with detailed
              itineraries and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Package Header */}
                <div className="h-64 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center relative">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center justify-center space-x-4 text-white/90">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center">
                        <Star size={16} className="mr-1" />
                        {pkg.rating}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white font-semibold">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {pkg.detailedDescription}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-600 mb-3 flex items-center">
                      <Camera size={18} className="mr-2" />
                      Tour Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pkg.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transportation */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-600 mb-3">
                      How to Get There
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start text-sm text-gray-700">
                        <Plane
                          size={16}
                          className="text-red-500 mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          <strong>Air:</strong> {pkg.transportation.air}
                        </span>
                      </div>
                      <div className="flex items-start text-sm text-gray-700">
                        <Train
                          size={16}
                          className="text-red-500 mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          <strong>Rail:</strong> {pkg.transportation.rail}
                        </span>
                      </div>
                      <div className="flex items-start text-sm text-gray-700">
                        <Car
                          size={16}
                          className="text-red-500 mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>
                          <strong>Road:</strong> {pkg.transportation.road}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Special Locations (for Orissa tour) */}
                  {pkg.locations && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-red-600 mb-3 flex items-center">
                        <MapPin size={18} className="mr-2" />
                        Key Locations
                      </h4>
                      <div className="space-y-3">
                        {pkg.locations.map((location, idx) => (
                          <div
                            key={idx}
                            className="border-l-4 border-red-200 pl-4"
                          >
                            <h5 className="font-semibold text-gray-800 text-sm">
                              {location.name}
                            </h5>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {location.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Special Attractions (for Rajgir tour) */}
                  {pkg.attractions && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-red-600 mb-3 flex items-center">
                        <Mountain size={18} className="mr-2" />
                        Major Attractions
                      </h4>
                      <div className="space-y-3">
                        {pkg.attractions.slice(0, 2).map((attraction, idx) => (
                          <div
                            key={idx}
                            className="border-l-4 border-red-200 pl-4"
                          >
                            <h5 className="font-semibold text-gray-800 text-sm">
                              {attraction.name}
                            </h5>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {attraction.description}
                            </p>
                          </div>
                        ))}
                        {pkg.attractions.length > 2 && (
                          <p className="text-xs text-gray-500 pl-4">
                            +{pkg.attractions.length - 2} more attractions
                            included
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Travel Info */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">
                          Best Time:
                        </span>
                        <p className="text-gray-600">{pkg.bestTime}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">
                          Climate:
                        </span>
                        <p className="text-gray-600">{pkg.temperature}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                      Book Package
                    </button>
                    <button className="flex-1 border-2 border-red-600 text-red-600 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-colors font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Buddhist Tour Packages?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive, spiritually enriching tours with expert
              guidance and authentic experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Our experienced guides provide deep insights into Buddhist
                history, culture, and spiritual practices at each sacred site.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Authentic Locations
              </h3>
              <p className="text-gray-600">
                Visit UNESCO World Heritage Sites and lesser-known gems,
                ensuring a comprehensive Buddhist pilgrimage experience.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Complete Arrangements
              </h3>
              <p className="text-gray-600">
                From transportation to accommodation, we handle all logistics so
                you can focus on your spiritual journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our expert tour planners to customize your perfect Buddhist
            pilgrimage package or choose from our carefully curated offerings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Contact Expert
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
