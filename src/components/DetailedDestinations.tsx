import { useState } from "react";
import {
  Star,
  MapPin,
  Calendar,
  Users,
  Mountain,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

interface Site {
  name: string;
  image: string;
  description: string;
  details: string;
  significance: string;
  location: string;
  howToReach: {
    air: string;
    rail: string;
    road: string;
  };
  attractions: string[];
  festivals?: string[];
}

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tours: number;
  rating: number;
  bestTime: string;
  duration: string;
  difficulty: string;
  culture: string;
  sites: Site[];
}

const destinations = [
  {
    id: "india",
    name: "India - Buddhist Circuit",
    image:
      "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The birthplace of Buddhism with sacred sites where Buddha lived, taught, and attained enlightenment.",
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
    sites: [
      {
        name: "Bodh Gaya",
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
        description:
          "The most important Buddhist pilgrimage center where Buddha attained enlightenment under the Bodhi Tree.",
        details:
          "Bodh Gaya in Bihar is where Prince Siddhartha meditated under the Bodhi Tree and attained Nirvana. The Maha Bodhi Temple with its 150 feet tower houses a gilded Buddha statue. The site includes the original Vajrasan platform, Buddhapada footprints, and Chaukramana (Jewel Walk).",
        attractions: [
          "Maha Bodhi Temple",
          "Bodhi Tree",
          "Vajrasan Platform",
          "Lotus Tank",
          "Various International Monasteries",
          "Bodh Gaya Museum",
        ],
        location: "243 km from Varanasi, Bihar",
        significance:
          "Buddha's enlightenment site - most sacred place for Buddhists",
        howToReach: {
          air: "Gaya Airport (12 km) - connects to Colombo and Bangkok",
          rail: "Gaya Railway Station with services from major Indian cities",
          road: "Well connected by road to Patna (178 km) and Varanasi (243 km)",
        },
        festivals: [
          "Buddha Jayanti (May)",
          "Sangha Dana (Full Moon)",
          "Peace Prayer Meetings (October)",
        ],
      },
      {
        name: "Sarnath",
        image:
          "https://images.unsplash.com/photo-1591794740616-19e8e29ee5c1?q=80&w=800&auto=format&fit=crop",
        description:
          "Where Buddha preached his first sermon in the Deer Park after attaining enlightenment.",
        details:
          "Sarnath contains the most impressive Buddhist remains including the Dharmarajika, Chaukhandi and Dharnek stupas. The beautifully polished Lion Capital of Ashoka is housed in the Sarnath Museum along with finest specimens of Buddhist sculpture.",
        attractions: [
          "Deer Park",
          "Dharmarajika Stupa",
          "Chaukhandi Stupa",
          "Sarnath Museum",
          "Lion Capital of Ashoka",
          "Mula gandha Kutir Vihara",
        ],
        location: "10 km from Varanasi, Uttar Pradesh",
        significance: "First sermon location - where Buddhism began to spread",
        howToReach: {
          air: "Varanasi Airport with daily connections to Delhi, Mumbai, Agra",
          rail: "Varanasi Junction - major railway hub with trains from all metros",
          road: "Just 10 km from Varanasi city center",
        },
        festivals: [
          "Vaisakha Full Moon (April-May)",
          "Asadh Full Moon (July-August)",
        ],
      },
      {
        name: "Ajanta & Ellora Caves",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        description:
          "World famous rock-cut Buddhist temples and monasteries dating back to 2nd century BCE.",
        details:
          "Ajanta has 30 rock caves in horseshoe shape with magnificent Buddhist paintings and sculptures. Ellora features 34 cave temples including 12 Buddhist caves, showcasing the evolution of Buddhist art and architecture over centuries.",
        attractions: [
          "30 Ajanta Caves",
          "12 Buddhist Ellora Caves",
          "Ancient Paintings",
          "Rock Sculptures",
          "Monastery Complexes",
          "UNESCO World Heritage Site",
        ],
        location: "Aurangabad, Maharashtra",
        significance: "Masterpiece of Buddhist rock-cut architecture and art",
        howToReach: {
          air: "Aurangabad Airport (108 km from Ajanta)",
          rail: "Jalgaon Railway Station (58 km) on Central Railway",
          road: "Ajanta 99 km from Aurangabad, Ellora 30 km from Aurangabad",
        },
        festivals: [
          "Best visited October to March",
          "Cool season with pleasant weather",
        ],
      },
      {
        name: "Kapilvastu",
        image:
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
        description:
          "The childhood home of Prince Siddhartha (Buddha) and capital of the Sakya clan.",
        details:
          "The opulent environs where Prince Siddhartha spent his childhood before renouncing worldly pleasures. Archaeological excavations have revealed stupas, monasteries and Suddhodana's palace remains.",
        attractions: [
          "Palace Ruins",
          "Eastern Stupa",
          "Kushan Period Inscriptions",
          "Mahinda Mahavihara",
          "Archaeological Site",
          "Sri Lankan Monastery",
        ],
        location: "Siddharthnagar, Uttar Pradesh",
        significance: "Buddha's childhood home and early life",
        howToReach: {
          air: "Varanasi Airport (312 km away)",
          rail: "Siddharthnagar Railway Station (20 km)",
          road: "Gorakhpur 97 km, Kushinagar 148 km, Lumbini 86 km",
        },
        festivals: [
          "Buddha Jayanti celebrations",
          "Pilgrimage season October to March",
        ],
      },
    ],
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka - Island of Dharma",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    description:
      "The island nation where Buddhism has flourished for over 2,300 years with ancient temples and relics.",
    longDescription:
      "Sri Lanka holds the distinction of being the first country to which Buddhism spread outside India. The island preserves some of the most sacred Buddhist relics and ancient temples.",
    highlights: [
      "Temple of the Sacred Tooth Relic",
      "Anuradhapura Ancient City",
      "Sigiriya Rock Fortress",
      "Dambulla Cave Temple",
      "Polonnaruwa",
      "Adam's Peak",
    ],
    tours: 12,
    rating: 4.8,
    bestTime: "December to March",
    duration: "8-12 Days",
    difficulty: "Easy to Moderate",
    culture: "Theravada Buddhism with ancient stupas and cave temples",
    sites: [
      {
        name: "Temple of the Sacred Tooth Relic",
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
        description:
          "Houses the sacred tooth relic of Buddha, the most venerated Buddhist relic in Sri Lanka.",
        details:
          "Located in Kandy, this UNESCO World Heritage site contains the tooth relic of Buddha. The temple complex includes the main shrine, audience halls, and museums with precious artifacts.",
        attractions: [
          "Sacred Tooth Relic",
          "Golden Roof Temple",
          "Audience Hall",
          "Museum Collection",
          "Daily Puja Ceremonies",
          "Kandy Lake View",
        ],
        location: "Kandy, Central Province",
        significance:
          "Houses Buddha's tooth relic - most sacred Buddhist site in Sri Lanka",
        howToReach: {
          air: "Bandaranaike International Airport (115 km) or domestic to Kandy",
          rail: "Kandy Railway Station with scenic hill country train",
          road: "116 km from Colombo via A1 highway",
        },
        festivals: ["Esala Perahera (July-August)", "Vesak Festival (May)"],
      },
      {
        name: "Anuradhapura",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        description:
          "Ancient capital with massive stupas and the sacred Sri Maha Bodhi tree.",
        details:
          "One of the ancient capitals of Sri Lanka, famous for its well-preserved ruins of ancient civilization. The city contains the Sri Maha Bodhi tree, grown from a cutting of Buddha's Bodhi tree.",
        attractions: [
          "Sri Maha Bodhi Tree",
          "Ruwanwelisaya Stupa",
          "Thuparamaya",
          "Jetavanaramaya",
          "Abhayagiri Monastery",
          "Isurumuniya Rock Temple",
        ],
        location: "North Central Province",
        significance:
          "First capital of Sri Lanka and home to sacred Bodhi tree",
        howToReach: {
          air: "Bandaranaike Airport (160 km) then road transfer",
          rail: "Anuradhapura Railway Station on Northern Line",
          road: "206 km from Colombo via A9 highway",
        },
        festivals: ["Poson Festival (June)", "Vesak Celebrations"],
      },
    ],
  },
  {
    id: "myanmar",
    name: "Myanmar - Golden Land of Pagodas",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d4d6d4?q=80&w=800&auto=format&fit=crop",
    description:
      "Ancient Buddhist kingdom with thousands of golden pagodas and monasteries.",
    longDescription:
      "Myanmar is home to over 2,500 monasteries and countless pagodas. The country maintains strong Theravada Buddhist traditions with spectacular temple complexes.",
    highlights: [
      "Shwedagon Pagoda",
      "Bagan Temple Plains",
      "Mandalay Hill",
      "Golden Rock Pagoda",
      "Inle Lake Monasteries",
      "Mahagandayon Monastery",
    ],
    tours: 10,
    rating: 4.7,
    bestTime: "November to February",
    duration: "10-15 Days",
    difficulty: "Moderate",
    culture:
      "Traditional Theravada Buddhism with golden stupas and active monasteries",
    sites: [
      {
        name: "Shwedagon Pagoda",
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
        description:
          "Myanmar's most sacred Buddhist site, a 325-foot golden stupa containing Buddha relics.",
        details:
          "The 2,500-year-old pagoda is covered in real gold and houses eight strands of Buddha's hair. The complex includes 64 smaller pagodas surrounding the main stupa.",
        attractions: [
          "Golden Stupa",
          "Buddha Hair Relics",
          "64 Surrounding Pagodas",
          "Prayer Halls",
          "Museum",
          "Evening Light Ceremonies",
        ],
        location: "Yangon, Myanmar",
        significance:
          "Most sacred pagoda in Myanmar containing Buddha's hair relics",
        howToReach: {
          air: "Yangon International Airport (30 minutes drive)",
          rail: "Yangon Central Railway Station (20 minutes)",
          road: "Central Yangon, accessible by taxi or bus",
        },
        festivals: [
          "Shwedagon Festival (March)",
          "Thadingyut Festival (October)",
        ],
      },
      {
        name: "Bagan Archaeological Zone",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        description:
          "Ancient city with over 2,000 Buddhist temples and pagodas dating from 9th-13th centuries.",
        details:
          "Once home to over 10,000 temples, Bagan remains one of the richest archaeological sites in Asia. The plain contains diverse architectural styles of Buddhist temples.",
        attractions: [
          "2,000+ Ancient Temples",
          "Ananda Temple",
          "Dhammayangyi Temple",
          "Sulamani Temple",
          "Archaeological Museum",
          "Sunrise Hot Air Balloons",
        ],
        location: "Mandalay Region, Myanmar",
        significance: "Largest concentration of Buddhist temples in the world",
        howToReach: {
          air: "Bagan Airport (15 minutes to Old Bagan)",
          rail: "Bagan Railway Station with connections to Yangon",
          road: "180 km from Mandalay, 290 km from Yangon",
        },
        festivals: [
          "Ananda Festival (January)",
          "Hot Air Balloon Season (October-March)",
        ],
      },
    ],
  },
  {
    id: "thailand",
    name: "Thailand - Land of Golden Buddhas",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    description:
      "Kingdom of elaborate temples, golden Buddhas, and active monastic traditions.",
    longDescription:
      "Thailand's Buddhist heritage spans over 1,000 years with magnificent temple complexes, golden Buddha statues, and vibrant monastic communities throughout the kingdom.",
    highlights: [
      "Wat Phra Kaew (Emerald Buddha)",
      "Wat Pho (Reclining Buddha)",
      "Ayutthaya Historical Park",
      "Sukhothai Historical Park",
      "Wat Arun",
      "Golden Buddha Temple",
    ],
    tours: 14,
    rating: 4.8,
    bestTime: "November to March",
    duration: "7-14 Days",
    difficulty: "Easy",
    culture: "Theravada Buddhism with ornate temples and royal patronage",
    sites: [
      {
        name: "Wat Phra Kaew (Temple of Emerald Buddha)",
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
        description:
          "Thailand's most sacred temple housing the revered Emerald Buddha statue.",
        details:
          "Located within the Grand Palace complex in Bangkok, this temple is considered the most sacred Buddhist site in Thailand. The Emerald Buddha is carved from a single block of jade.",
        attractions: [
          "Emerald Buddha Statue",
          "Golden Chedis",
          "Murals of Ramakien",
          "Grand Palace Complex",
          "Royal Pantheon",
          "Temple Library",
        ],
        location: "Bangkok, Thailand",
        significance: "Most sacred Buddhist temple in Thailand",
        howToReach: {
          air: "Suvarnabhumi Airport (45 minutes) or Don Mueang Airport",
          rail: "Hua Lamphong Railway Station (20 minutes by taxi)",
          road: "Central Bangkok, accessible by BTS, MRT, or taxi",
        },
        festivals: ["Royal Ploughing Ceremony (May)", "Vesak Day Celebrations"],
      },
      {
        name: "Ayutthaya Historical Park",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        description:
          "Ancient capital with magnificent temple ruins and Buddhist art from 14th-18th centuries.",
        details:
          "The former capital of the Kingdom of Siam, Ayutthaya contains the ruins of numerous temples and palaces. UNESCO World Heritage site showcasing classical Thai Buddhist architecture.",
        attractions: [
          "Wat Mahathat",
          "Wat Phra Si Sanphet",
          "Wat Chaiwatthanaram",
          "Buddha Head in Tree Roots",
          "Royal Palace Ruins",
          "Chao Sam Phraya Museum",
        ],
        location: "Ayutthaya Province, Thailand",
        significance: "Former capital with spectacular Buddhist temple ruins",
        howToReach: {
          air: "Bangkok airports then 1.5 hour drive",
          rail: "Ayutthaya Railway Station with frequent trains from Bangkok",
          road: "80 km north of Bangkok via Highway 1",
        },
        festivals: [
          "Ayutthaya World Heritage Day (December)",
          "Songkran Festival (April)",
        ],
      },
    ],
  },
  {
    id: "bhutan",
    name: "Bhutan - Last Shangri-La",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
    description:
      "Himalayan Buddhist kingdom with pristine monasteries and spiritual traditions.",
    longDescription:
      "The only carbon-negative country in the world, Bhutan maintains its Buddhist culture and traditions. The kingdom is dotted with dzongs (fortress-monasteries) and sacred sites.",
    highlights: [
      "Tiger's Nest Monastery",
      "Punakha Dzong",
      "Thimphu Tashichho Dzong",
      "Bumthang Sacred Valley",
      "Chimi Lhakhang",
      "Dochula Pass",
    ],
    tours: 8,
    rating: 4.9,
    bestTime: "March to May, September to November",
    duration: "7-12 Days",
    difficulty: "Moderate to Challenging",
    culture:
      "Vajrayana Buddhism with fortress-monasteries and living traditions",
    sites: [
      {
        name: "Tiger's Nest Monastery (Paro Taktsang)",
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
        description:
          "Iconic cliff-side monastery where Guru Rinpoche meditated for 3 years, 3 months, 3 weeks, and 3 days.",
        details:
          "Perched on a cliff 3,000 feet above Paro valley, this sacred site is where Guru Rinpoche (Padmasambhava) meditated. The monastery complex includes temples, prayer halls, and meditation caves.",
        attractions: [
          "Cliff-side Monastery",
          "Guru Rinpoche Cave",
          "Sacred Prayer Halls",
          "Buddhist Murals",
          "Mountain Views",
          "Meditation Caves",
        ],
        location: "Paro Valley, Bhutan",
        significance:
          "Most sacred site in Bhutan where Guru Rinpoche meditated",
        howToReach: {
          air: "Paro International Airport (base for 3-hour trek)",
          rail: "No railway in Bhutan",
          road: "2-hour trek from Paro valley parking area",
        },
        festivals: [
          "Paro Tsechu (March-April)",
          "Thimphu Tshechu (September-October)",
        ],
      },
      {
        name: "Punakha Dzong",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        description:
          "Majestic fortress-monastery at the confluence of two rivers, former capital of Bhutan.",
        details:
          "Built in 1637, this dzong serves as the administrative center and houses the sacred relics of the southern Drukpa Lineage. It's considered the most beautiful dzong in Bhutan.",
        attractions: [
          "Fortress Architecture",
          "Sacred Relics",
          "River Confluence",
          "Administrative Halls",
          "Buddhist Artwork",
          "Suspension Bridge",
        ],
        location: "Punakha, Bhutan",
        significance: "Former capital and most beautiful dzong in Bhutan",
        howToReach: {
          air: "Paro Airport then 3-hour scenic drive",
          rail: "No railway in Bhutan",
          road: "76 km from Thimphu via Dochula Pass",
        },
        festivals: [
          "Punakha Drubchen (February-March)",
          "Punakha Tshechu (February-March)",
        ],
      },
    ],
  },
  {
    id: "cambodia",
    name: "Cambodia - Angkor's Buddhist Heritage",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d4d6d4?q=80&w=800&auto=format&fit=crop",
    description:
      "Ancient Khmer empire with magnificent temple complexes and Buddhist art.",
    longDescription:
      "Cambodia's Buddhist heritage is showcased in the magnificent Angkor temple complex and numerous pagodas. The country preserves both Theravada traditions and ancient Khmer Buddhist art.",
    highlights: [
      "Angkor Wat",
      "Bayon Temple",
      "Ta Prohm",
      "Silver Pagoda",
      "Wat Phnom",
      "Preah Vihear",
    ],
    tours: 9,
    rating: 4.6,
    bestTime: "November to March",
    duration: "5-10 Days",
    difficulty: "Easy to Moderate",
    culture: "Khmer Buddhist heritage with ancient temples and modern pagodas",
    sites: [
      {
        name: "Angkor Wat",
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
        description:
          "World's largest religious monument, originally Hindu but later converted to Buddhist use.",
        details:
          "Built in the early 12th century, Angkor Wat represents the pinnacle of Khmer architecture. The temple complex covers 162.6 hectares and contains intricate bas-reliefs depicting Hindu and Buddhist stories.",
        attractions: [
          "Central Towers",
          "Sunrise Views",
          "Bas-relief Galleries",
          "Reflecting Pools",
          "Apsara Carvings",
          "Library Buildings",
        ],
        location: "Angkor Archaeological Park, Siem Reap",
        significance: "Largest religious monument in the world",
        howToReach: {
          air: "Siem Reap International Airport (15 minutes drive)",
          rail: "No direct railway to Siem Reap",
          road: "6 km from Siem Reap city center",
        },
        festivals: [
          "Angkor Wat International Half Marathon (December)",
          "Khmer New Year (April)",
        ],
      },
      {
        name: "Silver Pagoda",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        description:
          "Royal temple in Phnom Penh with 5,000 silver tiles and precious Buddha statues.",
        details:
          "Also known as Wat Preah Keo, this temple houses the Emerald Buddha of Cambodia and a 90kg gold Buddha encrusted with diamonds. The floor is covered with silver tiles.",
        attractions: [
          "5,000 Silver Floor Tiles",
          "Emerald Buddha",
          "Gold Buddha Statue",
          "Royal Palace Complex",
          "Buddhist Manuscripts",
          "Stupas and Gardens",
        ],
        location: "Royal Palace, Phnom Penh",
        significance: "Royal temple with precious Buddhist artifacts",
        howToReach: {
          air: "Phnom Penh International Airport (30 minutes)",
          rail: "Phnom Penh Railway Station (20 minutes)",
          road: "Central Phnom Penh, riverside location",
        },
        festivals: [
          "Royal Ploughing Ceremony (May)",
          "Pchum Ben Festival (October)",
        ],
      },
    ],
  },
];

const DetailedDestinations = () => {
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [selectedSite, setSelectedSite] = useState<Site | null>(null);

  if (selectedSite) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Site Detail View */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-8">
            <button
              onClick={() => setSelectedSite(null)}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 mb-6"
            >
              <ArrowLeft size={20} />
              <span>Back to {selectedDestination?.name}</span>
            </button>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <img
                  src={selectedSite?.image}
                  alt={selectedSite?.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    {" "}
                    {selectedSite?.name}
                  </h1>
                  <p className="text-xl text-gray-600 mb-4">
                    {selectedSite?.description}
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <p className="font-medium text-red-800">Significance:</p>
                    <p className="text-red-700">{selectedSite?.significance}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Location & Access
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <MapPin size={16} className="text-red-500" />
                    <span>{selectedSite?.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="mt-12 grid lg:grid-cols-3 gap-8">
              {/* How to Reach */}
              <div className="bg-white rounded-xl border p-6">
                <h4 className="font-bold text-gray-800 mb-4">How to Reach</h4>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-red-600">Air:</span>
                    <p className="text-sm text-gray-600">
                      {" "}
                      {selectedSite?.howToReach.air}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-red-600">Rail:</span>
                    <p className="text-sm text-gray-600">
                      {selectedSite?.howToReach.rail}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-red-600">Road:</span>
                    <p className="text-sm text-gray-600">
                      {selectedSite?.howToReach.road}
                    </p>
                  </div>
                </div>
              </div>

              {/* Attractions */}
              <div className="bg-white rounded-xl border p-6">
                <h4 className="font-bold text-gray-800 mb-4">
                  Major Attractions
                </h4>
                <div className="space-y-2">
                  {selectedSite?.attractions.map((attraction, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        {attraction}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Festivals/Best Time */}
              <div className="bg-white rounded-xl border p-6">
                <h4 className="font-bold text-gray-800 mb-4">
                  Festivals & Events
                </h4>
                <div className="space-y-2">
                  {selectedSite.festivals?.map((festival, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{festival}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mt-8 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {" "}
                About {selectedSite?.name}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {selectedSite?.details}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-medium">
                Book Tour to {selectedSite?.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedDestination) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Destination Detail View */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-8">
            <button
              onClick={() => setSelectedDestination(null)}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 mb-6"
            >
              <ArrowLeft size={20} />
              <span>Back to All Destinations</span>
            </button>

            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                {" "}
                {selectedDestination?.name}
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                {selectedDestination?.longDescription}
              </p>
            </div>

            {/* Sites Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {selectedDestination?.sites.map((site, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedSite(site)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center space-x-1">
                        <Star className="fill-current text-red-500" size={14} />
                        <span className="text-sm font-medium">Sacred Site</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {site.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{site.description}</p>

                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-4">
                      <MapPin size={14} />
                      <span>{site.location}</span>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-4">
                      <p className="text-sm text-red-800">
                        {site.significance}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-red-600 font-medium">
                        Learn More
                      </span>
                      <ExternalLink size={16} className="text-red-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main destinations list view
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Sacred Buddhist Destinations
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Explore the most significant Buddhist sites across Asia, where
              ancient wisdom meets breathtaking architecture and serene
              spiritual environments.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedDestination(destination)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar size={16} className="text-red-600" />
                      <span>{destination.bestTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Mountain size={16} className="text-red-600" />
                      <span>{destination.difficulty}</span>
                    </div>
                  </div>{" "}
                  <div className="flex items-center justify-center pt-4 border-t">
                    <button className="bg-red-600 text-white px-6 py-3 rounded-full text-sm hover:bg-red-700 transition-colors font-medium">
                      Explore Tours
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedDestinations;
