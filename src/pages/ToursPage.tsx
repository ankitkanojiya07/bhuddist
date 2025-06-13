import { useState } from "react";
import {
  Calendar,
  Users,
  Star,
  MapPin,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Tour {
  id: number;
  title: string;
  image: string;
  duration: string;
  groupSize: string;
  rating: number;
  reviews: number;
  location: string;
  category: string;
  difficulty: string;
  description: string;
  destinations: string;
  highlights: string[];
  included: string[];
  itinerary: { day: number; title: string; description: string }[];
}

const tours: Tour[] = [
  {
    id: 15,
    title: "Buddhist Pilgrimage Tour",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    duration: "12 nights / 13 days",
    groupSize: "10-15 People",
    rating: 4.9,
    reviews: 156,
    location: "Nepal - India",
    category: "Pilgrimage",
    difficulty: "Easy",
    description:
      "Complete Buddhist circuit covering all major sacred sites from Kathmandu to Delhi, including Lumbini, Kushinagar, Bodhgaya, Sarnath, and Varanasi.",
    destinations:
      "Kathmandu - Lumbini - Kushinagar - Patna - Bodhgaya - Sarnath - Varanasi - Agra - Delhi",
    highlights: [
      "Buddha's birthplace in Lumbini",
      "Enlightenment site at Bodhgaya",
      "First sermon location in Sarnath",
      "Sacred ghats of Varanasi",
      "Taj Mahal in Agra",
    ],
    included: [
      "Accommodation in heritage hotels",
      "All meals during the tour",
      "Transportation & domestic flights",
      "Expert Buddhist guide",
      "All entry fees & permits",
    ],
    itinerary: [
      {
        day: 1,
        title: "ARRIVE KATHMANDU",
        description:
          "On arrival meet and assist at the airport and transfer to pre-booked hotel.",
      },
      {
        day: 2,
        title: "KATHMANDU",
        description:
          "After breakfast visit Kathmandu city, Swayambhunath & museum. Afternoon, excursion to Patan & Tibetan handicraft center.",
      },
      {
        day: 3,
        title: "KATHMANDU",
        description:
          "After breakfast visit Boudhnath, Pashupatinath & Bhaktapur. Afternoon, excursion to Dhulikhel.",
      },
      {
        day: 4,
        title: "KATHMANDU-BHAIRAWA (FLIGHT), BHAIRAWA-LUMBINI",
        description:
          "After breakfast, transfer to airport to board flight for Bhaiwara. Arrive Bhairawa and transfer to Lumbini. In the afternoon, visit Lumbini",
      },
      {
        day: 5,
        title: "LUMBINI-KUSHINAGAR",
        description:
          "After breakfast leave for Kushinagar. Arrive Kushinagar and transfer to hotel. Afternoon, visit Kushinagar",
      },
      {
        day: 6,
        title: "KUSHINAGAR-PATNA",
        description:
          "After breakfast, leave for Patna. Enroute visit Vaishali. Arrive Patna and check in at pre-booked hotel.",
      },
      {
        day: 7,
        title: "PATNA-BODHGAYA",
        description:
          "After breakfast, leave for Bodhgaya. Enroute visit Rajgir & Nalanda. Continue drive to Bodhgaya. Arrive Bodhgaya and check in at pre-booked hotel.",
      },
      {
        day: 8,
        title: "BODHGAYA",
        description:
          "After breakfast, visit Bodhgaya. Afternoon, free for individual activities",
      },
      {
        day: 9,
        title: "BODHGAYA-VARANASI",
        description:
          "After breakfast, leave for Varanasi. Arrive Varanasi and check in at pre-booked hotel. Afternoon, excursion to Sarnath - the place where Lord Buddha gave his first sermon.",
      },
      {
        day: 10,
        title: "VARANASI-AGRA (OVERNIGHT TRAIN)",
        description:
          "Early morning, leave for boat ride on the Ganges. Return to hotel for breakfast. After breakfast, city tour of Varanasi. In the evening transfer to the railway station to board train for Agra. Overnight in the train.",
      },
      {
        day: 11,
        title: "ARRIVE AGRA",
        description:
          "Arrive Agra in the morning and transfer to pre-booked hotel. Afternoon, visit the Taj Mahal, Red Fort & Itmad-ud-daulah.",
      },
      {
        day: 12,
        title: "AGRA-DELHI",
        description:
          "After breakfast, leave for Delhi. Arrive Delhi & check in at pre-booked hotel. Rest of the day free for individual activities.",
      },
      {
        day: 13,
        title: "DEPART DELHI",
        description:
          "After breakfast, full day city tour of Old & New Delhi. Evening, transfer to the airport to board flight back home",
      },
    ],
  },
  {
    id: 13,
    title: "India Travel Information",
    image:
      "https://images.unsplash.com/photo-1509644851169-2e2e3a06657e?auto=format&fit=crop&w=1200&q=80",
    duration: "Flexible",
    groupSize: "Independent or Group",
    rating: 4.7,
    reviews: 215,
    location: "India",
    category: "Travel Guide",
    difficulty: "Moderate",
    description:
      "India will overwhelm you with its size, diversity, and vibrant culture. A land where the unexpected is the norm, India offers an intricate tapestry of history, religion, and sensory experiences that captivate travelers. Explore sacred sites, ancient ruins, bustling cities, and serene landscapes in this incredible country.",
    destinations: "Pan-India",
    highlights: [
      "Diverse cultural and spiritual experiences",
      "Magnificent Jain temples and Buddhist stupas",
      "Rich historical sites: forts, monuments, and ruins",
      "World-class beaches and scenic coastal areas",
      "Varied climates and stunning natural landscapes",
      "Legendary Indian Railways travel experience",
      "Vast array of religious festivals and traditions",
      "Vibrant markets and cuisine",
      "Warm and welcoming local people",
      "Deep historical roots from ancient civilizations to modern democracy",
    ],
    included: [
      "International and domestic flights (optional)",
      "Comprehensive travel information and tips",
      "Local transportation guidance",
      "Suggested itineraries for various regions",
      "Historical background and cultural insights",
      "Best times to visit different parts of India",
      "Advice on booking train tickets and using airlines",
      "Visa and entry requirements",
      "Safety and health tips",
      "Practical travel advice for first-time visitors",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in India",
        description:
          "Land in one of India's major international airports - Mumbai, Delhi, Kolkata, or Chennai. Get oriented and prepare for the adventure ahead.",
      },
      {
        day: 2,
        title: "Understanding India's Diversity",
        description:
          "Explore the rich cultural and religious diversity. Visit temples, mosques, churches, and monasteries that reflect India's spiritual heritage.",
      },
      {
        day: 3,
        title: "Delve into History",
        description:
          "Visit key historical sites across India - from Indus Valley ruins to Mughal architecture. Learn about the country's vast and layered past.",
      },
      {
        day: 4,
        title: "Railway Adventures",
        description:
          "Embark on a memorable Indian Railways journey. Experience the vibrant train culture and travel through India's varied landscapes.",
      },
      {
        day: 5,
        title: "Sacred Sites",
        description:
          "Tour sacred Hindu, Buddhist, Sikh, Christian, and Jain sites. Witness rituals and festivals that offer deep cultural insights.",
      },
      {
        day: 6,
        title: "Beaches & Nature",
        description:
          "Relax at India's stunning beaches or explore natural wonders from the Himalayas to Kerala’s backwaters.",
      },
      {
        day: 7,
        title: "Modern India",
        description:
          "Visit India’s bustling metropolises. Explore Mumbai’s Bollywood scene, Delhi’s government buildings, and Bengaluru’s tech hubs.",
      },
      {
        day: 8,
        title: "Cuisine & Markets",
        description:
          "Dive into India's culinary diversity. Visit local markets, sample regional dishes, and learn about spices and cooking techniques.",
      },
      {
        day: 9,
        title: "Travel Practicalities",
        description:
          "Get practical tips on transport, accommodation, health, and safety. Understand local etiquette and essential travel hacks.",
      },
      {
        day: 10,
        title: "Planning Your Return",
        description:
          "Prepare for your departure. Reflect on your Indian journey and plan future trips to explore even more of this incredible land.",
      },
    ],
  },
  {
    id: 14,
    title: "Buddhist Circuit in India",
    image:
      "https://images.unsplash.com/photo-1549887534-164cde9e2fd7?auto=format&fit=crop&w=1200&q=80",
    duration: "15 nights / 16 days",
    groupSize: "10-20 People",
    rating: 4.8,
    reviews: 112,
    location: "India & Nepal",
    category: "Cultural & Spiritual Tour",
    difficulty: "Easy",
    description:
      "Journey through the most sacred Buddhist pilgrimage sites across India and Nepal. Follow the life path of Buddha from birth to enlightenment to Mahaparinirvana. Visit ancient monasteries, stupas, and heritage sites that form the core of Buddhist culture.",
    destinations:
      "Delhi – Agra – Varanasi – Bodhgaya – Rajgir – Nalanda – Patna – Vaishali – Kushinagar – Lumbini – Sravasti – Lucknow – Delhi",
    highlights: [
      "Ajanta and Ellora Caves - UNESCO Heritage Buddhist rock-cut sites",
      "Sanchi Stupa - oldest stone structure in India",
      "Taj Mahal and Agra Fort visit",
      "Sarnath - where Buddha gave his first sermon",
      "Mahabodhi Temple in Bodhgaya",
      "Nalanda ancient Buddhist university ruins",
      "Rajgir spiritual and historical sites",
      "Kushinagar Mahaparinirvana Temple & Stupa",
      "Lumbini - birthplace of Buddha",
      "Sravasti monasteries and Jetvana Gardens",
      "Kathmandu's Boudhanath and Swayambhunath stupas",
    ],
    included: [
      "Hotel accommodation with meals",
      "All transport by air-conditioned vehicles",
      "Train and domestic flight tickets",
      "English-speaking tour guide",
      "Entrance fees to all monuments and sites",
      "Airport transfers",
      "Local sightseeing tours as per itinerary",
      "Daily bottled water",
    ],
    itinerary: [
      {
        day: 1,
        title: "ARRIVAL MUMBAI",
        description:
          "Arrive Mumbai. Meet and transfer to hotel for overnight stay.",
      },
      {
        day: 2,
        title: "MUMBAI SIGHTSEEING",
        description:
          "Excursion to Elephanta Caves by boat. City tour of Mumbai including Gateway of India, Marine Drive, Hanging Gardens and Mani Bhawan.",
      },
      {
        day: 3,
        title: "MUMBAI - AURANGABAD - AJANTA CAVES",
        description:
          "Fly to Aurangabad. Visit the ancient Ajanta Buddhist caves with murals and sculptures. Overnight stay in Aurangabad.",
      },
      {
        day: 4,
        title: "ELLORA CAVES - TRAIN TO BHOPAL",
        description:
          "Explore Ellora Caves including Buddhist, Hindu and Jain temples. Transfer to Bhusaval to board overnight train to Bhopal.",
      },
      {
        day: 5,
        title: "SANCHI STUPA - BHOPAL TO AGRA",
        description:
          "Visit the Great Stupa at Sanchi. Board Shatabdi Express to Agra. Transfer to hotel for overnight stay.",
      },
      {
        day: 6,
        title: "AGRA - TAJ MAHAL - VARANASI",
        description:
          "Visit the Taj Mahal and Agra Fort. Evening train to Varanasi. Overnight on board.",
      },
      {
        day: 7,
        title: "ARRIVE VARANASI & VISIT SARNATH",
        description:
          "Arrive Varanasi. Visit Sarnath - where Buddha gave his first sermon. Evening Ganga Aarti at the ghats.",
      },
      {
        day: 8,
        title: "VARANASI - BODHGAYA",
        description:
          "Morning boat ride on Ganges. Drive to Bodhgaya. Visit Mahabodhi Temple and sacred Bodhi tree.",
      },
      {
        day: 9,
        title: "IN BODHGAYA",
        description:
          "Sightseeing in Bodhgaya including Archaeological Museum, Jagannath Temple and Buddhist monasteries.",
      },
      {
        day: 10,
        title: "BODHGAYA - RAJGIR - NALANDA - PATNA",
        description:
          "Drive to Patna visiting Rajgir (Gridhakuta Hill, Bimbisara Jail) and Nalanda University ruins enroute.",
      },
      {
        day: 11,
        title: "PATNA - KUSHINAGAR",
        description:
          "Drive to Kushinagar. Visit Mahaparinirvana Temple and Rambhar Stupa - Buddha's cremation site.",
      },
      {
        day: 12,
        title: "KUSHINAGAR - SRAVASTI",
        description:
          "Drive to Sravasti (Balrampur). Visit Sahet-Mahet Buddhist sites. Overnight stay.",
      },
      {
        day: 13,
        title: "SRAVASTI - LUMBINI",
        description:
          "Drive to Lumbini. Explore Lumbini Garden and Maya Devi Temple - birthplace of Buddha.",
      },
      {
        day: 14,
        title: "LUMBINI - KATHMANDU (FLIGHT)",
        description:
          "Fly to Kathmandu. Sightseeing includes Kathmandu Valley and Durbar Square. Overnight stay in Kathmandu.",
      },
      {
        day: 15,
        title: "KATHMANDU SIGHTSEEING",
        description:
          "Visit Pashupatinath Temple, Swayambhunath, Boudhanath Stupa and Patan City. Explore Tibetan Handicraft Center.",
      },
      {
        day: 16,
        title: "DEPARTURE FROM KATHMANDU",
        description: "Transfer to airport for onward journey.",
      },
    ],
  },
  {
    id: 14,
    title: "Ganga Sailing Tour",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80",
    duration: "8 nights / 9 days",
    groupSize: "10-15 People",
    rating: 4.6,
    reviews: 89,
    location: "North India",
    category: "River Cruise & Cultural Tour",
    difficulty: "Moderate",
    description:
      "Experience the sacred Ganges through an unforgettable sailing journey from Allahabad to Varanasi. Navigate the holy river while camping on riverbanks and islands, visiting ancient forts, temples, and experiencing the spiritual essence of India's most revered waterway.",
    destinations:
      "Delhi - Allahabad - Lakhiya - Usmanpur - Murdaghat - Mirzapur - Varanasi - Delhi",
    highlights: [
      "Sailing on the sacred river Ganges",
      "Sangam - confluence of three holy rivers",
      "Camping on riverbanks and islands",
      "Akbar's Fort at Kilaghat",
      "Vindhyachal Kali Temple visit",
      "Chunar Fort of Medieval India",
      "Ramnagar Fort and museum",
      "Varanasi Ghats and Golden Temple",
      "Sarnath - Buddha's first sermon site",
      "Traditional boat cruise at sunrise",
    ],
    included: [
      "Hotel accommodation with meals",
      "River sailing boat with camping equipment",
      "All transport by air-conditioned vehicles",
      "Train tickets (Delhi-Allahabad, Varanasi-Delhi)",
      "English-speaking tour guide",
      "Entrance fees to all monuments and sites",
      "Airport transfers",
      "Camping meals and equipment",
      "Daily bottled water",
    ],
    itinerary: [
      {
        day: 1,
        title: "ARRIVAL DELHI",
        description:
          "Arrive Delhi. Met upon arrival and transfer to hotel for overnight stay.",
      },
      {
        day: 2,
        title: "DELHI - ALLAHABAD",
        description:
          "Day at leisure in Delhi. Optional sightseeing tour of Delhi. In the evening board overnight train to Allahabad.",
      },
      {
        day: 3,
        title: "ALLAHABAD - LAKHIYA",
        description:
          "Arrive Allahabad and transfer to hotel for wash/change and breakfast. Proceed to Kilaghat - starting point of sailing. Visit Akbar's fort and Sangam where Ganga, Yamuna and Saraswati rivers meet. Set sail eastward to Varanasi. Reach Lakhiya in evening. Camp on riverbank/island for overnight stay.",
      },
      {
        day: 4,
        title: "LAKHIYA - USMANPUR",
        description:
          "After breakfast set sail to reach Usmanpur covering approximately 35 kms in 8 hours by river. Experience the thrill of river curves and turns. Reach Usmanpur in evening. Camp on riverbank/island for overnight stay.",
      },
      {
        day: 5,
        title: "USMANPUR - MURDAGHAT",
        description:
          "After breakfast set sail to reach Murdaghat covering approximately 45 kms in 9 hours by river. Reach camping spot by dusk for dinner and overnight stay.",
      },
      {
        day: 6,
        title: "MURDAGHAT - MIRZAPUR",
        description:
          "Start sailing towards Mirzapur in morning. After 4 hours, stop at Vindhyachal to visit temple dedicated to Goddess Kali. Lunch on nearby island and sail further to reach camping spot in 4 hours for dinner and overnight stay.",
      },
      {
        day: 7,
        title: "MIRZAPUR - VARANASI",
        description:
          "Final leg of sailing to Varanasi. Enroute visit Chunar Fort of Medieval India and Ramnagar Fort with its interesting museum. Finish sailing at Lanka Ghat in Varanasi. Transfer to hotel in Varanasi for overnight stay.",
      },
      {
        day: 8,
        title: "VARANASI SIGHTSEEING",
        description:
          "Early morning boat cruise on river Ganga. Walk through narrow lanes of Varanasi visiting Kashi Vishwanath (Golden Temple). Afternoon visit Sarnath where Lord Buddha gave his first sermon. Overnight stay in Varanasi.",
      },
      {
        day: 9,
        title: "VARANASI - DELHI - DEPARTURE",
        description:
          "Morning free for individual activities. Transfer to airport to board flight for Delhi. Met upon arrival and transfer to international airport for onward flight.",
      },
    ],
  },
  {
    id: 12,
    title: "Sacred Ganga River Sailing",
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    duration: "8 nights / 9 days",
    groupSize: "6-10 People",
    rating: 4.6,
    reviews: 89,
    location: "Uttar Pradesh, India",
    category: "River Cruise",
    difficulty: "Moderate",
    description:
      "Unique river sailing adventure along the sacred Ganges from Allahabad to Varanasi. Experience the spiritual heart of India through its holy river, ancient ghats, and riverside camping under the stars.",
    destinations:
      "Delhi - Allahabad - Lakhiya - Usmanpur - Murdaghat - Mirzapur - Varanasi - Delhi",
    highlights: [
      "Sacred Sangam confluence of three rivers",
      "Multi-day river sailing expedition",
      "Riverside camping on islands and banks",
      "Ancient Akbar's Fort at Kilaghat",
      "Goddess Kali temple at Vindhyachal",
      "Medieval Chunar Fort visit",
      "17th century Ramnagar Fort museum",
      "Sunrise boat cruise in Varanasi",
      "Golden Temple (Kashi Vishwanath)",
      "Buddhist pilgrimage to Sarnath",
    ],
    included: [
      "Hotel accommodation in cities",
      "Riverside camping with tents",
      "All meals during sailing",
      "Traditional sailing boat with crew",
      "Overnight train Delhi-Allahabad",
      "Professional river guide",
      "All entrance fees and permits",
      "Airport transfers",
      "Varanasi boat cruise",
    ],
    itinerary: [
      {
        day: 1,
        title: "ARRIVE DELHI",
        description:
          "Arrive Delhi airport, meet and transfer to hotel for overnight stay. Rest and prepare for the river adventure.",
      },
      {
        day: 2,
        title: "DELHI - ALLAHABAD (OVERNIGHT TRAIN)",
        description:
          "Day at leisure in Delhi with optional sightseeing tour. Evening board overnight train to Allahabad for the river journey.",
      },
      {
        day: 3,
        title: "ALLAHABAD - LAKHIYA (SAILING BEGINS)",
        description:
          "Arrive Allahabad, hotel refresh and breakfast. Proceed to Kilaghat with Akbar's Fort. Visit sacred Sangam where Ganga, Yamuna, and Saraswati rivers meet. Begin sailing eastward, camp at Lakhiya.",
      },
      {
        day: 4,
        title: "LAKHIYA - USMANPUR (35 KM SAILING)",
        description:
          "8-hour sailing covering 35 km through river curves and turns. Experience the thrill of navigating the winding Ganges. Evening arrival at Usmanpur, riverside camping.",
      },
      {
        day: 5,
        title: "USMANPUR - MURDAGHAT (45 KM SAILING)",
        description:
          "9-hour sailing covering 45 km along the sacred river. Reach Murdaghat camping spot by dusk for dinner and overnight stay under the stars.",
      },
      {
        day: 6,
        title: "MURDAGHAT - MIRZAPUR VIA VINDHYACHAL",
        description:
          "Morning sailing towards Mirzapur with 4-hour stop at Vindhyachal to visit Goddess Kali temple. Island lunch break, continue sailing 4 hours to camping spot.",
      },
      {
        day: 7,
        title: "MIRZAPUR - VARANASI (FINAL SAILING)",
        description:
          "Last leg of sailing to Varanasi. Enroute visit medieval Chunar Fort and 17th century Ramnagar Fort with museum. Finish at Lanka Ghat, transfer to Varanasi hotel.",
      },
      {
        day: 8,
        title: "VARANASI SPIRITUAL EXPLORATION",
        description:
          "Early morning Ganges boat cruise at sunrise. Walk through narrow lanes to visit Kashi Vishwanath (Golden Temple). Afternoon excursion to Sarnath where Buddha gave his first sermon.",
      },
      {
        day: 9,
        title: "VARANASI - DELHI DEPARTURE",
        description:
          "Morning free for individual activities and souvenir shopping. Flight to Delhi, connect with international departure or extend stay.",
      },
    ],
    sailingDetails: {
      totalDistance: "Approximately 150 km river sailing",
      sailingDays: 5,
      campingNights: 4,
      boatType: "Traditional sailing boat with crew",
      riverConditions: "Suitable for moderate adventure seekers",
    },
  },
  {
    id: 11,
    title: "Golden Triangle Classic",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    duration: "6 nights / 7 days",
    groupSize: "4-12 People",
    rating: 4.9,
    reviews: 278,
    location: "Delhi, Rajasthan & Uttar Pradesh",
    category: "Cultural Heritage",
    difficulty: "Easy",
    description:
      "Classic Golden Triangle tour covering India's three most iconic destinations - Delhi, Jaipur, and Agra. Experience the perfect blend of Mughal grandeur, Rajasthani royalty, and modern Indian culture in this unforgettable journey.",
    destinations: "Delhi - Jaipur - Agra - Delhi",
    highlights: [
      "Iconic Taj Mahal at sunrise and sunset",
      "Majestic Amber Fort with elephant ride",
      "Red Fort and Jama Masjid in Delhi",
      "City Palace and Hawa Mahal in Jaipur",
      "Fatehpur Sikri - abandoned Mughal city",
      "Traditional markets and handicrafts",
      "Lotus Temple architectural marvel",
      "Professional photography at Taj Mahal",
      "Cultural evenings and traditional dinners",
    ],
    included: [
      "Traditional welcome and hospitality",
      "Comfortable hotel accommodation",
      "Daily breakfast",
      "Private air-conditioned transportation",
      "Professional experienced guide",
      "Elephant ride at Amber Fort",
      "All entrance fees and permits",
      "Professional photography session",
      "Airport transfers with representative",
    ],
    itinerary: [
      {
        day: 1,
        title: "ARRIVE DELHI",
        description:
          "Traditional welcome by Indian Horizons representative at airport. Transfer to hotel and experience first taste of Indian hospitality. Rest and prepare for the golden journey ahead.",
      },
      {
        day: 2,
        title: "DELHI FULL DAY TOUR",
        description:
          "Full day sightseeing of Delhi combining historical monuments with architectural marvels like Lotus Temple. Optional evening activities include Light & Sound Show and traditional Indian dinner.",
      },
      {
        day: 3,
        title: "DELHI - JAIPUR (Pink City)",
        description:
          "Morning drive to Jaipur, the Pink City of Rajasthan (250 km, 5 hours). Afternoon exploration of local markets where 500-year-old business traditions still operate.",
      },
      {
        day: 4,
        title: "JAIPUR ROYAL EXPERIENCE",
        description:
          "Experience royal lifestyle with elephant ride at majestic Amber Fort. Explore miniature City Palace with experienced guide. Optional cultural evening and traditional Rajasthani dinner available.",
      },
      {
        day: 5,
        title: "JAIPUR - AGRA VIA FATEHPUR SIKRI",
        description:
          "Drive to Agra (250 km, 5 hours) with enroute visit to Fatehpur Sikri - a masterpiece of Mughal craftsmanship. Evening visit to Taj Mahal with guide to understand the true meaning of love for Mumtaz.",
      },
      {
        day: 6,
        title: "AGRA - DELHI VIA SIKANDRA",
        description:
          "Optional morning visit to Taj Mahal or free time to explore Agra. Drive to Delhi via Sikandra (230 km, 4 hours). Professional photography session with Taj Mahal as souvenir gift.",
      },
      {
        day: 7,
        title: "DEPARTURE FROM DELHI",
        description:
          "Morning free time to explore Delhi. Timely transfer to airport with Indian Horizons representative for onward journey, carrying unforgettable memories of the Golden Triangle.",
      },
    ],
    optionalActivities: [
      {
        location: "Delhi",
        activities: ["Light and Sound Show", "Traditional Indian Dinner"],
      },
      {
        location: "Jaipur",
        activities: ["Cultural Evening", "Traditional Rajasthani Dinner"],
      },
      {
        location: "Agra",
        activities: [
          "Professional Photography Session",
          "Additional Taj Mahal Visit",
        ],
      },
    ],
  },
  {
    id: 10,
    title: "India Nepal Buddhist Circuit",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    duration: "10 nights / 11 days",
    groupSize: "8-16 People",
    rating: 4.8,
    reviews: 134,
    location: "India & Nepal",
    category: "Pilgrimage",
    difficulty: "Moderate",
    description:
      "Comprehensive Buddhist pilgrimage journey covering the most sacred sites across India and Nepal, following Buddha's life from birth to enlightenment and final nirvana.",
    destinations:
      "Delhi - Kathmandu - Lumbini - Kushinagar - Vaishali - Bodhgaya - Gaya - Delhi",
    highlights: [
      "Buddha's birthplace at Lumbini, Nepal",
      "Enlightenment site at Bodhgaya",
      "First sermon location at Sarnath",
      "Buddha's final nirvana at Kushinagar",
      "Ancient Nalanda University ruins",
      "Sacred Ganges sunrise boat ride",
      "Historic Red Fort and Jama Masjid in Delhi",
      "Vaishali - Buddha's last sermon site",
      "Barabar caves - ancient rock-cut architecture",
    ],
    included: [
      "Hotel accommodation with breakfast",
      "Domestic flights Delhi-Patna and Lucknow-Delhi",
      "Private air-conditioned transportation",
      "Professional Buddhist guide",
      "All entrance fees and permits",
      "Boat ride on Ganges",
      "Airport transfers",
      "Monument and museum visits",
    ],
    itinerary: [
      {
        day: 1,
        title: "ARRIVE DELHI",
        description:
          "Welcome arrival at Delhi airport and transfer to hotel. Rest and prepare for the spiritual journey ahead.",
      },
      {
        day: 2,
        title: "DELHI CITY TOUR",
        description:
          "Morning tour of Old Delhi including Red Fort, Jama Masjid, and Rajghat memorial. Afternoon explore New Delhi covering Humayun's Tomb, Qutub Minar, India Gate, Birla Mandir, and Bahai Temple.",
      },
      {
        day: 3,
        title: "DELHI - PATNA - VAISHALI",
        description:
          "Early morning flight to ancient Patna. Afternoon excursion to Vaishali where Buddha preached his last sermon. Visit stupas with Buddha's ashes and Ashoka pillar, explore Madhubani paintings.",
      },
      {
        day: 4,
        title: "PATNA - RAJGIR - NALANDA",
        description:
          "Drive to Rajgir, capital of ancient Magadha empire. Visit Gridhrakula, Saptaparni cave, Ajatsatru fort, and Venuvana. Afternoon explore Nalanda - world's oldest university with monasteries, temples, and archaeological museum.",
      },
      {
        day: 5,
        title: "RAJGIR - BODHGAYA",
        description:
          "Morning departure to Bodhgaya with enroute visit to Barabar caves - earliest rock-cut cave examples that inspired E.M. Forster's 'A Passage to India'. Arrive Bodhgaya in evening.",
      },
      {
        day: 6,
        title: "BODHGAYA EXPLORATION",
        description:
          "Full day at holiest Buddhist site where Gautama attained enlightenment. Visit Mahabodhi Temple, meditate under the Bodhi Tree, explore Japanese and Tibetan monasteries, and Magadha University Museum.",
      },
      {
        day: 7,
        title: "BODHGAYA - VARANASI",
        description:
          "Long drive to sacred Varanasi (option to travel by train from Gaya). Afternoon visit ghats, temples, and Banaras Hindu University.",
      },
      {
        day: 8,
        title: "VARANASI - SARNATH",
        description:
          "Early morning boat ride on Ganges to witness beautiful sunrise. After breakfast, excursion to Sarnath where Buddha preached his first sermon. Visit Dhamekh and Dharmarajika stupas.",
      },
      {
        day: 9,
        title: "VARANASI - KUSHINAGAR",
        description:
          "Afternoon drive to Kushinagar, site of Buddha's parinirvana. Visit Ramabha stupa marking Buddha's cremation spot and Nirvana Temple with large reclining Buddha statue.",
      },
      {
        day: 10,
        title: "KUSHINAGAR - LUMBINI - SRAVASTI",
        description:
          "Morning excursion to Lumbini, Nepal - Buddha's birthplace. Visit ancient shrine with nativity image. Afternoon drive to Balrampur via Sravasti and other Buddhist shrines.",
      },
      {
        day: 11,
        title: "DEPARTURE VIA LUCKNOW - DELHI",
        description:
          "Drive to Lucknow airport for flight to Delhi. Connect with international departure flight or extend stay in Delhi.",
      },
    ],
  },
  {
    id: 9,
    title: "Complete Buddhist Circuit",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    duration: "12 nights / 13 days",
    groupSize: "8-15 People",
    rating: 4.9,
    reviews: 156,
    location: "Nepal & India",
    category: "Pilgrimage",
    difficulty: "Moderate",
    description:
      "Comprehensive Buddhist pilgrimage covering all major sacred sites from Buddha's birthplace in Nepal to the holy cities of India, perfect for devoted practitioners seeking complete spiritual journey.",
    destinations:
      "Kathmandu - Lumbini - Kushinagar - Patna - Bodhgaya - Sarnath - Varanasi - Agra - Delhi",
    highlights: [
      "Buddha's birthplace at Lumbini",
      "Mahabodhi Temple and Bodhi Tree",
      "First sermon site at Sarnath",
      "Buddha's parinirvana place at Kushinagar",
      "Ancient Nalanda University ruins",
      "Sacred Ganges boat ride",
      "Taj Mahal visit",
      "Tibetan monasteries and handicrafts",
    ],
    included: [
      "Comfortable hotel accommodation",
      "Daily breakfast and selected meals",
      "Domestic flight Kathmandu-Bhairawa",
      "Overnight train Varanasi-Agra",
      "Private transportation",
      "Professional guide",
      "All entrance fees",
      "Airport transfers",
    ],
    itinerary: [
      {
        day: 1,
        title: "ARRIVE KATHMANDU",
        description:
          "Arrive Kathmandu airport. Meet and assist at airport, transfer to pre-booked hotel.",
      },
      {
        day: 2,
        title: "KATHMANDU CITY TOUR",
        description:
          "Visit Kathmandu city, Swayambhunath temple and museum. Afternoon excursion to Patan and Tibetan handicraft center.",
      },
      {
        day: 3,
        title: "KATHMANDU SIGHTSEEING",
        description:
          "Visit Boudhanath stupa, Pashupatinath temple and Bhaktapur. Afternoon excursion to Dhulikhel.",
      },
      {
        day: 4,
        title: "KATHMANDU - LUMBINI (VIA FLIGHT)",
        description:
          "Morning flight to Bhairawa, then drive to Lumbini. Afternoon visit to Buddha's birthplace at Lumbini.",
      },
      {
        day: 5,
        title: "LUMBINI - KUSHINAGAR",
        description:
          "Drive to Kushinagar, the place of Buddha's parinirvana. Check into hotel and afternoon sightseeing of Kushinagar.",
      },
      {
        day: 6,
        title: "KUSHINAGAR - PATNA",
        description:
          "Drive to Patna with enroute visit to Vaishali, an important Buddhist pilgrimage site.",
      },
      {
        day: 7,
        title: "PATNA - BODHGAYA",
        description:
          "Drive to Bodhgaya with enroute visits to Rajgir and ancient Nalanda University ruins.",
      },
      {
        day: 8,
        title: "BODHGAYA EXPLORATION",
        description:
          "Full day exploring Bodhgaya, site of Buddha's enlightenment. Visit Mahabodhi Temple complex and meditate under the Bodhi Tree.",
      },
      {
        day: 9,
        title: "BODHGAYA - VARANASI",
        description:
          "Drive to Varanasi. Check into hotel and afternoon excursion to Sarnath, where Buddha gave his first sermon.",
      },
      {
        day: 10,
        title: "VARANASI - AGRA (OVERNIGHT TRAIN)",
        description:
          "Early morning boat ride on sacred Ganges river. City tour of Varanasi. Evening departure by overnight train to Agra.",
      },
      {
        day: 11,
        title: "ARRIVE AGRA",
        description:
          "Arrive Agra and transfer to hotel. Afternoon visit to Taj Mahal, Red Fort and Itmad-ud-daulah tomb.",
      },
      {
        day: 12,
        title: "AGRA - DELHI",
        description:
          "Drive to Delhi and check into hotel. Rest of day free for individual activities and shopping.",
      },
      {
        day: 13,
        title: "DEPART DELHI",
        description:
          "Full day city tour of Old and New Delhi covering major attractions. Evening transfer to airport for departure.",
      },
    ],
  },
  {
    id: 2,
    title: "India Buddhist Tour",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=80",
    duration: "10 nights / 11 days",
    groupSize: "10-15 People",
    rating: 4.8,
    reviews: 203,
    location: "India",
    category: "Heritage",
    difficulty: "Easy",
    description:
      "Comprehensive Buddhist heritage tour covering all major sites in India including ancient universities and sacred places. Follow the path of Buddha from Delhi to sacred destinations.",
    destinations:
      "Delhi - Patna - Rajgir - Bodhgaya - Varanasi - Sarnath - Kushinagar - Lumbini - Sravasti - Balrampur - Lucknow - Delhi",
    highlights: [
      "Nalanda Ancient University ruins",
      "Rajgir Magadha Empire capital",
      "Buddha's enlightenment site at Bodhgaya",
      "Sacred river Ganges at Varanasi",
      "Vaishali - Buddha's last sermon site",
    ],
    included: [
      "Heritage hotels & accommodation",
      "All meals and transportation",
      "Domestic flights where needed",
      "Expert Buddhist guide",
      "Entry fees to all monuments",
    ],
    itinerary: [
      {
        day: 1,
        title: "DELHI",
        description: "Welcome on arrival at Delhi and transfer to hotel.",
      },
      {
        day: 2,
        title: "DELHI",
        description:
          "Tour the historic city of old Delhi including Red Fort, Jama Masjid, Rajghat. Afternoon tour of New Delhi including Humanyun Tomb, Qutab Minar, India Gate, Birla Mandir, Bahai Temple.",
      },
      {
        day: 3,
        title: "DELHI / PATNA",
        description:
          "Early morning flight to ancient city of Patna. Afternoon excursion to Vaishali where Lord Buddha preached his last sermon. Visit stupas and Ashoka pillar.",
      },
      {
        day: 4,
        title: "PATNA / RAJGIR",
        description:
          "Drive to Rajgir, capital of 6th century Magadha empire. Visit Gridhrakula, Sapataparni cave, Ajatsatru fort and Venuvana. Afternoon visit Nalanda University ruins.",
      },
      {
        day: 5,
        title: "RAJGIR / BODHGAYA",
        description:
          "Drive to Bodhgaya. Enroute visit Baraliar caves - earliest examples of rock cut caves. These caves served as inspiration for E.M Forester's 'A Passage to India'.",
      },
      {
        day: 6,
        title: "BODHGAYA",
        description:
          "Full day exploring Bodhgaya - one of the holiest Buddhist pilgrimage centres. Visit Bodhi tree, Satabodhi temple, Japanese and Tibetan monasteries, and Magadha university museum.",
      },
      {
        day: 7,
        title: "BODHGAYA / VARANASI",
        description:
          "Drive to Varanasi. Arrive by afternoon. Visit ghats, temples and Benaras Hindu University.",
      },
      {
        day: 8,
        title: "VARANASI / SARNATH",
        description:
          "Early morning boat ride on Ganges to see sunrise. Excursion to Sarnath where Buddha preached his first sermon. Visit Dhamekh and Dharmarajika stupas.",
      },
      {
        day: 9,
        title: "VARANASI / KUSHINAGAR",
        description:
          "Drive to Kushinagar where Buddha passed into Parinirvana. Visit Ramabha stupa and Natha Kumarka Kot with recumbent Buddha figure.",
      },
      {
        day: 10,
        title: "KUSHINAGAR / LUMBINI / SRAVASTI",
        description:
          "Excursion to Lumbini - Buddha's birthplace. Visit ancient shrine with nativity image. Drive to Balrampur and visit Sravasti and other Buddhist shrines.",
      },
      {
        day: 11,
        title: "BALRAMPUR / LUCKNOW / DELHI",
        description:
          "Drive to Lucknow for flight to Delhi. Transfer to international airport for onward destination.",
      },
    ],
  },
  {
    id: 3,
    title: "Way to Enlightenment",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    duration: "7 nights / 8 days",
    groupSize: "8-12 People",
    rating: 4.9,
    reviews: 89,
    location: "India - Nepal",
    category: "Spiritual",
    difficulty: "Easy",
    description:
      "Follow the sacred journey of Buddha through the most important sites of his life - from enlightenment to first sermon to final nirvana.",
    destinations:
      "Bodhgaya - Patna - Kushinagar - Lumbini - Sravasti - Varanasi",
    highlights: [
      "Bodhgaya - Place of enlightenment",
      "Kushinagar - Buddha's final nirvana",
      "Lumbini - Buddha's birthplace",
      "Sravasti - Place of miracles",
      "Sarnath - First sermon site",
    ],
    included: [
      "Comfortable accommodation",
      "All meals and transfers",
      "Border crossing assistance",
      "Meditation sessions",
      "Experienced Buddhist guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "BODHGAYA",
        description:
          "Arrive Bodhgaya & transfer to Hotel. Overnight at Hotel in Bodhgaya.",
      },
      {
        day: 2,
        title: "BODHGAYA / PATNA",
        description:
          "Proceed to Rajgir and Nalanda. After sightseeing of Rajgir and Nalanda proceed to Patna. On Arrival at Patna transfer to Hotel.",
      },
      {
        day: 3,
        title: "PATNA / KUSHINAGAR",
        description:
          "After breakfast proceed to Kushinagar enroute visit Vaishali. On arrival transfer to Hotel. Kushinagar - The place where Buddha entered perfect tranquillity.",
      },
      {
        day: 4,
        title: "KUSHINAGAR / LUMBINI",
        description:
          "After breakfast proceed to Lumbini (situated in Nepal). After clearing Immigration & Custom Formalities visit Lumbini. Lumbini - Birth place of Lord Buddha",
      },
      {
        day: 5,
        title: "LUMBINI / SRAVASTI",
        description:
          "After breakfast proceed to Sravasti. Entering in India again. On arrival sightseeing of Sravasti. Sravasti - The place of Miracles",
      },
      {
        day: 6,
        title: "SRAVASTI / VARANASI",
        description:
          "After breakfast proceed to Varanasi (Sarnath). On arrival transfer to Hotel. Sarnath - The place of first sermon.",
      },
      {
        day: 7,
        title: "VARANASI / BODHGAYA",
        description:
          "Morning Boat ride on river Ganges. After Breakfast excursion to Sarnath, afternoon proceed to Bodhgaya. Bodhgaya - The place of enlightenment.",
      },
      {
        day: 8,
        title: "BODHGAYA OUT",
        description:
          "Morning sightseeing of Bodhgaya, visiting Maha Bodhi Temple & Monasteries. Afternoon transfer to Airport for onward destinations.",
      },
    ],
  },
  {
    id: 4,
    title: "In the Footsteps of Buddha",
    image:
      "https://images.unsplash.com/photo-1512200073482-a62e4b94c2e2?auto=format&fit=crop&w=1200&q=80",
    duration: "9 nights / 10 days",
    groupSize: "10-15 People",
    rating: 4.7,
    reviews: 95,
    location: "India",
    category: "Cultural",
    difficulty: "Easy",
    description:
      "A comprehensive journey tracing Buddha's life from birth to enlightenment, covering all four sacred sites mentioned in Buddhist scriptures.",
    destinations:
      "Delhi - Kushinagar - Lumbini - Sravasti - Bodhgaya - Varanasi - Sarnath",
    highlights: [
      "Four sacred sites of Buddhism",
      "Ancient university ruins at Nalanda",
      "Sacred Bodhi tree at Bodhgaya",
      "Ganges river ceremonies",
      "Traditional Buddhist monasteries",
    ],
    included: [
      "Heritage accommodation",
      "All transportation",
      "Professional guide",
      "Cultural activities",
      "Meditation sessions",
    ],
    itinerary: [
      {
        day: 1,
        title: "ARRIVE DELHI",
        description:
          "Welcome to India! Transfer to hotel and rest after international flight.",
      },
      {
        day: 2,
        title: "DELHI SIGHTSEEING",
        description:
          "Full day exploring historic Delhi - Red Fort, Jama Masjid, India Gate, and other monuments.",
      },
      {
        day: 3,
        title: "DELHI TO KUSHINAGAR",
        description:
          "Travel to Kushinagar, the place where Buddha attained Mahaparinirvana. Visit Ramabha Stupa.",
      },
      {
        day: 4,
        title: "KUSHINAGAR TO LUMBINI",
        description:
          "Cross into Nepal to visit Lumbini, the birthplace of Buddha. Explore the sacred garden and archaeological remains.",
      },
      {
        day: 5,
        title: "LUMBINI TO SRAVASTI",
        description:
          "Return to India and proceed to Sravasti, where Buddha performed great miracles and spent 25 rainy seasons.",
      },
      {
        day: 6,
        title: "SRAVASTI TO BODHGAYA",
        description:
          "Travel to Bodhgaya via Lucknow. Arrive at the holiest Buddhist site where Buddha attained enlightenment.",
      },
      {
        day: 7,
        title: "BODHGAYA",
        description:
          "Full day exploring Bodhgaya - Mahabodhi Temple, Bodhi Tree, various international monasteries.",
      },
      {
        day: 8,
        title: "BODHGAYA TO VARANASI",
        description:
          "Travel to Varanasi, one of the world's oldest cities. Evening visit to ghats for aarti ceremony.",
      },
      {
        day: 9,
        title: "VARANASI & SARNATH",
        description:
          "Early morning boat ride on Ganges. Visit Sarnath where Buddha gave his first sermon after enlightenment.",
      },
      {
        day: 10,
        title: "DEPARTURE",
        description:
          "Transfer to airport for departure or continue to next destination.",
      },
    ],
  },
  {
    id: 5,
    title: "India - The Land of Buddha",
    image:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1200&q=80",
    duration: "14 nights / 15 days",
    groupSize: "10-15 People",
    rating: 4.8,
    reviews: 132,
    location: "India",
    category: "Heritage",
    difficulty: "Moderate",
    description:
      "The most comprehensive Buddhist tour of India, covering all major Buddhist sites along with cultural experiences and historical monuments.",
    destinations:
      "Delhi - Agra - Varanasi - Bodhgaya - Rajgir - Patna - Kushinagar - Lumbini - Lucknow",
    highlights: [
      "Taj Mahal and Red Fort in Agra",
      "All major Buddhist pilgrimage sites",
      "Ancient universities and monasteries",
      "Cultural shows and local experiences",
      "Historical monuments of Delhi",
    ],
    included: [
      "Luxury heritage hotels",
      "All meals and transportation",
      "Domestic flights",
      "Professional guides",
      "Cultural performances",
    ],
    itinerary: [
      {
        day: 1,
        title: "ARRIVE DELHI",
        description:
          "Welcome to India. Transfer to hotel and orientation about the tour.",
      },
      {
        day: 2,
        title: "DELHI SIGHTSEEING",
        description:
          "Comprehensive tour of Old and New Delhi including Red Fort, Jama Masjid, India Gate, Humayun's Tomb.",
      },
      {
        day: 3,
        title: "DELHI TO AGRA",
        description:
          "Drive to Agra. Visit the magnificent Taj Mahal at sunset and Agra Fort.",
      },
      {
        day: 4,
        title: "AGRA TO VARANASI",
        description:
          "Take train to Varanasi. Evening visit to the ghats for spiritual atmosphere.",
      },
      {
        day: 5,
        title: "VARANASI & SARNATH",
        description:
          "Early morning boat ride on Ganges. Visit Sarnath - deer park where Buddha gave first sermon.",
      },
      {
        day: 6,
        title: "VARANASI TO BODHGAYA",
        description:
          "Travel to Bodhgaya, the most sacred Buddhist site where Buddha attained enlightenment.",
      },
      {
        day: 7,
        title: "BODHGAYA",
        description:
          "Full day exploring Mahabodhi Temple complex, Bodhi Tree, and various international monasteries.",
      },
      {
        day: 8,
        title: "BODHGAYA TO RAJGIR",
        description:
          "Visit Rajgir, ancient capital of Magadha. Explore Griddhakuta Hill and Bamboo Grove.",
      },
      {
        day: 9,
        title: "RAJGIR & NALANDA",
        description:
          "Visit the ruins of Nalanda University, one of the world's first universities.",
      },
      {
        day: 10,
        title: "RAJGIR TO PATNA",
        description:
          "Travel to Patna. Visit Patna Museum and explore the ancient city.",
      },
      {
        day: 11,
        title: "PATNA & VAISHALI",
        description:
          "Excursion to Vaishali where Buddha preached his last sermon. See Ashoka Pillar and stupas.",
      },
      {
        day: 12,
        title: "PATNA TO KUSHINAGAR",
        description:
          "Travel to Kushinagar, the place of Buddha's Mahaparinirvana.",
      },
      {
        day: 13,
        title: "KUSHINAGAR TO LUMBINI",
        description:
          "Cross border to Nepal and visit Lumbini, the birthplace of Buddha.",
      },
      {
        day: 14,
        title: "LUMBINI TO LUCKNOW",
        description:
          "Return to India. Travel to Lucknow for flight connections.",
      },
      {
        day: 15,
        title: "DEPARTURE",
        description:
          "Transfer to airport for departure to Delhi or international destination.",
      },
    ],
  },
  {
    id: 6,
    title: "Ajanta and Ellora Buddhist Heritage",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80",
    duration: "5 nights / 6 days",
    groupSize: "8-15 People",
    rating: 4.6,
    reviews: 78,
    location: "Maharashtra, India",
    category: "Heritage",
    difficulty: "Easy",
    description:
      "Explore the magnificent rock-cut temples and caves of Ajanta and Ellora, showcasing the finest Buddhist art and architecture from ancient India.",
    destinations: "Mumbai - Aurangabad - Ajanta - Ellora - Mumbai",
    highlights: [
      "30 rock-cut caves at Ajanta",
      "Buddhist, Hindu & Jain caves at Ellora",
      "Ancient Buddhist paintings and sculptures",
      "UNESCO World Heritage sites",
      "Archaeological museum visits",
    ],
    included: [
      "Comfortable accommodation",
      "All transportation",
      "Professional guide",
      "Entry fees",
      "Cultural insights",
    ],
    itinerary: [
      {
        day: 1,
        title: "ARRIVE MUMBAI",
        description:
          "Arrive Mumbai and fly to Aurangabad. Transfer to hotel and rest.",
      },
      {
        day: 2,
        title: "AJANTA CAVES",
        description:
          "Full day exploring the 30 rock-cut caves of Ajanta, famous for Buddhist paintings and sculptures dating from 2nd century BCE to 6th century CE.",
      },
      {
        day: 3,
        title: "ELLORA CAVES",
        description:
          "Visit the 34 cave temples at Ellora - 12 Buddhist caves, 17 Hindu caves, and 5 Jain caves. Marvel at the Kailash Temple.",
      },
      {
        day: 4,
        title: "AURANGABAD",
        description:
          "Explore Bibi Ka Maqbara and local markets. Visit Aurangabad caves if time permits.",
      },
      {
        day: 5,
        title: "AURANGABAD TO MUMBAI",
        description: "Fly back to Mumbai. City orientation and rest.",
      },
      {
        day: 6,
        title: "DEPARTURE",
        description: "Transfer to international airport for departure.",
      },
    ],
  },
  {
    id: 7,
    title: "Gaya Buddhist Circuit",
    image:
      "https://images.unsplash.com/photo-1578916171247-e3d86d4895aa?auto=format&fit=crop&w=1200&q=80",
    duration: "4 nights / 5 days",
    groupSize: "6-12 People",
    rating: 4.7,
    reviews: 92,
    location: "Bihar, India",
    category: "Pilgrimage",
    difficulty: "Easy",
    description:
      "Focused pilgrimage tour centered around Bodhgaya and nearby sacred Buddhist sites in Bihar, perfect for spiritual seekers.",
    destinations: "Gaya - Bodhgaya - Rajgir - Nalanda - Pawapuri",
    highlights: [
      "Mahabodhi Temple complex",
      "Bodhi Tree meditation",
      "International monastery visits",
      "Nalanda University ruins",
      "Rajgir hot springs",
    ],
    included: [
      "Simple comfortable lodging",
      "Vegetarian meals",
      "Local transportation",
      "Meditation guidance",
      "Spiritual discourse",
    ],
    itinerary: [
      {
        day: 1,
        title: "ARRIVE GAYA",
        description:
          "Arrive Gaya airport. Transfer to Bodhgaya and check into accommodation.",
      },
      {
        day: 2,
        title: "BODHGAYA",
        description:
          "Full day at Bodhgaya. Visit Mahabodhi Temple, meditate under Bodhi Tree, explore international monasteries.",
      },
      {
        day: 3,
        title: "RAJGIR",
        description:
          "Day trip to Rajgir. Visit Griddhakuta Hill, Bamboo Grove, hot springs, and ropeway to peace pagoda.",
      },
      {
        day: 4,
        title: "NALANDA & PAWAPURI",
        description:
          "Visit Nalanda University ruins and Pawapuri, the place of Lord Mahavira's nirvana.",
      },
      {
        day: 5,
        title: "DEPARTURE",
        description:
          "Final prayers at Bodhgaya temple. Transfer to Gaya airport for departure.",
      },
    ],
  },
  {
    id: 8,
    title: "Sarnath Spiritual Journey",
    image:
      "https://images.unsplash.com/photo-1588871453993-0b1c9e9bb1ab?auto=format&fit=crop&w=1200&q=80",
    duration: "3 nights / 4 days",
    groupSize: "8-15 People",
    rating: 4.5,
    reviews: 67,
    location: "Uttar Pradesh, India",
    category: "Spiritual",
    difficulty: "Easy",
    description:
      "Concentrated spiritual experience at Sarnath and Varanasi, focusing on Buddha's first sermon and the sacred Ganges.",
    destinations: "Varanasi - Sarnath - Chunar",
    highlights: [
      "Dhamekh Stupa at Sarnath",
      "Archaeological museum",
      "Ganges boat rides",
      "Ancient ghats of Varanasi",
      "Buddhist meditation sessions",
    ],
    included: [
      "Heritage hotel stay",
      "All meals",
      "Boat rides",
      "Museum entries",
      "Spiritual guidance",
    ],
    itinerary: [
      {
        day: 1,
        title: "ARRIVE VARANASI",
        description:
          "Arrive Varanasi. Transfer to hotel. Evening ghats visit and aarti ceremony.",
      },
      {
        day: 2,
        title: "SARNATH",
        description:
          "Morning boat ride on Ganges. Full day at Sarnath - visit Dhamekh Stupa, museum, deer park, and modern temples.",
      },
      {
        day: 3,
        title: "VARANASI & CHUNAR",
        description:
          "Explore old Varanasi lanes and markets. Afternoon visit to Chunar Fort.",
      },
      {
        day: 4,
        title: "DEPARTURE",
        description:
          "Final morning prayers. Transfer to airport for departure.",
      },
    ],
  },
];

const ToursPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [expandedTour, setExpandedTour] = useState<number | null>(null);
  const categories = ["All", "Pilgrimage", "Cultural", "Heritage", "Spiritual"];
  const difficulties = ["All", "Easy", "Moderate"];

  const filteredTours = tours.filter((tour) => {
    return (
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" ||
        selectedCategory === "All" ||
        tour.category === selectedCategory) &&
      (selectedDifficulty === "" ||
        selectedDifficulty === "All" ||
        tour.difficulty === selectedDifficulty)
    );
  });

  const toggleItinerary = (tourId: number) => {
    setExpandedTour(expandedTour === tourId ? null : tourId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#ed3237] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Buddhist Sacred Journeys
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Experience spiritual transformation through authentic Buddhist
              pilgrimage tours across Asia's most sacred destinations
            </p>
            <div className="flex items-center justify-center space-x-4 text-lg">
              <div className="flex items-center space-x-2">
                <Star className="fill-current text-yellow-400" size={20} />
                <span>4.8 Average Rating</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Users size={20} />
                <span>Small Groups</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <MapPin size={20} />
                <span>5 Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search tours by destination or keyword..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Filter size={20} />
                <span>Filters</span>
                {showFilters ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
            </div>

            {showFilters && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Difficulty
                    </label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                    >
                      {difficulties.map((difficulty) => (
                        <option key={difficulty} value={difficulty}>
                          {difficulty}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredTours.length} of {tours.length} tours
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">{tour.category}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="fill-current text-red-400" size={14} />
                      <span className="text-sm font-medium">{tour.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
                    <MapPin size={14} />
                    <span>{tour.location}</span>
                    <span>•</span>
                    <span>{tour.difficulty}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {tour.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {tour.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar size={16} />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users size={16} />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Highlights:
                    </h4>
                    <div className="space-y-1">
                      {tour.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            {highlight}
                          </span>
                        </div>
                      ))}
                      {tour.highlights.length > 3 && (
                        <div className="text-red-600 text-xs mt-1">
                          +{tour.highlights.length - 3} more highlights
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-1">
                      <Star className="fill-current text-red-400" size={16} />
                      <span className="text-sm font-medium text-gray-700">
                        {tour.rating} ({tour.reviews} reviews)
                      </span>
                    </div>
                    <div className="space-x-3">
                      <button
                        onClick={() => toggleItinerary(tour.id)}
                        className="text-red-600 hover:text-red-700 font-medium"
                      >
                        {expandedTour === tour.id
                          ? "Hide Details"
                          : "View Itinerary"}
                      </button>
                      <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-medium">
                        Book Now
                      </button>
                    </div>
                  </div>

                  {/* Expanded Itinerary */}
                  {expandedTour === tour.id && (
                    <div className="mt-6 pt-6 border-t">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-lg mb-3 text-gray-800">
                            Day-by-Day Itinerary
                          </h4>
                          <div className="space-y-3 max-h-64 overflow-y-auto">
                            {tour.itinerary.map((day, idx) => (
                              <div
                                key={idx}
                                className="bg-gray-50 p-3 rounded-lg"
                              >
                                <div className="font-medium text-red-600 text-sm">
                                  Day {day.day}
                                </div>
                                <div className="font-medium text-gray-800 text-sm">
                                  {day.title}
                                </div>
                                <div className="text-xs text-gray-600 mt-1">
                                  {day.description}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-3 text-gray-800">
                            What's Included
                          </h4>
                          <div className="space-y-2">
                            {tour.included.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4">
                            <h4 className="font-bold text-lg mb-2 text-gray-800">
                              Route
                            </h4>
                            <p className="text-sm text-gray-600">
                              {tour.destinations}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
            Can't Find the Perfect Tour?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let us create a custom Buddhist pilgrimage tailored to your
            spiritual interests
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Request Custom Tour
          </button>
        </div>
      </section>
    </div>
  );
};

export default ToursPage;
