import { MapPin, Clock, Star } from "lucide-react";
import { useState } from "react";

interface Destination {
  name: string;
  description: string;
  significance: string;
  location?: string;
  accessibility?: {
    road?: string;
    rail?: string;
    air?: string;
  };
  bestTime?: string;
  specialNote?: string;
}

const BuddhistToursPage = () => {
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [expandedTours, setExpandedTours] = useState<Set<number>>(new Set());

  const toggleTourExpansion = (tourIndex: number) => {
    const newExpandedTours = new Set(expandedTours);
    if (newExpandedTours.has(tourIndex)) {
      newExpandedTours.delete(tourIndex);
    } else {
      newExpandedTours.add(tourIndex);
    }
    setExpandedTours(newExpandedTours);
  };

  const tourCategories = [
    {
      title: "Buddhist Temples Monuments",
      description:
        "India abounds in Buddhist sites and monuments. Right from the ancient rock edicts to the exquisitely carved stupas to the splendid Buddhist monasteries and temples, the state has it all. However, it was under the reign of Emperor Ashoka that Orissa became one of the major centers of Buddhism in the country. These magnificent structures stand as testament to the rich Buddhist heritage of India.",
      image: "/images/temples.jpg",
      destinations: [
        {
          name: "Amaravati Stupa Tour",
          description:
            "The Amaravati stupa, also known as Mahachaitya Stupa, has the privilege of being the largest stupa (95 feet high) in India - the birthplace of Buddhism. Built during the 2nd century BCE, the stupa was discovered by British archaeologist Colonel Colin Mackenzie in 1797. Originally a simple structure with limestone crossbars and simple carvings, it became a highly marked architectural monument when renovated by the Satavahana rulers. The capital of later Satavahana rulers in South India, Amaravati is situated on the right bank of river Krishna in Andhra Pradesh. Also known as Amaresvaram, it houses 2000-year-old Buddhist relics, making it an important pilgrimage site for Buddhists. Scholars identify it as Dhanyakataka, connecting Amaravati with the origin of many Tantric teachings, especially Kalchakra.",
          significance: "Largest Stupa in India & Kalchakra Origin Site",
          location: "Andhra Pradesh",
          accessibility: {
            road: "Taxis and buses available from Guntur (32 km away) and other places in the state",
            rail: "Nearest railheads at Guntur and Vijayawada, well connected to Bangalore, Kolkata, Mumbai and New Delhi",
            air: "Nearest airport at Vijayawada (82 km)",
          },
          bestTime: "October to February (avoid summers due to extensive heat)",
          specialNote:
            "His Holiness the Dalai Lama has consented to bestow 13-day Kalchakra gathering in Amaravati",
        },
        {
          name: "Bharut Stupa Tour",
          description:
            "The Bharhut Stupa, established by Emperor Ashoka in the 3rd century BCE, symbolizes the relation of classical Mauryan architecture with Buddhism. Later renovated by the Sunga rulers who added artwork in the 2nd century BCE, the stupa comprises numerous stories related to Buddha's reincarnations, represented through symbols such as the Bodhi tree, footprints, empty seat and wheel of dharma. A unique example of early Buddhist art, the stupa is frequently visited by Buddhists worldwide.",
          significance: "Classical Mauryan-Buddhist Architecture",
          location: "Satna, Madhya Pradesh",
          accessibility: {
            road: "14 km from Satna via bus or private taxi, on National Highway No.7",
            rail: "Satna is well connected on Mumbai-Howrah train route",
            air: "Nearest airport at Khajuraho (130 km from Satna)",
          },
          bestTime: "October to February",
          specialNote:
            "Near Chitrakoot (80 km), believed to be where Lord Rama spent years of exile",
        },
        {
          name: "Dhauli Hill Tour",
          description:
            "Dhauli Hill represents the place where Emperor Ashoka witnessed the carnage of Kalinga War and subsequently relinquished war to adopt Buddhism. The hill preserves Ashoka's edicts asking administrators to rule with equality and compassion. A major attraction is the Shanti Stupa (Peace Pagoda) built by Indians in collaboration with Japanese, featuring a circular edifice with mushroom-like dome and stone panels depicting Buddha's life, footprints, elephant procession, and Emperor Ashoka presenting his sword to Buddha.",
          significance: "Ashoka's Conversion to Buddhism Site",
          location: "8 km from Bhubaneswar, Khurda District, Orissa",
          accessibility: {
            road: "8 km from Bhubaneswar by road",
            rail: "Bhubaneswar railway station with connections to major cities",
            air: "Bhubaneswar airport with regular flights",
          },
          bestTime: "October to February",
          specialNote:
            "Features Saddharma Vihar Monastery and medieval Hindu temples",
        },
        {
          name: "Hirapur Temple Tour",
          description:
            "Home to the 64 Yogini or Mahamaya temple, Hirapur houses the smallest yogini temple in India built by Bhauma and Somavamsi rulers in the 9th century CE. The temple reflects feminine power in Orissa's religious practices, with the chief deity Mahamaya wrapped in red clothes and vermilion. All 64 yoginis are depicted wearing ornate jewelry and shown as huntresses, dancers, or balancing on wheels. The circular temple stands 8 feet high with 30 feet diameter, carved from fine-grained gray chlorite.",
          significance: "64 Yogini Temple & Feminine Power Worship",
          location: "15 km southeast of Bhubaneswar, Orissa",
          accessibility: {
            road: "15 km from Bhubaneswar by road",
            rail: "Bhubaneswar connected to major Indian cities",
            air: "Bhubaneswar airport with regular flights to Delhi, Mumbai, Chennai, Kolkata",
          },
          bestTime: "October to February",
          specialNote:
            "Yoginis still worshipped by locals, faces carved with gentle smiles",
        },
        {
          name: "Itanagar Temple Tour",
          description:
            "The Itanagar Buddhist temple, located on a hilltop in Arunachal Pradesh, is one of India's latest Buddhist temples. This yellow-roofed shrine reflects extensive Tibetan influence and features a stupa with a Buddhist monk's portrait. The temple is frequently visited by tourists and has a tree planted by His Holiness the Dalai Lama. Situated in 'the land of dawn lit mountains', Itanagar is the first place in India to embrace the rising sun's rays.",
          significance: "Latest Buddhist Temple with Dalai Lama Connection",
          location: "Itanagar, Arunachal Pradesh (350m above sea level)",
          accessibility: {
            road: "Bus services from Guwahati and northeastern places",
            rail: "Nearest railheads at Harmuti (32 km) and North Lakhimpur (60 km) in Assam",
            air: "Lilabari airport (67 km) and Tezpur airport (216 km)",
          },
          bestTime: "October to April",
          specialNote:
            "Tree planted by Dalai Lama, modern city developed in 14th-15th century CE",
        },
        {
          name: "Langudi Tour",
          description:
            "Langudi Buddhist sites in Jajpur district represent one of Orissa's most important Buddhist centers, marking the state's new Buddhist era. Excavated by Archaeological Survey of India, the site contains remains of Buddhist monasteries, Buddha images, and several stupas. Features 34 unique rock-cut stupas with colossal circular drums and cylindrical domes, rare 7th century CE Buddha sculptures in 'samadhi mudra', and rock-cut images of goddesses Tara and Prajnaparamita, indicating the importance of female cult in ancient periods.",
          significance: "Major Buddhist Site with Rock-cut Stupas",
          location:
            "Langudi Hills, Jajpur District, Orissa (90 km from Bhubaneswar)",
          accessibility: {
            road: "90 km from Bhubaneswar, 92 km from Cuttack via National Highway No. 5",
            rail: "Nearest railway station at Kesinga (35 km) on southeastern rail head",
            air: "Bhubaneswar airport (90 km)",
          },
          bestTime: "October to February",
          specialNote:
            "Preserved in all major Buddhist sects: Theravada, Mahayana, and Vajrayana",
        },
        {
          name: "Maha Bodhi Temple Tour",
          description:
            "The Maha Bodhi Temple in Bodh Gaya marks the sacred site where Lord Buddha attained enlightenment under the Bodhi Tree after discovering the 'Middle Way'. Built by Emperor Ashoka in 3rd century BCE, this 52-meter tall temple with gilded Buddha statue is one of the few early monumental brick structures surviving in northeastern India. The temple features a raised walkway (Chankramana Chaitya) where Buddha meditated, lotus pond for ablutions, and walls decorated with friezes depicting Buddha's life. Administered jointly by Hindus and Buddhists, representing unity in diversity.",
          significance: "Buddha's Enlightenment Site & Mahaparinirvana",
          location: "Bodh Gaya, Bihar (100 km from Patna)",
          accessibility: {
            road: "12 km from Gaya, well connected to Patna and Ranchi",
            rail: "Gaya railway station with services from many parts of India",
            air: "Direct flights to Colombo and Bangkok",
          },
          bestTime: "October to March",
          specialNote:
            "Template copied for temples in Nepal, Thailand, Myanmar; includes 116-year-old Bodhi Tree",
        },
        {
          name: "Ratnagiri Temple Tour",
          description:
            "Ratnagiri is a splendid Buddhist site situated on a small hill surrounded by rivers, 100 km from Bhubaneswar. Excavations revealed two large monasteries including Sri Ratnagiri Mahavihara Aryabhikshu Sangha, adorned with gorgeous doorways, cella sanctum, huge stupa, and massive Buddha idol. Initially a prominent Mahayana center, it shifted to Tantrik Buddhism (Vajrayana) in 8th-9th centuries. The site contributed to Kalachakratantra emergence in 10th century and features sculptural relics of Vajrapani, Lokeshwara, and Hindu mythology, plus monolithic stupas making it unique in India.",
          significance: "Mahayana to Vajrayana Buddhist Evolution Center",
          location:
            "Jajpur District, Orissa (100 km from Bhubaneswar, 70 km from Cuttack)",
          accessibility: {
            road: "100 km from Bhubaneswar, 70 km from Cuttack",
            rail: "Connected via Bhubaneswar and Cuttack railway stations",
            air: "Bhubaneswar airport",
          },
          bestTime: "October to February",
          specialNote:
            "Artifacts date back to 6th century Gupta dynasty; features Kunjalata and Patralata motifs",
        },
        {
          name: "Sanchi Stupa Tour",
          description:
            "The Sanchi stupa, built around 283 BCE by Emperor Ashoka, is the second largest stupa in India after Amaravati and is renowned for its scriptures. Surrounded by railings with four carved gateways facing all directions, the stupa comprises symbolic representations of nature's gifts explaining Buddhist doctrine. The lotus symbolizes people's rise from materialism to spirituality, while female tree spirits in gateways represent fertility. The entire structure reflects the people's love for nature and Buddhist teachings through artistic symbolism.",
          significance: "Second Largest Stupa & Symbolic Buddhist Art",
          location: "Sanchi, Madhya Pradesh (46 km from Bhopal)",
          accessibility: {
            road: "46 km from Bhopal, well-maintained road network",
            rail: "Nearest railhead at Vidisha (10 km), connected to Bhopal and major cities",
            air: "Bhopal airport connected to all major Indian cities",
          },
          bestTime: "October to April",
          specialNote:
            "Famous for symbolic representation of Buddhist doctrine through nature motifs",
        },
        {
          name: "Sirpur Temple Tour",
          description:
            "The Buddhist monastery at Sirpur, dating to 8th century CE, is one of India's largest and most important Buddhist monasteries, possibly more significant than Nalanda. Built by Mahashivgupt Balarjun, the site comprises remains of 100 Buddha Viharas, 4 Jain Viharas, 200 mounds, and over 100 Shiva temples. Features a unique nine-room area with eight ladders and statue of Haritika, a Buddhist female monk who transformed from child-abductor to protector. Visited by Chinese traveler Huien Tsang in 7th century CE, who described it as a pillar of Buddhism in central India.",
          significance: "Largest Buddhist Monastery & Multi-religious Center",
          location: "Sirpur, Chhattisgarh (78 km from Raipur)",
          accessibility: {
            road: "78 km from Raipur via National Highway No. 6, good bus network",
            rail: "Nearest railhead at Mahasamund (29 km)",
            air: "Raipur airport with domestic flights",
          },
          bestTime: "October to February",
          specialNote:
            "Contains Lakshman Temple and Hirapur Museum with multi-religious artifacts",
        },
        {
          name: "Udayagiri Temple Tour",
          description:
            "Udayagiri, part of the Buddhist Triangle with Ratnagiri and Lalitagiri, is Orissa's largest Buddhist complex situated at the foothills of a large hill. Recent excavations by Archaeological Survey of India unearthed Madhavapura Mahavihara monastery adorned with numerous Buddhist sculptures dating 7th-12th centuries. Referenced by Chinese traveler Hieun Tsang, the site boasts brick stupas, carved sculptures, and ancient inscriptions. Though mostly in ruins, the complex serves as a storehouse of Buddhist history information and attracts art lovers, historians, and researchers worldwide.",
          significance: "Largest Buddhist Complex in Orissa",
          location: "Jajpur District, Orissa",
          accessibility: {
            road: "Connected via Bhubaneswar and Cuttack",
            rail: "Accessible through major Orissa railway stations",
            air: "Bhubaneswar airport",
          },
          bestTime: "October to February",
          specialNote:
            "Forms Buddhist Triangle with Ratnagiri and Lalitagiri; mentioned by Hieun Tsang",
        },
      ],
    },
    {
      title: "Buddhist Festival in India",
      description:
        "India is the land of colourful festivals. Throughout the year, there is one or the other festival being celebrated in the country. Some of these festivals are celebrated throughout the country while others are celebrated in specific states, regions or even small villages. These festivals bring alive the splendid culture of the country and see a whole lot of people coming out to participate in them.Buddhist festivals of India are no exception to these. Being the land of the Buddha, India celebrates all those days as festivals that mark important days in the life of the Lord. Apart from this, there are also festival days that celebrates Buddha's teaching and spiritual community.The Buddhist festivals in India are a joyful time for the Buddhist community. It is for them a time to dance and rejoice. You can be a part of this celebration if you plan your trip to the country around the date of these festivals. This section on Buddhist Festivals tries to introduce you to all these festivals. It gives you the details of the festivals, why and how they are celebrated and also the upcoming date of that festival. So, come, be a part of these festivals in your coming vacations to India. You will not only have fun, but will also learn a lot about Buddhist religion on the whole.",
      image: "/images/festival.jpg",
      destinations: [
        {
          name: "Buddha Jayanti - Purnima Festival",
          description:
            "The Buddha Jayanti or Buddha Purnima celebrates the birth, enlightenment and ultimate passing away of Buddha. Also known as Vesak or Wesak worldwide, this festival is celebrated with great enthusiasm in India - the land where Buddha witnessed human miseries, renounced worldly pleasures, attained enlightenment and became the Buddha. In Bodh Gaya, where Buddha attained enlightenment under the sacred Bodhi Tree, people from worldwide attend ceremonies including prayer meets, sermons, religious discourse, continuous recitation of Buddhist scriptures, group meditation, processions, and worship. The Mahabodhi Temple is specially decorated. In Sarnath, where Buddha delivered His first sermon, a large fair is organized with public display of Buddha's relics in processions. In Sikkim, known as Saga Dasa, people visit monasteries, listen to sermons and give gifts to monks. In Delhi, Buddha's mortal remains are brought out from the National Museum for public viewing.",
          significance: "Buddha's Birth, Enlightenment & Parinirvana",
          location:
            "Celebrated across India, especially Bodh Gaya, Sarnath, Sikkim, Delhi, Sanchi",
          bestTime: "Full moon day in May (Buddha Purnima)",
          specialNote:
            "Most important Buddhist festival worldwide, celebrated by all Buddhist traditions",
        },
        {
          name: "Losar Festival",
          description:
            "One of the most important festivals of Tibetan Buddhists, Losar celebrates the Tibetan New Year. The term derives from 'Lo' (new) and 'sar' (year) in Tibetan. In Tibet it's celebrated for 15 days, but in India it's restricted to 3 days. In Ladakh, uniquely celebrated on the first day of the eleventh lunar month due to 17th century king Jamyang Namgyal's tradition. Preparations begin on the 29th day of the tenth lunar month with provisions stocking. Houses and shrines are illuminated, ibex images (fertility symbols) are hung on doors and placed on kitchen shelves. The evening features 'Metho' - a fire procession through Leh streets with villagers bearing flaming torches, chanting slogans to ward off evil spirits and hungry ghosts. In Himachal Pradesh, monasteries in Lahaul district perform spectacular chaam dances with elaborate costumes depicting good over evil. In Sikkim, Losoong marks harvest season conclusion and Sonam Losar (agricultural new year) is celebrated in December-January, while Gyalpo Lossar (actual new year) is marked by feasting and chaams at Pemayangtse.",
          significance: "Tibetan New Year & Spiritual Renewal",
          location:
            "Ladakh, Himachal Pradesh, Sikkim, and wherever Tibetan Buddhists reside",
          bestTime:
            "Varies by region - 11th lunar month in Ladakh, February in other areas",
          specialNote:
            "Features unique fire processions in Ladakh and spectacular masked dances in monasteries",
        },
        {
          name: "Hemis Festival",
          description:
            "One of the most important Buddhist festivals celebrating the birth of Guru Padmasambhava (Guru Rimpoche), regarded as the reincarnate of Lord Buddha. His birth on the 10th day of the fifth month of the Monkey year was predicted by Sakya Muni Buddha himself. Celebrated at Hemis Monastery (Chang Chub Sam Ling - 'lone place of the compassionate person'), constructed in 1630 by Stagsang Raspa Nawang Gyatso, 40 km southeast of Leh. The monastery houses a huge gilded image of Sakyamuni Buddha with blue hair and statue of Stagsang Raspa. Festival events occur in the rectangular courtyard with two raised square platforms, each three feet high with sacred poles. The celebration features early morning rituals on gompa top with portrait of 'Dadmokarpo' or 'Rygyalsras Rimpoche' displayed amidst drums, cymbals and pipes. The main attraction is beautiful Mask Dances (Chaams) depicting victory of good over evil. Every twelve years, a sacred thangka decorated with pearls and precious stones is unfurled, drawing massive crowds.",
          significance:
            "Guru Padmasambhava's Birthday & Victory of Good over Evil",
          location: "Hemis Monastery, Ladakh (40 km southeast of Leh)",
          bestTime: "25-26 June annually",
          specialNote:
            "Features sacred thangka display every 12 years and spectacular masked dances",
        },
        {
          name: "Ullambana Festival",
          description:
            "Primarily celebrated by Mahayana Buddhists, with Theravada Buddhists in Laos, Cambodia and Thailand also participating. Lasts half a month from first to fifteenth of eighth lunar month (July). The festival commemorates Buddha's disciple Maudgalyayana, who meditated and found his mother suffering in hell. Buddha advised offering food to the dead, which succeeded in relieving his mother and other souls. Maudgalyayana danced with joy at successful completion. The Sanskrit term 'Ullambana' means 'hanging upside down and suffering.' First day marks when Gates of Hell open, permitting ghosts to visit earth for fifteen days. The fifteenth day is Ancestors Day when families visit cemeteries to honor ancestors. People make food offerings to wandering spirits during this festival period.",
          significance: "Honoring Ancestors & Relieving Suffering Souls",
          location:
            "Buddhist centers across India, especially Mahayana communities",
          bestTime: "First to fifteenth of eighth lunar month (July)",
          specialNote:
            "Also known as Ancestors Day, features food offerings to spirits",
        },
        {
          name: "Sangha Day - Magha Puja Festival",
          description:
            "Commemorates the spontaneous gathering of 1,250 Arahats with Buddha's main disciples Ven. Sariputta and Ven. Moggalana at Veruvana Monastery in Rajagaha, where Buddha delivered Patimokkha (monastic rules). This assembly had four distinct features: all 1,250 were Arahants, all ordained by Buddha himself, all gathered without prior invitation, and gathering occurred on full moon of Magha month. Also known as Fourfold Assembly, Magha Puja Day, or Sangha Day. Honors the Sangha (Buddhist community), one of Buddhism's three jewels along with Buddha and Dhamma. For ordained community, it's time for meetings discussing Buddha's teachings, group meditation, and talks by senior members. Features exchange of gifts and lighting of oil lamps. Offers chance for people to reaffirm faith and commitment to Buddhist practices.",
          significance: "Buddhist Community Day & Monastic Unity",
          location:
            "Buddhist centers across India, with greater importance in Western Buddhist communities",
          bestTime: "Full moon day of third lunar month (March)",
          specialNote:
            "Celebrates the spontaneous gathering of 1,250 enlightened disciples",
        },
        {
          name: "Asalha Day Festival",
          description:
            "One of the most important Theravada Buddhist festivals celebrating Buddha's first teaching. After gaining enlightenment on Vesakha full moon, Buddha traveled 150 miles from Gaya to Benares (taking two months) to meet five friends. He delivered His first discourse containing essence of all future teachings. At conclusion, friend Kondañña understood the Truths and became first disciple through simple ordination, giving birth to the order of monks. This teaching is called 'setting into motion the wheel of dhamma,' comprising four noble truths: life means suffering (dukka), origin of suffering is attachment (tanha), cessation of suffering is attainable, and way to cessation is via eightfold path. Celebrated on full moon of eighth lunar month Asalha (monsoon start). During this period, three-month 'rains retreat' begins, concluding on Pavarana. Buddha's son Rahula was born during Asalha month, after which Buddha renounced royal pleasures for spiritual enlightenment.",
          significance: "Buddha's First Teaching & Dhamma Wheel Setting",
          location:
            "Theravada Buddhist centers across India, especially Sarnath",
          bestTime: "Full moon day of eighth lunar month (June-July)",
          specialNote:
            "Marks beginning of three-month rains retreat for monks and nuns",
        },
        {
          name: "Pavarana Day Festival",
          description:
            "Marks the end of three-month Rains Retreat that begins on Asalha full moon. 'Pavarana' means 'inviting admonition' or 'inviting others to advise.' Originated when wandering monks kept silence during three-month rainy season to avoid conflict. Buddha disapproved, advising monks to openly discuss likes/dislikes about monastic life for improvements. On this day, resident monks invite and reprimand one another constructively with love and compassion, discussing good and bad points of monastic life to promote unity and betterment. Also celebrates Buddha's return from Tavatimsa heaven where He spent seventh rains period giving Abhidhamma instruction to His mother Mayadevaputta and other gods. He returned to earth via jewelled stairways at Sankisa, where people gathered with alms to welcome Him. This 'Devrohana' (divine descent) makes Sankisa one of eight most revered Buddhist pilgrimage destinations. People visit temples presenting alms and food to monks.",
          significance: "End of Rains Retreat & Buddha's Return from Heaven",
          location:
            "Buddhist centers across India, especially Sankisa pilgrimage site",
          bestTime: "Full moon day of eleventh lunar month (October)",
          specialNote:
            "Commemorates Buddha's descent from heaven at Sankisa, one of eight sacred pilgrimage sites",
        },
      ],
    },
    {
      title: "Buddhism in Jammu & Kashmir",
      description:
        "Discover Buddhist heritage in the beautiful valleys of Kashmir, where ancient monasteries perch on mountain slopes offering breathtaking views and spiritual tranquility. Ladakh, in particular, is known as 'Little Tibet' for its rich Buddhist culture and stunning high-altitude desert landscapes.",
      image: "/images/kashmir.jpg",
      destinations: [
        {
          name: "Hemis Monastery",
          description:
            "Situated around 45 km south of Leh, Hemis Monastery is the most important monastery belonging to the Drupka order. Founded by Stagsang Raspa Nawang Gyatso in 1630, invited by King Sengye Namgyal who offered him religious estate and accepted him as principal guru. Monks of the Ka-gyu-pa (Red Hat sect) reside here. The monastery houses a huge gilded image of Sakyamuni Buddha with blue hair, numerous silver chortens embellished with semi-precious stones, and a lacquered wood throne gifted by Maharaja of Hemis. The Tsom-khang temple contains a statue of Stagshang Raspa with gold and silver chorten possessing his relics. Annual Hemis festival celebrates Guru Padmasambhava's victory over evil forces with masked dances on 10th-11th day of fifth Tibetan month. Every twelve years, a giant thangka decorated with pearls and precious stones is unfurled, drawing massive crowds.",
          significance:
            "Most Important Drupka Order Monastery & Largest in Ladakh",
          location: "45 km south of Leh, Ladakh",
          accessibility: {
            road: "Daily buses from Leh at 9 AM returning 12:30 PM, increased during festival; car journey easy for day trip",
            rail: "Jammu Tawi nearest railhead (680 km from Leh)",
            air: "Leh airport with flights to Delhi, Chandigarh, Srinagar",
          },
          bestTime:
            "June to October, especially during Hemis Festival (25-26 June)",
          specialNote:
            "Public holiday declared in Ladakh during festival; features 12-year sacred thangka display cycle",
        },
        {
          name: "Lamayuru Monastery",
          description:
            "At 120 km west of Leh lies one of Ladakh's earliest existing monasteries, perched on high promontory overlooking village and valley. Also known as Yung-drung (swastika), legend states the site was covered with lakewater during Shakyamuni Buddha's era. 11th century Indian Buddhist scholar Naropa meditated here for years in a cave, causing lake water to recede for monastery construction. Rinchen Tsangpo later enlarged and adorned it. In 16th century, gained status of holy site where even criminals could seek shelter without fear, earning name 'Tharpa Ling' (place of freedom). Main assembly hall Du-khang features colourful Guardian depictions, murals guiding lamas' proper life conduct, and Naropa's meditation cave with his statue alongside students Marpa and Mila Ras-pa. The Gonkhang temple houses fiercest guardian divinity Mahakala and other protective deities. Separate Avalokitesvara temple contains 8-foot high image with 1,000 arms and eleven heads. The significant Singhe Ghang Temple was built on spot where Naropa discovered dead lion, featuring Vairocana (Teaching Buddha) seated on lion throne.",
          significance:
            "One of Earliest Ladakh Monasteries & 'Place of Freedom'",
          location: "120 km west of Leh, dramatically perched on clifftop",
          accessibility: {
            road: "120 km from Leh or 107 km from Kargil; daily buses Leh-Srinagar (5 AM) and Leh-Kargil (5:30 AM); truck rides available, 6 hours journey",
            rail: "Jammu Tawi nearest railhead (680 km from Leh)",
            air: "Leh airport with daily Jet Airways and Alliance Air flights to Delhi, plus specific days to Srinagar, Jammu, Chandigarh",
          },
          bestTime:
            "June to October, especially during Yuru Kabgyat festival (2nd-3rd July)",
          specialNote:
            "Annual Yuru Kabgyat mask dance festival depicts guardian divinities and victory of good over evil",
        },
        {
          name: "Thiksey Monastery",
          description:
            "At 17 km south of Leh stands one of Ladakh's most beautiful monasteries. Initially constructed by Sherab Zangpo at Stakmo, later his nephew Paldan Sherab established it atop hill north of Indus River. Belonging to Gelukpa order, spreads over 12 storeys with incarnate lama's private abode at top. Main attraction is huge 15-meter tall Maitreya Buddha statue built at His Holiness Dalai Lama's behest during 1980 visit - largest Buddha figure in Ladakh, taking four years to complete using clay and gold paint by local craftsmen. Main prayer room contains handwritten and painted books, with small room behind housing huge Shakyamuni (historical Buddha) image flanked by two smaller Bodhisattva images and eleven-headed Avalokitesvara. Rooftop Lamokhang temple restricts entry to males only. Thiksey library repositories numerous volumes including Kangyur and Stangyur. Currently home to 80 monks, serving as main monastery for ten other significant Ladakhi monasteries including Diskit, Spituk, Likir, and Stok.",
          significance:
            "Most Beautiful Ladakh Monastery & Largest Buddha Statue",
          location: "17 km south of Leh, atop hill north of Indus River",
          accessibility: {
            road: "17 km from Leh on Leh-Manali Highway; buses available 7:30 AM to 9 PM; taxis readily available",
            rail: "Jammu Tawi nearest railhead (680 km from Leh)",
            air: "Leh airport with Jet Airways and Alliance flights to Delhi, Chandigarh, Srinagar, Jammu",
          },
          bestTime:
            "June to October, especially during annual festival (October 28-29)",
          specialNote:
            "Features 15m Maitreya Buddha blessed by Dalai Lama; annual Chham mask dance festival in 9th Tibetan month",
        },
        {
          name: "Spituk Monastery",
          description:
            "In 11th century, Od-De established monastery on hill near Indus River, 18 km from Leh. Originally associated with Kadampa School, later dedicated to Gelukpa order during King Gragspa Bumide's rule. Great translator Rinchen Zangpo named it Spituk meaning 'exemplary.' Prime attraction is chapel of Tara with 21 excellently sculpted images representing her different manifestations. Monastery owns rich collection of ancient masks, antique arms, icons and numerous Thankas. Above monastery on hill stands shrine with Vajrabhairava as presiding deity, whose fearsome face is shown only once yearly during January festival. Du-khang (main temple) features powerful protecting deities on walls, five rows of low lama seats, and high throne reserved for Dalai Lama with Buddha manifestations behind. Chokhang temple houses large Shakyamuni statue with Guru Padmasambhava left and goddess Tara right. Gonkhang, largest temple, dedicates to Kali Mata/Mahakala (fiercest Buddhist guardian) requiring flashlight due to minimal lighting.",
          significance: "Exemplary Monastery with Unique Tara Chapel",
          location: "18 km from Leh on hill near Indus River",
          accessibility: {
            road: "18 km from Leh; buses ply 7:30 AM to 9 PM; taxis available",
            rail: "Jammu Tawi nearest railhead (680 km)",
            air: "Leh airport with flights to Delhi, Jammu, Srinagar",
          },
          bestTime:
            "June to October, especially during Spituk Gustor festival (January 17-18)",
          specialNote:
            "Annual Spituk Gustor festival features symbolic 'killing' ceremony destroying all evils; 21 unique Tara manifestations",
        },
        {
          name: "Srinagar Tour",
          description:
            "Capital of Jammu and Kashmir and largest city in state, famous for canals, houseboats and Mughal gardens. Founded by King Pravarasena-II over 2,000 years ago, city has long history dating to 3rd century BC as part of Maurya Empire. Ashoka introduced Buddhism to Kashmir valley, making adjoining regions Buddhist center. In 1st Century under Kushans, several rulers strengthened Buddhist tradition. Hindu and Buddhist rule lasted until 14th century when Muslim rulers including Mughals took control. City located on both sides of Jhelum River with nine old bridges connecting two parts. Major attractions include Hazratbal Shrine housing Prophet Mohammad's sacred hair, Dal Lake with houseboats against mountain backdrop, Nagin Lake surrounded by flowerbeds and chinar groves, and Shankaracharya Temple dedicated to Lord Shiva on Takht-e-Suleiman hill - supposedly Kashmir valley's oldest shrine. Climate is alpine with mild summers (April-June) and cold winters (November-February) with heavy snowfall December-February.",
          significance:
            "Historic Capital & Cultural Center with Buddhist Heritage",
          location: "Kashmir Valley, both sides of Jhelum River",
          accessibility: {
            road: "Well connected to Jammu, Leh, and other J&K cities via National Highways",
            rail: "Nearest major railhead at Jammu Tawi",
            air: "Srinagar airport with regular flights to major Indian cities",
          },
          bestTime:
            "April to October for sightseeing; December-February for snow",
          specialNote:
            "Center of Buddhism during Maurya and Kushan periods; features unique houseboat stays on Dal Lake",
        },
        {
          name: "Gulmarg Tour",
          description:
            "Beautiful Kashmir valley destination literally meaning 'meadow of flowers.' Originally called Gaurimag after Shiva's consort, located 52 km southwest of Srinagar in Baramulla district at 2730 meters altitude with gently sloping topography. Discovered by British in 1927 during colonial rule, hosted British Resident and Europeans. Asia's only heli-skiing resort offering immense beauty and adventure activities. Main skiing resort with equipment and instructors available; best season November-February with slopes varying 8,700-10,500 feet (highest in India). Features world's highest 18-hole golf course with equipment hire and short-term memberships. Newly constructed gondola lift through pine-clad slopes reaches above 15,000 feet - among world's highest. Attractions include Khilanmarg (famous skiing spot with Kashmir valley and Himalayan views), Alpather Lake (picturesque alpine lake frozen until late June), Wular Lake (largest fresh-water lake in Kashmir, second largest in India), and Manasbal Lake (known for lotus blossoms).",
          significance:
            "Asia's Only Heli-skiing Resort & World's Highest Golf Course",
          location:
            "52 km southwest of Srinagar, Baramulla district, 2730m altitude",
          accessibility: {
            road: "Well connected to Srinagar, Pahalgam, Sonamarg, Jammu via road network",
            rail: "Nearest railway station at Jammu",
            air: "Srinagar airport 57 km away with regular flights to major cities",
          },
          bestTime:
            "November-February for skiing; May-September for general tourism",
          specialNote:
            "Bollywood filming location; gondola lift experience among world's highest; combines adventure sports with natural beauty",
        },
        {
          name: "Sonamarg Tour",
          description:
            "Small beautiful hill resort at 2740m height literally meaning 'Meadow of Gold' due to spring flowers wrapping meadow. Lies on main trading route into Central Asia, last major Kashmir valley point before Zoji La pass into Ladakh where green lush Kashmiri landscape changes to barren dry Ladakh terrain. Passage through Sindh Valley presents another countryside face. Main base for treks along mountain lakes Vishansar, Kishansar, Gadsar, Satsar and Gangabal. Major point for Ladakh drive across Zoji La pass and base for holy Amarnath cave yatra. Sindh River flowing through offers trout and mahseer fishing, plus Krishnasar Lake trout fishing. Attractions include Nilagrad (Baltic colony 6 km away where mountain river meets Indus - reddish water believed having curative powers), Yousmarg (picnic spot with green pastures, pines and firs), Nichnai Pass (vintage point for Vishansar, Krishansar, Gangabal lakes), Thajiwas (known for glaciers with miniature plateaus, snowfields, pines), and beautiful Bisansar Lake (4084m) and Krishnasar Lake (3801m) famous for trout fishing.",
          significance: "Gateway to Ladakh & Amarnath Yatra Base",
          location: "Srinagar-Leh Highway, 81 km from Srinagar, 2740m altitude",
          accessibility: {
            road: "On Srinagar-Leh Highway; National Highway NH1A connects via Srinagar and Anantnag",
            rail: "Jammu nearest railway station connected via NH1A",
            air: "Badgam District airport connecting to major Indian cities",
          },
          bestTime: "April to June for optimal weather and accessibility",
          specialNote:
            "Historic Central Asia trading route; offers both trekking adventures and spiritual Amarnath pilgrimage access",
        },
      ],
    },
    {
      title: "Buddhism in Himachal",
      description:
        "Journey through Himalayan Buddhist centers in Himachal Pradesh, where the Dalai Lama resides and Tibetan Buddhism flourishes. Experience the unique blend of Indian and Tibetan cultures in this spiritual haven nestled in the mountains.",
      image: "/images/himachal.jpg",
      destinations: [
        {
          name: "Kinnaur Tour",
          description:
            "One of the most fascinating cities in Himachal Pradesh, Kinnaur is decked with rivers, valleys, lofty peaks, lakes, and lush greenery. Witnesses various colorful festivals celebrated year-round. Excellent place for shopping handicraft items and fruits. Perfect trekking destination with magnificent attractions including Kalpa (heritage village housing Narayan-Nagani temple and Buddhist monasteries including Hu-Bu-Ian-Car Gompa), Reckong Peo (2670m above sea level providing spectacular Kinner Kailash peak view with 79-feet rock formation resembling Shivalinga changing colors throughout day), Kothi (village with Goddess Shuwang Chandika temple adorned with lush fields, fruit trees, vineyards against Kinner Kailash backdrop), Moorang (picturesque village approached through apricot orchard with old fort believed built by Pandavas overlooking River Satluj), and three wildlife sanctuaries: Lipa-Asrang, Rakchham Chhitkul, and Rupi Bhaba providing shelter to diverse faunal species across multifarious forest types.",
          significance:
            "Buddhist Monasteries & Kinner Kailash Sacred Peak Views",
          location:
            "Himachal Pradesh, featuring heritage villages and Buddhist gompas",
          accessibility: {
            road: "Well-connected by National Highway-22, reachable by jeeps and taxis",
            rail: "Closest railway station at Shimla, connected by narrow gauge line from Kalka",
            air: "Nearest airport at Shimla (235 km), reachable from Delhi",
          },
          bestTime: "April to October for optimal weather and accessibility",
          specialNote:
            "Features Hu-Bu-Ian-Car Gompa and spectacular Kinner Kailash peak with color-changing Shivalinga rock formation",
        },
        {
          name: "Lahaul-Spiti Tour",
          description:
            "Lahaul-Spiti became Himachal Pradesh district in 1960, one of India's frontier districts 120 km from Manali with snow-fed glaciers and barren mountains. Keylong headquarters serves as oasis of green fields. Twin valleys Lahaul and Spiti connected via Kunzum Pass (4,520m) in North-Eastern Himachal corner. Lahaul plateau nourished by Chandra and Bhaga rivers, surrounded by Great Himalayas (North), Pir Panjal (South), Spiti and Chandra watershed (East). Features curious Buddhist-Hindu mixture with numerous monasteries and temples. Major attractions include Keylong (3,340m district headquarters with Tayul, Khardong, Shashur monasteries), Tabo village with 10th century monastery housing 60+ lamas, rare paintings, wall paintings, 'Tankhas' and 'Stucco', Ki-Monastery (oldest, biggest Spiti monastery with 300 lamas receiving training, rare Buddha paintings and scriptures), Yang-Yud Gompa near narrow Kaza Nullah gorge, Kunzum Pass (4,590m gateway to Spiti with panoramic Bara-Sigri glacier views), and Kaza (3,800m Spiti valley sub-divisional headquarters).",
          significance:
            "Ancient Buddhist Monasteries & High-Altitude Desert Landscape",
          location:
            "Himachal Pradesh, 3,165m altitude, between 31°44'57''-32°59'57'' North",
          accessibility: {
            road: "Sole access via 3,978m high Rohtang Pass at Kullu valley top near Manali",
            rail: "Access only via Rohtang Pass from Manali direction",
            air: "Access only via Rohtang Pass from Manali direction",
          },
          bestTime: "June to October when Rohtang Pass is accessible",
          specialNote:
            "Houses 10th century Tabo monastery considered second only to Thelong Gompa in Tibet; Keylong distance 115 km from Manali",
        },
        {
          name: "McLeodganj Tour",
          description:
            "Established mid-19th century as British garrison, initially home of semi-nomadic Gaddi tribe. Since 1960, serves as residence of His Holiness 14th Dalai Lama Tenzin Gyatso, with considerable Gaddi families still living in surrounding villages. Major attractions include Dalai Lama's Residence (south edge of town, most transformed to government offices with Dalai Lama occupying small portion), Tsuglagkhang (main Buddhist temple opposite Dalai Lama's residence housing images of Shakyamuni, Padmasambhava and Avalokitesvara in meditation postures), Gompa Dip Tse-Chok Ling (small monastery at sharp road foot with main prayer hall adorned with Shakyamuni image and beautiful intricate mandalas), and Library of Tibetan Works & Archives (rich collection of 40% original Tibetan manuscripts plus photographic archive). Known as 'Little Lhasa' offering teachings and spiritual retreats.",
          significance:
            "Dalai Lama's Residence & 'Little Lhasa' Tibetan Culture Center",
          location: "Himachal Pradesh, established mid-19th century",
          accessibility: {
            road: "Regular bus services from Manali, Delhi, Shimla to Dharamsala",
            rail: "Nearest railway station at Pathankot (85 km away)",
            air: "Nearest airport at Gaggla (13 km away)",
          },
          bestTime:
            "March to June and September to November for optimal weather",
          specialNote:
            "Home to Dalai Lama since 1960; features main Buddhist temple and extensive Tibetan manuscript library",
        },
        {
          name: "Rewalsar Tour",
          description:
            "Located in Mandi district 20 km from Mandi town, boasts refreshing beauty with emerald green lake and thick surrounding woods. Sacred for three religious communities: Hindu, Sikh, and Buddhist. For Buddhists, significant due to association with Guru Padmasambhava, 8th-9th century yogi from Uddiyan (Swat, Pakistan) skilled in tantric powers. Legend states he trained local raja's daughter in meditation; when raja threw him into flames, Padmasambhava appeared as lotus flower surrounded by water, impressing raja who allowed daughter to become disciple. Later flew to Tibet on tiger, overpowered local deities converting them to Buddhism protectors, established Tibet's first monastery at Samye. Departure point for Tibet dharma spreading earned Rewalsar pilgrim destination status. Cave footprints around lake believed left by Padmasambhava. Houses several Nyingmpa sect monasteries: Drikung Kagyud Gompa, Tso-Pema Ogyen Heru-kai Nyingmapa Gompa (with museum and colorful murals), Zigar Gompa featuring red, yellow, white colors with gold-fringed pagodas, Indo-Chinese style murals, huge stucco Guru Padmasambhava image. Floating reed islands believed inhabited by Padmasambhava's spirit, set in motion by prayer and breeze.",
          significance:
            "Guru Padmasambhava Sacred Site & Multi-Religious Pilgrimage Center",
          location: "Mandi District, Himachal Pradesh, 20 km from Mandi town",
          accessibility: {
            road: "Well connected from Mandi with regular buses; Mandi connected to other state parts",
            rail: "Closest broad gauge at Pathankot (234 km); nearest narrow gauge at Jogindernagar (80 km)",
            air: "Nearest airport at Bhuntar (89 km) with taxi/bus transfers available",
          },
          bestTime:
            "March to June and September to November for pleasant weather",
          specialNote:
            "Extremely tranquil village under 100 houses; floating islands move by prayer and breeze; sacred to Hindu, Sikh, and Buddhist communities",
        },
      ],
    },
  ];
  const regionTours = [
    {
      title: "Buddhism in Uttar Pradesh",
      description:
        "Visit the birthplace and enlightenment sites of Buddha in the spiritual heartland where Buddhism began its journey",
      image: "/images/up.jpg",
      destinations: [
        {
          name: "Kapilvastu Tour",
          description:
            "The capital city of the Sakya clan and one of the earliest republics, where the holy soul of prince Siddharth (Gautam Buddha) spent his childhood. Here he witnessed sorrow, pain, disease and death, then saw a radiant happy Sadhu who had conquered all these, deciding to renounce worldly riches and pleasures to seek truth and embark on salvation's path. Archaeological Survey of India excavations (1971-1977) in the Eastern Stupa found a Kushan period inscription reading 'Om devaputra vihare Kapilavastu bhikku sanghasa' (This is the Devaputra Vihara of the Kapilavastu bhikshu sangha). Features two excavated mounds 1.5 km from site - larger thick-walled structure believed to be Suddhodana's palace according to local belief, plus small Sri Lankan monastery and temple Mahinda Mahavihara near ruins.",
          significance: "Buddha's Childhood Home & Sakya Capital",
          location: "Uttar Pradesh, 20 km from Sidharthnagar Railway station",
          accessibility: {
            road: "Linked by good all-weather roads to Gorakhpur (97 km), Kushinagar (148 km), Varanasi (312 km), Lumbini (86 km), Sravasti (147 km), Lucknow (308 km)",
            rail: "Sidharthnagar Railway station (20 km away)",
            air: "Varanasi airport (312 km away)",
          },
          bestTime: "October to March for optimal weather",
          specialNote:
            "Site of Buddha's renunciation decision; features Kushan period archaeological evidence",
        },
        {
          name: "Kaushambi Tour",
          description:
            "Located 54 km from Allahabad, Kaushambi was visited by Buddha in 6th and 9th years after enlightenment. He delivered several sermons here, elevating it to a Buddhist learning center. Today visitors can see ruins of Ashokan Pillar, old fort, and Ghositaram Monastery. Archaeological excavations yielded large numbers of sculptures, figurines, coins (punch-marked and cast), and terracotta sculptures showing reverence the city commanded from devout in bygone times. These religious finds of historical and archaeological importance can be viewed at Allahabad Museum. One of four holy sites for Buddhists, representing place where Buddha's teachings flourished and monastic community developed.",
          significance: "Buddhist Learning Center & Ashokan Heritage Site",
          location: "54 km from Allahabad, Uttar Pradesh",
          accessibility: {
            road: "Allahabad well connected by road with major Indian cities",
            rail: "Allahabad well connected by all metros and major cities",
            air: "Nearest domestic airport at Varanasi",
          },
          bestTime: "October to March for comfortable travel",
          specialNote:
            "Archaeological treasures displayed at Allahabad Museum; Buddha visited twice after enlightenment",
        },
        {
          name: "Mathura Tour",
          description:
            "City covering 3,800 sq km at nucleus of Brajbhoomi, 145 km southeast of Delhi, 58 km northwest of Agra. Famous as Krishna's birthplace, also had fortune of hosting Lord Buddha once during His lifetime. Even after Buddha's mahaparinirvana, Mathura prospered as major Buddhist center till 9th century CE. Mahakachhayana, distinguished scholar and Buddha's disciple, sermonized Buddhism principles to Mathura people. With Upagupta's (Emperor Ashoka's religious teacher) monastic complex construction, religion started budding. During this time, Mathura school of art flourished, becoming famous for Buddha sculptures. References exist of twenty Buddhist monasteries, three stupas, five Deva temples in Mathura. However, by 11th century, Buddhism started declining. Major attractions include Radharamana Temple, Jugal Kisore Temple, Kesi Ghata, Rangji Temple, Dwarkadish Temple, and famous Holi celebrations at Varsana, Nandagram, Phalen.",
          significance: "Major Buddhist Art Center & Krishna's Birthplace",
          location:
            "Uttar Pradesh, 145 km southeast of Delhi, 58 km northwest of Agra",
          accessibility: {
            road: "Well connected to Delhi, Agra, and major cities",
            rail: "Mathura Junction railway station with connections to major cities",
            air: "Nearest airports at Delhi (145 km) and Agra (58 km)",
          },
          bestTime: "October to March; March for Holi celebrations",
          specialNote:
            "Famous Mathura school of Buddhist art; unique Holi celebrations spanning several days across different locations",
        },
        {
          name: "Prabhosa Tour",
          description:
            "Prabhosa or Prabhagiri hill located close to Kaushambi, one of holy Buddhist spots. In earlier times known as Mankula hill. Lord Buddha spent His sixth Rains retreat here. Notably, no discourses were delivered here by Buddha - Prabhosa is extremely tranquil and lonely place perfect for meditation retreat. When Hieun Tsang visited during his travels, he found stupa constructed by Emperor Ashoka. Today, stupa no longer exists, but numerous caves and rock shelters remain, mostly on north side of hill which is steeper and rockier. Prominent among caves is 'Sita's Window' - largest cave believed to be where Buddha resided during stay. From hilltop, visitors enjoy mindblowing views of Prabhosa town and Yamuna river. Nearby attractions include Kaushambi (Buddhist holy site with enlightenment-era visits) and Allahabad (50 km away at Ganga-Yamuna-Saraswati confluence, venue of famous Kumbh Mela).",
          significance: "Buddha's Sixth Rains Retreat & Meditation Sanctuary",
          location: "Hill near Kaushambi, Uttar Pradesh",
          accessibility: {
            road: "Via Kaushambi and Allahabad, well connected by road networks",
            rail: "Allahabad railway connections to major cities",
            air: "Nearest airport at Varanasi",
          },
          bestTime: "October to March for climbing and sightseeing",
          specialNote:
            "Silent retreat location - no Buddha discourses recorded; features meditation caves and panoramic Yamuna views",
        },
        {
          name: "Sravasti Tour",
          description:
            "Located in Gangetic plains, Gonda district, 40 km from Behraich on northeastern railway. Founded by mythological king Sravast, today known as Saheth-Maheth. Contains ruins and relics of Jain and Buddhist temples, forts, stupas. During Sakyamuni's time, rich pious merchant Sudatta lived in Sravasti. After hearing Buddha's sermon in Rajgir, became disciple and invited Buddha to Sravasti. Built Jetavana Vihara in beautiful park belonging to Prince Jeta (son of King Prasenjit). Sudatta covered entire park with gold coins to purchase it; Jeta donated valuable wood for vihara construction. Buddha spent 25 years living in Jetavana monastery. Many Vinaya rules, Jatakas, Sutras first discussed here. Buddha performed miracles astonishing rival teachers, transformed dacoit Angulimal into Buddhist monk, delivered many important sermons. King Ashoka erected two 21-meter high pillars on either side of eastern gateway. Flourishing learning center during Gupta period. When Chinese traveler Hiuen Tsang visited, found several damaged stupas, monastery ruins, and palace remains.",
          significance: "Buddha's 25-Year Residence & Miracle Performance Site",
          location: "Gonda district, Uttar Pradesh, 40 km from Behraich",
          accessibility: {
            road: "Most convenient via Lucknow, well-maintained roads",
            rail: "Balrampur railway station (19 km away)",
            air: "Nearest airport at Lucknow (151 km)",
          },
          bestTime: "October to March for optimal weather",
          specialNote:
            "Buddha's longest residence; site of Angulimal's transformation and numerous miracles",
        },
        {
          name: "Varanasi Tour",
          description:
            "One of world's oldest living cities with many names including Kashi (used 3000 years ago), Banaras/Benares (anglicized forms), 'City of Light,' Kashika ('the shining one' referring to Shiva's light), Avimukta ('Never Forsaken' - city Shiva never deserted), Anandavana ('forest of bliss'), Rudravasa (Shiva's place). Derives from two flanking rivers: Varana (north) and Asi (south). Famous for great river banks (ghats) - hundred stone steps lined with 18th-19th century pavilions, palaces, temples, terraces along waterfront. Each ghat marked by lingam with special place in city's religious geography. Major areas include Vishwanatha Khanda (Old City) buzzing with pilgrims, pandas, stalls. Nearby Sarnath: where Buddha came after Bodh Gaya enlightenment, delivered first sermon in Deer Park, 'set in motion Wheel of Law' (Maha-Dharmachakra Pravartan). Buddha included Sarnath with Lumbini, Bodh Gaya, Kushinagar as four sacred places for followers.",
          significance:
            "Ancient Sacred City & Gateway to Sarnath Buddha's First Sermon Site",
          location: "Uttar Pradesh, banks of Ganges River",
          accessibility: {
            road: "On NH 2 (Calcutta-Delhi), NH 7 (Kanya Kumari), NH 29 (Gorakhpur); distances include Agra (565 km), Allahabad (128 km), Bodhgaya (240 km), Sarnath (10 km)",
            rail: "Varanasi and Mughal Sarai major junctions with connections to all major cities; important trains include Rajdhani, Toofan, North East Superfast, Magadh Express",
            air: "Babatpur airport (22 km from Varanasi, 30 km from Sarnath) with direct flights from Delhi, Agra, Khajuraho, Calcutta, Mumbai, Lucknow, Bhuvaneshwar",
          },
          bestTime: "October to March for pleasant weather; avoid monsoons",
          specialNote:
            "Gateway to Sarnath (Buddha's first sermon site); ancient spiritual center with continuous 3000-year history",
        },
        {
          name: "Allahabad Tour",
          description:
            "Among largest Uttar Pradesh cities, stands at confluence of India's holiest rivers Ganga and Yamuna. Hindu mythology states Lord Brahma chose this land for Prakrishta Yaina where three rivers would flow into quiet confluence, calling it 'Tirth Raj' (king of all pilgrimage centers). Recorded evidence in Vedas, Ramayana, Mahabharata, Puranas mentions holy place formerly called Prayag. Sangam (confluence) hosts sacred fairs, rituals, attracts thousands of pilgrims year-round, millions during world-famous Kumbh Mela. Third mythical Saraswati river believed flowing underground toward Sangam gives confluence name 'Triveni.' Important British Raj cantonment with beautiful colonial architecture remnants. Early 20th century Allahabad University was country's foremost learning center. Today important city where history, culture, religion create confluence like sacred rivers caressing this God-graced land.",
          significance: "Sacred Rivers Confluence & Kumbh Mela Venue",
          location: "Uttar Pradesh, at Ganga-Yamuna-Saraswati confluence",
          accessibility: {
            road: "On National Highways 2 and 27, connected to all parts by good roads; distances include Agra (433 km), Delhi (643 km), Varanasi (125 km), Lucknow (204 km)",
            rail: "Well connected with major cities; important trains include Kalka Mail, Air Conditioned Express, New Delhi-Puri Express, Howrah Express, North East Express",
            air: "No direct air link; nearest airports at Varanasi (147 km) and Lucknow (210 km)",
          },
          bestTime: "October to March; special during Kumbh Mela periods",
          specialNote:
            "Venue of world-famous Kumbh Mela; 'Tirth Raj' - king of all pilgrimage centers according to Hindu scriptures",
        },
      ],
      duration: "5-7 Days",
      price: "₹25,000",
    },
    {
      title: "Buddhism in Bihar",
      description:
        "Explore the land of Buddha's enlightenment and first teachings, where the most sacred Buddhist sites are preserved",
      image: "/images/bihar.jpg",
      destinations: [
        {
          name: "Bodh Gaya Tour",
          description:
            "Reckoned as the most important Buddhist pilgrimage center in Bihar, where Lord Sakyamuni (Gautam Buddha) entered meditation after being moved by mankind's sufferings. The giant Bodhi Tree (Peepal) today is believed grown from original Bodhi Tree under which Prince Siddharth meditated on raised platform and attained Nirvana. Monasteries raised by Burmese, Tibetan, Chinese, Japanese, Thai devotees in native architectural styles worth visiting. Chaukramana (Jewel Walk) where Buddha strolled in deep thought. Magnificent Maha Bodhi temple showcases architectural amalgamation of many cultures, bearing Gupta Dynasty stamp and subsequent ages. Temple walls feature Buddha carved in different aspects, sanctum sanctorum houses colossal Buddha touching ground with mythological significance. Features inscriptions recording visits from Sri Lanka, China, Myanmar pilgrims. Chinese traveler Hieun Tsang visited in 7th Century. Bodhgaya Archaeological Museum houses Buddhist sculpture collection from 1st Century BC to 11th Century AD - treasure house of artistic expression. Major attractions include Bodhi Tree (fifth generation plant with Vajrasan platform), Buddhapada (Buddha's footprints on stone), Lotus Tank, Shaivite Monastery, Tibetan/Japanese/Burmese monasteries.",
          significance:
            "Buddha's Enlightenment Site & Most Sacred Buddhist Center",
          location: "Bihar, 243 km from Varanasi, 178 km from Patna",
          accessibility: {
            road: "Well connected to Patna, Ranchi, and major cities; 12 km from Gaya",
            rail: "Gaya railway station with services from many parts of India",
            air: "Gaya international airport (12 km) with direct flights to Colombo and Bangkok",
          },
          bestTime: "October to April for cool and pleasant weather",
          specialNote:
            "Buddha Jayanti in May is most auspicious day; hosts peace prayer meetings in October; features original Bodhi Tree lineage",
        },
        {
          name: "Rajgir Tour",
          description:
            "Meaning 'the royal palace,' place of great sanctity for Buddhists and Jains where Lord Buddha delivered many sermons during 12-year stay at Rajgriha. Located 100 km southeast of Patna, famous as health and winter resort with warm water ponds. Major Buddhist attractions include Griddhakuta (Venture's Peak) where Buddha set in motion second wheel of law, preached sermons three months in rainy season, features massive modern Shanti Stupa built by Japanese Buddhist Sangha. Venuvana Vihar historical monastery built by King Bimbisara for Buddha's residence. Sattapani Caves where first Buddhist council convened in 483 BCE after Buddha's death. Jivika Mango Garden (royal dispensary site where Buddha received wound dressing from royal physician during Bimbisara's reign). Karnada Tank where Buddha bathed. Buddha's Mahaparinirvana sculpture showing Buddha lying on right side with forearm under head commemorating final salvation. Other attractions include medicinal hot springs, Bimbisara jail, Pippala cave, 26 Jain temples dating to 5th century BCE, Ajatashatru's fort, Swarna Bhandar (King Bimbisara's treasury).",
          significance: "Buddha's 12-Year Residence & Second Wheel of Law Site",
          location: "Southern Bihar, 74 km from Bodhgaya, 100 km from Patna",
          accessibility: {
            road: "Excellent roads to Patna (100 km), Bodh Gaya (46 km); bus, coach, taxi available",
            rail: "Nearest railhead at Bakhtiyarpur on Delhi-Howrah line (54 km); loop line connects to Nalanda (15 km)",
            air: "Patna airport (100 km) with international and domestic flights",
          },
          bestTime: "Winter for cold and pleasant weather; avoid summer heat",
          specialNote:
            "Buddha Jayanti celebrated in May; famous for Khaja sweet; features Buddha's wound treatment site and first Buddhist council location",
        },
        {
          name: "Nalanda Tour",
          description:
            "Great seat of learning in ancient India, strewn with enchanting red sandstone ruins. Established by Gupta kings, Nalanda was important university attracting Buddhist students worldwide. Scholars like Huen Tsang and Fahien were products of Nalanda University. Ancient records indicate frequent visits by Lord Mahavira and Lord Buddha during 5th-6th centuries. Nalanda University ruins carpet 14 acres in present tiny village recounting lost glory, representing Kushana architectural traditions. Famous ancient learning center recorded as world's earliest university established 5th century BCE. Buddha visited and gave sermons near 'Mango grove of Pavarika.' Buddhist monks undertook learning, practice, meditation, Dhamma understanding to enrich masses. Buddhism sects Theravada, Vajrayana, Mahayana born from University teachings. Buddhism's decline in India associated with Nalanda University destruction by Islamic invasion 12th century CE. Site divided into 11 monasteries and several red brick temples. Nava Nalanda Mahavira (modern Theravadin Buddhist studies center established 1951) continues satellite imaging program. Nalanda Museum (established 1971) displays ancient manuscripts, Buddhist statues, unique artifacts.",
          significance:
            "World's Earliest University & Ancient Buddhist Learning Center",
          location: "Bihar, 72 km from Patna, 15 km from Rajgir",
          accessibility: {
            road: "Well-maintained highways connect to Patna, Bodh Gaya, major tourist places",
            rail: "Nearest station at Bakhtiyarpur (38 km); loop lines connect both places",
            air: "Patna airport (93 km)",
          },
          bestTime: "October to March for pleasant weather",
          specialNote:
            "Buddhism's decline linked to university destruction; birthplace of major Buddhist sects; features continuing archaeological research",
        },
        {
          name: "Vikramshila Tour",
          description:
            "Though Buddha never visited Vikramshila, this Bhagalpur district site is extremely important as one of India's most significant learning centers alongside Nalanda University. Established 8th century when Nalanda was losing significance by King Dharampala of Bengal. Monastery gradually gained importance becoming Tantric Buddhism center. By 11th century under King Rampala, thriving learning center housed 160 teachers and 1000 students. Outer temple wall had six gates, main temple guarded by Nagarjuna and Atisa statues. Atisa was eminent university abbot. Monasteries guarded by scholars Santipa, Jetari, Ratnavajra, Jnanasrimitra, Naropa. Fortified Vikramshila suffered destruction by Muslim invaders versus Sena dynasty war in 12th century. Today ruins visible at Antichak village and Bateshwar Sthan (Pather Ghatta). Site covers 4 sq km with Tibetan dormitory ruins on 60-foot wide platform, meditation house ruins, 60-foot stupa on 300-foot platform needing excavation. Nearby attractions include Bhagalpur (44 km west, silk production center), Sultanganj (cave sculptures, Ashoka-Gupta period temple), Champanagar (Buddha's sermon site with Kandaraka Sutta, Sonadanda Sutta).",
          significance:
            "Major Tantric Buddhism Learning Center & Nalanda Contemporary",
          location: "Bhagalpur district, Bihar, Antichak village area",
          accessibility: {
            road: "Vehicles available on hire in Bhagalpur to reach Vikramshila",
            rail: "Bhagalpur closest railway station",
            air: "Patna airport with flights to Mumbai, Delhi, Kolkata, Ranchi, Lucknow",
          },
          bestTime: "October to March for excavation site visits",
          specialNote:
            "Contemporary to Nalanda's decline; specialized in Tantric Buddhism; ongoing archaeological excavations revealing university structure",
        },
        {
          name: "Vaishali Tour",
          description:
            "Small village surrounded by banana, mango groves, rice fields with impressive historical past revealed by excavations. Epic Ramayana tells of heroic King Vishal's rule. Historians maintain world's first democratic republic with elected assembly flourished here 6th century BC during Vajjis and Lichchavis. While Pataliputra held political sway, Vaishali was trade and industry center. Lord Buddha visited frequently; at nearby Kolhua preached last sermon. Emperor Ashoka erected famous lion pillar commemorating event in 3rd century BC. Hundred years after Buddha's Mahaparinirvana, Vaishali hosted second great Buddhist council with two commemorative stupas. Jainism origins also in Vaishali - Lord Mahavir born 527 BC on city outskirts, lived till age 22. Double-storied Buddhist monastery outskirts where Buddha discoursed, extended spiritual enfranchisement to women admitting them to Holy Order founded here. Legend: visiting monkeys dug tank for comfortable stay, offered honey bowl - great Buddha legend incident where he announced approaching Nirvana, preached last sermon. Major attractions include life-size pillar beside brick stupa at Kolhua, adjacent monkey tank, monastery skeletal remains, Vishwa Shanti Stupa (world's highest), Buddha stupas I & II (4th century BCE with ash caskets), Ashokan Pillar, Coronation Tank, Bawan Pokhar Temple, Chaumukhi Mahadeva.",
          significance:
            "Buddha's Last Sermon Site & World's First Democratic Republic",
          location: "Bihar, 55 km from Patna",
          accessibility: {
            road: "Regular buses from Patna, major Bihar/Jharkhand towns; private taxi available (55 km from Patna)",
            rail: "Hajipur nearest railhead (35 km) with taxi, bus, auto rickshaw connections",
            air: "Patna Loknayak Jai Prakash International Airport (55 km) with international and national flights",
          },
          bestTime: "October to March for comfortable weather",
          specialNote:
            "Site of Buddha's final sermon and Nirvana announcement; women's admission to Buddhist order; world's first democracy; second Buddhist council venue",
        },
      ],
      duration: "4-6 Days",
      price: "₹22,000",
    },
    {
      title: "Buddhism in Maharashtra",
      description:
        "Discover ancient rock-cut Buddhist caves and monasteries showcasing the pinnacle of Buddhist art and architecture",
      image: "/images/maharashtra.jpg",
      destinations: [
        {
          name: "Ajanta Caves Tour",
          description:
            "The Ajanta caves, which lies 108 kilometers from the city of Aurangabad in Maharashtra, are the finest examples of the earliest form of Buddhism in India along with the superb Buddhist architecture, panoramic cave paintings and creative sculptures. The Ajanta caves, mainly venerated to the Lord Buddha and His several reincarnations, belongs to the period from 200 BCE to 250 CE. The caves, 30 in number, which were first discovered accidentally in 1819 by a British army officer, John Smith, comprises numerous Buddhist monasteries, shrines and temples. The Ajanta Caves can be categorised into mainly two categories: Phase I (2nd century BCE to 1st century BCE) includes Caves 9 and 10 - Chaitya halls, Caves 12 and 13 - Viharas where Buddha has been represented through symbols as per early Theravadin doctrines. Phase II (5th century CE to 6th century CE) includes Cave 19, 26 and 29 - Chaitya halls, Caves 1-7, 11, 14-18, 20-25, 27-28 - Viharas where Buddha has been depicted in physical forms as per Mahayana thoughts.",
          significance:
            "Finest Examples of Earliest Buddhism & UNESCO World Heritage Site",
          location: "108 km from Aurangabad, Maharashtra",
          accessibility: {
            road: "Proper and well maintained road connects Aurangabad to Ajanta. State transport and other buses available from Aurangabad (108 km), Mumbai (400 km) and Jalgaon (58 km)",
            rail: "Nearest rail head at Jalgaon (58 km away) on Central railways line, connected to Mumbai and Manmad",
            air: "Nearest airport at Aurangabad (108 km away)",
          },
          bestTime: "October to March for pleasant weather; avoid monsoons",
          specialNote:
            "Discovered accidentally in 1819 by British army officer John Smith; comprises 30 caves with magnificent wall paintings including Jataka stories, geometric patterns, and miniature seated Buddhas",
        },
        {
          name: "Ellora Caves Tour",
          description:
            "Ellora Caves are situated approximately 25 km from Aurangabad district, Maharashtra. The beautiful caves of Ellora symbolize three of the major religions of the world, namely Buddhism, Hinduism and Jainism. UNESCO World Heritage Site comprising 34 monasteries and temples built between 5th century AD and 11th century AD in linear pattern. Twelve caves (1-12) belong to Mahayana Buddhism built between 550-750 AD, seventeen caves (13-29) comprise Hindu temples built between 600-875 AD, and five caves (30-34) belong to Jains built between 800-1000 AD. Cave 16 houses the famous Kailash Temple, deemed to be the largest monolith structure in the entire world. Cave 10 (Vishwakarma) is splendid example of Chaitya architecture, Cave 11 (Do Tal) is three-story structure from 8th century AD, and Cave 12 (Teen Tal) is wonderful three-story cave.",
          significance:
            "UNESCO World Heritage Site & Largest Monolith Structure",
          location: "25 km from Aurangabad, Maharashtra",
          accessibility: {
            road: "Well linked to Aurangabad by road with buses and taxis easily available",
            rail: "Aurangabad railway station or Jalgaon railway station",
            air: "Nearest airport at Aurangabad (30 km away)",
          },
          bestTime: "October to March for comfortable exploration",
          specialNote:
            "Represents three major world religions - Buddhism, Hinduism, Jainism; archaeologists recently unearthed 22 more caves devoted to Lord Shiva",
        },
        {
          name: "Junnar Caves Tour",
          description:
            "Junnar caves are situated in Aurangabad district of Maharashtra, approximately 177 km from Mumbai on Mumbai-Aurangabad route. Founded between 2nd Century BC and 3rd Century AD, there are three major groups of caves in hills surrounding Junnar plains. Most prominent are Tulija Lena and Ganesh Lena. First group Tulija Lena consists of Chaitya hall adorned with circular dome ceiling. Second group near Manmodi hills is archaeologically significant with frequent archaeological visits. Third group Ganesh Lena is 4 km south of Junnar, consisting of small cells and viharas with popular Chaitya Cave No. 6 and Ganesh Lena Vihara.",
          significance: "Archaeologically Significant Ancient Buddhist Complex",
          location: "177 km from Mumbai, Aurangabad district, Maharashtra",
          accessibility: {
            road: "On Mumbai-Aurangabad route, regularly serviced by coaches, buses and private taxis",
            rail: "Nearest railway station at Mumbai (177 km), well connected with key cities",
            air: "Nearest airport at Mumbai (177 km away)",
          },
          bestTime: "October to March for archaeological exploration",
          specialNote:
            "Three distinct cave groups with Tulija Lena's circular dome ceiling Chaitya hall being most prominent architectural feature",
        },
        {
          name: "Kanheri Caves Tour",
          description:
            "Kanheri Caves are situated in heart of Sanjay Gandhi National Park, Maharashtra, approximately 10 km from Borivali, Mumbai. Almost 109 caves in number dating back between 1st century BC and 9th century AD. Signify golden beginning and end of Buddhism in northern India. Buddhist Monks and traders traveling for religious favors used these caves frequently. At top of caves stand exquisite sculptures of goddess Tara and Goddess Bhrukti. Central structure is Avalokiteswara with five symbols each in right and left. Major attraction is Chaitya Cave dating 4th-5th century AD with magnificent decorative woodwork embellishing roof. Outer wall sides adorned with sculptured statues of Buddha, mainly Avalokiteswara incarnation.",
          significance: "Golden Beginning & End of Buddhism in Northern India",
          location:
            "10 km from Borivali, Mumbai, in Sanjay Gandhi National Park",
          accessibility: {
            road: "Easy bus services available from Mumbai",
            rail: "Borivali railway station is nearest; also Chatrapati Shivaji Terminus connected with major Indian cities",
            air: "Mumbai airport is nearest",
          },
          bestTime:
            "October to March for national park visit and cave exploration",
          specialNote:
            "109 caves with exquisite goddess Tara and Bhrukti sculptures; central Avalokiteswara structure with symbolic representations",
        },
        {
          name: "Karla Caves Tour",
          description:
            "Karla Caves are situated near Pune-Mumbai Road, approximately 20 km from Lonavla and 40 km from Pune. Dating back to 2nd century BC, known for Chaitya Hall, intricate sculptures and pillars with ingenious architecture. Chaitya hall boasts amazing structural design with teakwood rooftop and beautifully carved pillars. One pillar with four lions at top now forms national emblem of India. Rock-cut sculptures based on animals and different human life forms adorn the caves. Other attractions include stone stupa and 37 pillars chiseled with figures of prosperous men and women on elephants prostrating before Lord Buddha. Bouncing sunshine falling inside shrine lends mystic and tranquil aura.",
          significance:
            "National Emblem Origin & Ingenious Chaitya Architecture",
          location: "20 km from Lonavla, 40 km from Pune, Maharashtra",
          accessibility: {
            road: "Buses plying between Pune and Mumbai go via Karla; private vehicles available",
            rail: "Local Malavil railway station (5 km away); Pune railway station connected with major cities",
            air: "Nearest airport at Pune (55 km away)",
          },
          bestTime: "October to March for comfortable cave exploration",
          specialNote:
            "Houses the four-lion pillar that became India's national emblem; 37 pillars with prosperous devotees prostrating before Buddha",
        },
        {
          name: "Bhaja Caves Tour",
          description:
            "Bhaja Caves come under Aurangabad district of Maharashtra, situated approximately 12 km from Lonavla. Believed to date back to 2nd century during Mauryan rule in early Theravadin phase of Buddhism. Eighteen caves in total, each adorned with magnificently chiseled images of Lord Buddha in different postures plus symbolic representations. Also embellishing caves are images of animals and situations from Buddhist tales. Twelfth cave (biggest one) comprises prayer hall boasting splendid ancient Buddhist architecture. Last cave features 'Dancing couple' structure, a must-see attraction. One of oldest caves in India, comprises Viharas used as hostels for Buddhist monks. Amazing stupas inside and outside caves complete the complex.",
          significance: "Early Theravadin Buddhism & Oldest Caves in India",
          location: "12 km from Lonavla, Aurangabad district, Maharashtra",
          accessibility: {
            road: "Easily reachable from Lonavla (12 km away)",
            rail: "Nearest railway station at Malavil (3 km from Bhaja village)",
            air: "Airports at Pune and Mumbai are nearest",
          },
          bestTime: "October to March for comfortable trekking and exploration",
          specialNote:
            "Features famous 'Dancing couple' structure; Viharas served as hostels for Buddhist monks; stupas both inside and outside caves",
        },
      ],
      duration: "3-5 Days",
      price: "₹18,000",
    },
    {
      title: "Buddhism in Sikkim",
      description:
        "Experience Himalayan Buddhism in pristine mountain settings where colorful prayer flags flutter against snow-capped peaks",
      image: "/images/sikkim.jpg",
      destinations: [
        {
          name: "Do Drul Chorten",
          description:
            "Do Drul Chorten is the most significant and perhaps the biggest stupa in Sikkim. Located near Gangtok, built in 1945 under direction of Late Truslshi Rimpoche, head of Nyingma sect of Tibetan Buddhism. Built in compliance with desire revealed by Dud-Zom Rinpoche in 1944. Embraces entire 'Mandala' sets of 'Dorjee Phurba' (Bajra Kilaya), one set of 'Ka-gyur', full 'zung' (mantras), relics and other religious items. In close proximity are no less than 108 'Mani-Lhakor' (Prayer Wheels) - turning these wheels implies chanting the mantras engraved on them saying 'hail to the jewel in the lotus' to summon 'Bodhisattva'. Features gold plated spire and is encircled by Chorten Lhakhang and Guru Lhakhang boasting two colossal statues of Guru Rinpoche (Guru Padmasambhava).",
          significance:
            "Most Significant Stupa in Sikkim & Nyingma Buddhism Center",
          location: "East Sikkim District, near Gangtok",
          accessibility: {
            road: "Regular jeeps or taxis available from Gangtok",
            rail: "New Jalpaiguri railway station (117 km from Gangtok)",
            air: "Bagdogra airport (117 km from Gangtok) with flights from Kolkata",
          },
          bestTime: "March to May, October to December for pleasant weather",
          specialNote:
            "Built by Truslshi Rimpoche in 1945; features 108 prayer wheels and gold plated spire; young and old lamas study and work in the complex",
        },
        {
          name: "Sikkim Deer Park",
          description:
            "Recently gaining popularity amongst tourist attractions in Sikkim, this unusual park is renowned for housing many species of deer. Also known as Rustamji Park, named after Rustamji who was one amongst the 'Dewans' of the 'Chogyal' of Sikkim and author of 'Enchanted Frontiers'. Perched on brink of ridge beside New Secretariat, established in late 1950's with open enclosure for different kinds of deer brought from other parts of Sikkim and neighboring states. Houses huge statue of Lord Buddha preaching noble truths to followers, reminiscent of Buddha's first sermon at Deer Park of Sarnath. Built to commemorate Lord Buddha's reincarnation as musk deer. Butter lamp glows continuously in front of statue encircled by beautiful flowers. Amidst gentle ripples of Rongnek stream and elevated hills, perfect destination for spotting deer and long horned antelopes.",
          significance: "Buddha's Deer Park Commemoration & Wildlife Sanctuary",
          location: "Gangtok, East Sikkim District",
          accessibility: {
            road: "Regular buses, jeeps or taxis from Gangtok",
            rail: "New Jalpaiguri railway station (117 km)",
            air: "Bagdogra airport (117 km) near Siliguri",
          },
          bestTime:
            "Early morning for deer sightings; March to May, October to December",
          specialNote:
            "Named after Rustamji, author of 'Enchanted Frontiers'; commemorates Buddha's reincarnation as musk deer; best visited early morning during deer feeding time",
        },
        {
          name: "Khecheopalri Lake",
          description:
            "Khecheopalri Lake is also known as the wishing lake. This unusually tranquil lake surrounded by blooming forest is considered one of sacred lakes of Sikkim by both Buddhists and Hindus. No water sport or other activities besides prayers are allowed around the lake. Believed that birds do not permit even a single leaf to float on lake surface. Surrounding area is ideal place to find Lepcha Houses and their communities. Located 24 km from Pemayangtse in West Sikkim at Gyalshing, about 140 km from Gangtok. Foreigners need permit to enter Sikkim (available at Siliguri). Trekker's hut and pilgrim's hut provided by Tourism Department for accommodation.",
          significance: "Sacred Wishing Lake for Buddhists & Hindus",
          location: "24 km from Pemayangtse, West Sikkim, 140 km from Gangtok",
          accessibility: {
            road: "Motorable road from Pemayangtse to lake area; private taxis, jeeps and landrovers available on Gangtok-Siliguri Highway",
            rail: "Siliguri (114 km) and New Jalpaiguri (125 km) nearest railway stations",
            air: "Bagdogra airport (124 km) with flights to Kolkata, Delhi, Guwahati; helicopter service between Gangtok-Bagdogra",
          },
          bestTime: "March to late May, October to mid-December",
          specialNote:
            "Known as 'wishing lake'; birds prevent leaves from floating on surface; foreigners need permit; surrounded by Lepcha communities",
        },
        {
          name: "Yumthang Valley",
          description:
            "Perched at bewildering elevation of 11,800 ft, Yumthang Valley tenders awe-inspiring spectacle of alpine pastures, rhododendron forest and snow-cloaked peaks of Himalayas. Also known as 'Valley of Flowers' with remarkable variety of flowers and world renowned Shingba Rhododendron Sanctuary. Tributary of Teesta flows through valley making it mesmerizing. For many years debarred from visitors owing to proximity with Tibet border. Located 75 km from Mangan in North Sikkim District, accessible from Mangan by regular jeeps or hired taxis with Lachung (25 km away) as excellent stopover. During spring, flowers blossom at their best; during summers acts as pasture land for yaks. Offers eye-catching vista of peaks along with Pauhunri and Shundu Tsenpa. Famous for Hot Springs in nearby Yumesamdong region.",
          significance: "Valley of Flowers & Shingba Rhododendron Sanctuary",
          location:
            "75 km from Mangan, North Sikkim District, elevation 11,800 ft",
          accessibility: {
            road: "Regular jeeps or taxis from Mangan; Lachung serves as stopover 25 km before Yumthang",
            rail: "New Jalpaiguri railway station with connections to major cities",
            air: "Bagdogra airport with domestic flights",
          },
          bestTime:
            "Spring season for flower blossoms; avoid winter due to heavy snow",
          specialNote:
            "Foreigners require Inner Line Permit; famous for rhododendrons and hot springs; winter brings thick snow layer; yak pastures in summer",
        },
        {
          name: "Orchid Sanctuary",
          description:
            "Positioned beside Institute of Tibetology, renowned Orchid Sanctuary is popular for exceptional and extensive assortment of orchids varying from season to season. Spread on sprawling area, sanctuary hosts around 454 kinds of orchids, most native to Sikkim. Gangtok blessed with mild and moderate climate with temperature varying from 25°C in summer to 3°C in winter. Region gets monsoon showers during June to September. Well linked by air, rail and road with Bagdogra (124 km) nearest airhead and New Jalpaiguri (125 km) nearest rail station. Gangtok connected via National Highway 31A with Darjeeling, Siliguri and Kalimpong. Buses run by Sikkim Nationalized Transport ply regularly within Gangtok and between Siliguri-Gangtok.",
          significance: "Extensive Orchid Collection & Native Sikkim Flora",
          location: "Beside Institute of Tibetology, Gangtok",
          accessibility: {
            road: "Well connected via National Highway 31A; regular buses, private taxis and jeeps available",
            rail: "New Jalpaiguri railway station (125 km)",
            air: "Bagdogra airport (124 km)",
          },
          bestTime:
            "April and early May, September to December for optimal orchid viewing",
          specialNote:
            "454 varieties of orchids, most native to Sikkim; seasonal variations in orchid displays; located beside renowned Institute of Tibetology",
        },
      ],
      duration: "4-6 Days",
      price: "₹28,000",
    },
    {
      title: "Buddhism in Arunachal Pradesh",
      description:
        "Visit remote Buddhist monasteries in the eastern Himalayas where ancient traditions thrive in spectacular mountain settings",
      image: "/images/arunachal.jpg",
      destinations: [
        {
          name: "Tawang Tour",
          description:
            "Tawang is administrative district of Arunachal Pradesh with headquarters at Tawang town, situated on Northwest extremity of state. Surrounded by Tibet in North-East, Bhutan in South-West and West, Kameng district in South-East. District derives name from Tawang Monastery located on hilltop. Hidden paradise on earth perched on ridges and surrounded by thick forests with majestic monasteries, lakes and distinct hamlets. Major attractions include Monasteries: Tawang Monasteries, Urgelling, Gorsam, Taktsang (Tiger's Den), Oldbazar Gompa, Rigyalling Gompa. Nunneries: Singsur Ani Gompa, Brama Dung Chung Ani Gompa, Gyangong Ani Gompa. Lakes: P.T.TSO Lake (Pankang Teng Tso), Sangetser Lake Jo-Nga-Tseir, Banggachang Lake. Peaks: Sela, Gorichen, Geshila. Hot Springs: Thingbu, Tsachu. Other places: Jaswant Garh, Tawang War Memorial, Manjushree Vidyapeeth, Craft Center.",
          significance: "Largest Indian Monastery & Hidden Himalayan Paradise",
          location:
            "Northwest extremity of Arunachal Pradesh, district headquarters",
          accessibility: {
            road: "Reachable via Guwahati and Tezpur in Assam; permits required for entry",
            rail: "Bhalukpong railway station (285 km from Tawang)",
            air: "Tezpur airport (345 km from Tawang)",
          },
          bestTime:
            "April to October for clear mountain views and monastery visits",
          specialNote:
            "Surrounded by Tibet, Bhutan, and Kameng district; features multiple monasteries, nunneries, sacred lakes, and hot springs; requires Inner Line Permit",
        },
        {
          name: "Bomdila Tour",
          description:
            "Situated in Bomdila, headquarters of West Kameng district in Arunachal Pradesh, about 160 km from Guwahati. Features three Tibetan Monasteries reflecting origin and culture of local people. 12th reincarnate born in Morshing, Kalaktang Circle, West Kameng constructed modest Gonpa before death in 1966. Present 13th Tsona Gontse Rinpoche commenced construction of main prayer hall, consecrated by His Holiness 14th Dalai Lama on 13th October 1997. Main monastery includes small suite making up Dalai Lama's private residential quarters with rooftop offering superb views of town and surrounding mountains. Older Gompa houses large statue of blue Medicine Buddha for healer meditations. Third Gompa stands at end of main market street in town center. Features tourist lodge, craft centre displaying local crafts, and shopping centre for Himalayan Buddhist life experience.",
          significance:
            "Tibetan Monasteries & Dalai Lama's Residential Quarters",
          location:
            "100 km from Bhalukpong, West Kameng district, Arunachal Pradesh",
          accessibility: {
            road: "Connected by road with Arunachal Pradesh and Assam towns; local bus or shared jeep from Tezpur",
            rail: "Tezpur railway station in Assam (160 km)",
            air: "Tezpur airport in Assam (160 km)",
          },
          bestTime:
            "April to October for monastery visits and mountain excursions",
          specialNote:
            "Features Dalai Lama's private quarters; excursions to Dirang valley, Sela Pass (4,300m), Gorichen (6,488m) and Kangto (7,042m) peaks; Orchid Research stations at Tippi, Sessa, and Dirang",
        },
        {
          name: "Dirang Dzong",
          description:
            "Ancient fortress monastery showcasing traditional architecture and Buddhist art, surrounded by apple orchards and mountain landscapes.",
          significance: "Fortress Monastery",
        },
        {
          name: "Urgelling Monastery",
          description:
            "The birthplace of the 6th Dalai Lama, this sacred monastery holds special significance in Tibetan Buddhism and offers insights into Buddhist history.",
          significance: "6th Dalai Lama's Birthplace",
        },
      ],
      duration: "6-8 Days",
      price: "₹35,000",
    },
    {
      title: "Buddhism in Gujarat",
      description:
        "Explore Buddhist heritage sites in western India where ancient stupas and archaeological remains tell stories of flourishing Buddhist culture",
      image: "/images/gujarat.jpg",
      destinations: [
        {
          name: "Junagadh Tour",
          description:
            "Ashoka's Rock Edicts situated at foothills of Mount Girnar in Junagadh, Gujarat. Built by Mauryan Emperor Ashoka, edicts issued in 250 BC and re-discovered by James Todd. These edicts are boulder made up of large granite stones with inscriptions in ancient languages like Brahmi and Pali. Inscriptions delineate Ashoka's philosophy including resistance to greed and animal sacrifice, respect for all religions, moralising principles of purity in thought and developing attitude of kindness to everyone. Major rock edict visible from top of Girnar Hill on large black granite slab. These edicts show deep feeling of repentance felt by Ashoka because of destruction caused during wars, how he gave up war and violence and became staunch believer of Buddhism. First evidence of propagating Buddhism, these magnificent edicts carry valuable messages of leading simple, pure, self-controlled, satisfied and peaceful life.",
          significance:
            "First Evidence of Buddhism Propagation & Ashoka's Edicts",
          location: "Foothills of Mount Girnar, Junagadh, Gujarat",
          accessibility: {
            road: "Well connected by road to major Gujarat cities",
            rail: "Junagadh railway station with connections to major cities",
            air: "Nearest airport at Rajkot (102 km) or Ahmedabad (327 km)",
          },
          bestTime:
            "October to April; January-February for Bhavnath Fair celebrations",
          specialNote:
            "Takes two hours to climb hill for close view of major rock edict; start journey at dawn to escape scorching sun; site open 8:00am to 6:00pm daily",
        },
        {
          name: "Vadnagar Tour",
          description:
            "Archaeological site between River Banas and River Rupen, nearly 128 km from Ahmedabad. Features 12-cell structure that belonged to Buddhist vihara or monastery housing monks from 2nd to 4th century AD. Hiuen Tsang visited Vadnagar (then known as Anandapur) in 7th century, reported city had 10 sangharams (resting places for Buddhist monks) with 1,000 Buddhist monks. Archaeologists found around 2,000 artefacts including Buddha idol, amphora, figurines, crucible, grinding stone, seals, terracotta head wearing turban, shell bangles, necklace beads, copper and silver coins housed at Museum of Archaeology, Maharaja Sayajirao University, Vadodara. Perched atop nearby Taranga Hills is shrine dedicated to Devi Taranmata. Idols of Taranmata and Dharanmata are of Buddhist Goddess Tara, 'Mother of all Buddhas.' In Dharanmata Temple, over halo behind head of marble sculpture of Goddess Tara is lotus on which rests Amitabh Buddha.",
          significance: "Ancient Buddhist Vihara & Goddess Tara Shrine",
          location:
            "128 km from Ahmedabad, between River Banas and River Rupen",
          accessibility: {
            road: "Mehsana (47 km), Ahmedabad (111 km)",
            rail: "Siddhapur railway station on Ahmedabad-New Delhi line (42 km from Vadnagar)",
            air: "Nearest airport at Ahmedabad (111 km)",
          },
          bestTime: "October to March for archaeological exploration",
          specialNote:
            "Visited by Hiuen Tsang in 7th century; 2,000 artefacts discovered; features Buddhist Goddess Tara idols; non-metered auto rickshaws for local transport",
        },
        {
          name: "Devnimori Tour",
          description:
            "Better known for hotsprings, Devnimori located 132 km from Ahmedabad has large Buddhist establishment dating back to period between 2nd and 7th centuries AD. King Ashoka erected as many as 80,000 stupas across India, unearthing ashes of Buddha from original place and distributing them across country, building stupas accordingly. One such stupa from 4th century was excavated in early 1960s at Devnimori. Close to major trade routes of Mewar and Dungarpur, Devnimori was site of important Buddhist monastic centre 1,600 years ago. Mahastupa still there but relics including casket containing Buddha's ashes and 17 terracotta statues of Buddha are now housed in Department of Archaeology at Maharaja Sayajirao University, Vadodara.",
          significance: "Ashoka's Stupa & Buddha's Ashes Casket Site",
          location: "132 km from Ahmedabad, Gujarat",
          accessibility: {
            road: "Well connected to Ahmedabad and major Gujarat cities",
            rail: "Nearest railway station connections via Ahmedabad",
            air: "Nearest airport at Ahmedabad (132 km)",
          },
          bestTime: "October to March for archaeological site visits",
          specialNote:
            "Famous for hotsprings; one of 80,000 stupas erected by Ashoka; casket containing Buddha's ashes excavated in 1960s; major trade route location 1,600 years ago",
        },
        {
          name: "Talaja Caves Tour",
          description:
            "On Shatrunjaya River, just inland from small port town of Sartanpur, lies Talaja about 32 km from Palitana. Best known as birthplace of poet Narsinh Mehta, Talaja also houses important sites for Buddhism, Jainism and Hinduism. Place holds importance to Buddhists with around 30 ancient Buddhist caves cut into rocks, with fine carving of Bodhisattva. EbhalaMandapa, large hall with four octagonal pillars is most impressive structure. Notable Jain temple on hill alongside town. Same hill has 13 Buddhist caves carved into solid rock. Caves are around 2000 years old, requiring about 15-20 min walk up hill to reach them. They are of 4th stage of Buddhist cave architecture, noticeably earlier than famous Buddhist caves of Maharashtra.",
          significance:
            "4th Stage Buddhist Cave Architecture & Bodhisattva Carvings",
          location: "32 km from Palitana, on Shatrunjaya River, Gujarat",
          accessibility: {
            road: "32 km from Palitana; accessible via Bhavnagar and other Gujarat cities",
            rail: "Nearest railway station at Bhavnagar or Palitana",
            air: "Nearest airport at Bhavnagar",
          },
          bestTime: "October to March for cave exploration and climbing",
          specialNote:
            "Birthplace of poet Narsinh Mehta; 30 Buddhist caves with Bodhisattva carvings; 2000 years old, earlier than Maharashtra caves; 15-20 min hill walk required",
        },
        {
          name: "Khambhalida Caves Tour",
          description:
            "About 75 km from Rajkot, small village called Khambhalida situated at end of Gondal Taluka, nearer to Junagadh. Near village, surrounded by hills and small river, historical sculpture with archaeological importance. 1700-1800 years old invaluable historical Buddhist Caves situated near Khambhalida village giving holy and peaceful feelings. Delicate carving makes stone alive today. Discovered by Shri P.Pandya, great archaeologist of India and Superintendent of Archeology and Museum Department of Gujarat State in 1955, who discovered about 200 such places in Saurashtra. Buddhist Caves situated over small hills between dense forest and bank of small river. Different type of three caves with center cave wonderful due to sculpture. Two big sculptures on main sides of caves carved from one big stone with height about 8-10 feet. Believed caves made by saint of Dinyan branch of Buddha tradition. Near caves, 15 small caves situated. Legend states underground way from these caves to Junagadh where Ashoka inscription exists, believing Buddha Saints came from Junagadh to Khambhalida Caves for meditation.",
          significance:
            "Dinyan Branch Buddhist Caves & Underground Junagadh Connection",
          location: "75 km from Rajkot, end of Gondal Taluka, near Junagadh",
          accessibility: {
            road: "75 km from Rajkot, accessible via Gondal and Junagadh",
            rail: "Nearest railway stations at Rajkot or Junagadh",
            air: "Nearest airport at Rajkot",
          },
          bestTime: "October to March for cave exploration and forest trekking",
          specialNote:
            "1700-1800 years old caves discovered by P.Pandya in 1955; believed made by Dinyan branch of Buddha tradition; legend of underground connection to Junagadh; Gir Forest extended to village in ancient times",
        },
      ],
      duration: "3-4 Days",
      price: "₹16,000",
    },
    {
      title: "Buddhism in Orissa",
      description:
        "Discover ancient Buddhist sites in the land of Kalinga where Emperor Ashoka embraced Buddhism after the great war",
      image: "/images/orissa.jpg",
      destinations: [
        {
          name: "Dhauli Tour",
          description:
            "Dhauli Hill is of supreme historical importance as the site of the great Kalinga War (261 BCE) where Emperor Ashoka's heart transformed after witnessing the immense bloodshed. This battlefield became the birthplace of Ashoka's conversion to Buddhism. The hill features the famous Dhauli Rock Edicts, carved on a massive rock face, containing Ashoka's messages of peace and non-violence. The modern Shanti Stupa (Peace Pagoda), built by the Japan Buddha Sangha and Kalinga Nippon Buddha Sangha in 1972, stands majestically on the hilltop with beautiful sculptures depicting Buddha's life. The white dome-shaped stupa is visible from afar and houses relics from Japan.",
          significance: "Ashoka's Conversion Site - Where Buddhism Truly Began",
          location: "8 km from Bhubaneswar, Odisha",
          accessibility:
            "Road: Well-connected by NH-16, regular buses and taxis from Bhubaneswar. Rail: Bhubaneswar Railway Station (8 km). Air: Biju Patnaik International Airport, Bhubaneswar (15 km).",
          bestTime: "October to March (pleasant weather for exploration)",
          specialNote:
            "The site offers panoramic views of the Daya River where the Kalinga War was fought. Evening visits are particularly beautiful with the stupa illuminated against the sunset.",
        },
        {
          name: "Lalitagiri Tour",
          description:
            "Lalitagiri, meaning 'the hill of the beloved', is the oldest Buddhist site in Odisha dating back to the 1st century BCE. This was one of the earliest centers of Buddhism in Eastern India and forms part of the famous 'Diamond Triangle' of Odisha Buddhism along with Ratnagiri and Udayagiri. The site contains magnificent stupas, monasteries, and sculptures that showcase the evolution of Buddhist architecture over 1,000 years. The most significant discovery here was a relic casket believed to contain actual remains of Buddha, found inside the main stupa. The site houses beautiful stone sculptures, terracotta plaques, and inscriptions in Brahmi script. The Archaeological Survey of India has uncovered extensive monastic complexes with cells for meditation, assembly halls, and beautiful stone doorways with intricate carvings.",
          significance: "Oldest Buddhist Site in Odisha with Buddha's Relics",
          location: "90 km from Bhubaneswar via Cuttack, Jajpur district",
          accessibility:
            "Road: 2.5 hours drive from Bhubaneswar via NH-16 and SH-56. Regular buses available from Cuttack (55 km). Rail: Jajpur-Keonjhar Road Railway Station (15 km). Air: Biju Patnaik International Airport, Bhubaneswar (90 km).",
          bestTime:
            "October to March (ideal weather for archaeological exploration)",
          specialNote:
            "The site museum displays rare artifacts including the sacred relic casket. Best visited in combination with Ratnagiri and Udayagiri as part of the Buddhist Triangle tour.",
        },
        {
          name: "Ratnagiri Tour",
          description:
            "Ratnagiri, the 'Hill of Jewels', was the most important Buddhist university and monastery complex in ancient Kalinga, flourishing from the 5th to 12th centuries CE. This magnificent site rivals Nalanda in its grandeur and academic importance. The main attraction is the colossal stone sculpture of Buddha in the meditation posture, carved from black chlorite stone, which is considered one of the finest examples of Buddhist art in India. The site contains extensive monastery ruins with beautifully carved doorjambs, pillars, and sculptures depicting Buddhist Jataka tales. The two-storied monastery structure with 24 cells around a central courtyard shows the sophisticated planning of ancient Buddhist architecture. Numerous sculptures of Tara, Avalokiteshvara, and other Bodhisattvas reflect the Mahayana and Tantric Buddhism practices. The site has yielded over 700 sculptures and numerous copper plates with inscriptions.",
          significance: "Greatest Buddhist University of Eastern India",
          location: "100 km from Bhubaneswar, Jajpur district",
          accessibility:
            "Road: 3 hours drive from Bhubaneswar via NH-16 and SH-56. Regular buses from Cuttack (65 km). Rail: Jajpur-Keonjhar Road Railway Station (25 km). Air: Biju Patnaik International Airport, Bhubaneswar (100 km).",
          bestTime:
            "October to March (comfortable for extensive site exploration)",
          specialNote:
            "The on-site museum houses exceptional Buddhist sculptures including the famous Buddha head. Photography inside the museum requires special permission. Guided tours recommended for understanding the intricate carvings.",
        },
        {
          name: "Udaygiri Tour",
          description:
            "Udayagiri, the 'Sunrise Hill', completes the sacred Diamond Triangle and represents the zenith of Odisha's Buddhist architectural achievement. This sprawling complex, active from the 2nd century BCE to 12th century CE, showcases the complete evolution of Buddhist architecture and sculpture over 1,400 years. The site contains two distinct monasteries - Monastery 1 with its impressive stepped pyramid structure and Monastery 2 with beautiful carved pillars and sculptures. The main stupa, partially excavated, reveals a unique architectural style with radiating walls. Udayagiri is famous for its exquisite stone sculptures in the distinctive Odisha style, including beautiful depictions of Tara, Manjushri, and other Buddhist deities. The site has yielded numerous bronzes, terracotta plaques, and stone inscriptions that provide valuable insights into medieval Buddhist practices. The peaceful setting amidst rolling hills makes it an ideal place for meditation and contemplation.",
          significance: "Architectural Marvel of Buddhist Evolution",
          location: "110 km from Bhubaneswar, Jajpur district",
          accessibility:
            "Road: 3.5 hours drive from Bhubaneswar via NH-16 and SH-56. Regular buses from Cuttack (75 km). Rail: Jajpur-Keonjhar Road Railway Station (35 km). Air: Biju Patnaik International Airport, Bhubaneswar (110 km).",
          bestTime: "October to March (pleasant weather for hill exploration)",
          specialNote:
            "The site offers beautiful sunrise views (hence the name). Best explored with a guide to understand the complex architectural evolution. Combine with nearby Ratnagiri and Lalitagiri for a complete Buddhist Triangle experience.",
        },
      ],
      duration: "3-5 Days",
      price: "₹19,000",
    },
    {
      title: "Buddhism in Nepal",
      description:
        "Visit the birthplace of Buddha and sacred Nepalese sites where Buddhist traditions continue to flourish in their homeland",
      image: "/images/nepal.jpg",
      destinations: [
        {
          name: "Kathmandu Tour",
          description:
            "The Kathmandu Valley, the capital, is the political, commercial and cultural hub of Nepal. Spread across an area of 360 square kilometers and at an altitude of 1336 meter above the sea level, Kathmandu is an exotic and fascinating showcase of a very rich culture, art and tradition. The valley, roughly oval bowl measuring 24 km east-west and 19 km north-south, is encircled by a range of green terraced hills and dotted by compact clusters of red tiled-roofed houses. A remarkable legend speaks that the valley was once covered by a lake until the Bodhisattva Manjushri raised his sword of wisdom and sliced a passage through the mountain walls, draining the water and creating the first settlements. The centers include three primary cities: Kathmandu Hanuman Dhoka, Patan and Bhaktapur; the two most important Buddhist stupas: Swayambhunath and Boudhanath; and famous Hindu shrines. Key sites include Boudhanath Stupa (largest stupa in Nepal and holiest Tibetan Buddhist temple outside Tibet), Kasthamandap (three-storied pagoda built from single tree wood), Kumari Ghar (house of living goddess), Swayambhunath Stupa (Monkey Temple with all-seeing Buddha eyes), and Kathmandu Durbar Square (UNESCO World Heritage site with ancient temples and palaces).",
          significance: "Cultural and Religious Heart of Nepal",
          location: "Kathmandu Valley, 1336m above sea level",
          accessibility:
            "Road: Well-connected by highways from all major cities. Rail: No railway connection. Air: Tribhuvan International Airport serves international and domestic flights.",
          bestTime:
            "October to December and February to April (clear mountain views and pleasant weather)",
          specialNote:
            "The valley embraces most of Nepal's ethnic groups, but Newars are the indigenous inhabitants. During Losar (Tibetan New Year), Boudhanath hosts the largest celebration in Nepal. Photography restrictions apply inside certain temples.",
        },
        {
          name: "Lumbini Tour",
          description:
            "Lumbini (Sanskrit for 'the lovely') is the most sacred Buddhist pilgrimage site as the birthplace of Lord Buddha. Located in the Nepalese town of Kapilavastu, district Rupandehi, near the Indian border, it's one of four major Buddhist pilgrimage sites based on events in Buddha's life. The site is a large garden with a grove of pipal trees in the foothills of the Himalayas. The most important temple is the Maya Devi Temple, which enshrines the traditional site of Buddha's birth with the exact spot identified. The temple protects ancient ruins and houses delicate sandstone sculptures. Ashoka's Pillar marks the precise location where Buddha was born more than 2,600 years ago. The sacred pool (Puskarni) is where Maya Devi bathed before giving birth and where the newborn Buddha was washed by two dragons. The site includes Tilaurakot (citadel complex of Kapilvastu Kingdom founded by Buddha's father Suddhodana) and various beautiful shrines built by devotees from Buddhist countries. Archaeological excavations have revealed brick temples, sculptures, and a 'flawless stone' placed by Emperor Ashoka in 249 BC.",
          significance: "Buddha's Birthplace - Supreme Pilgrimage Destination",
          location:
            "Kapilavastu district, Rupandehi, west-central Nepal near Indian border",
          accessibility:
            "Road: Connected via Bhairahawa (22 km). Rail: Nearest railway station in India at Nautanwa (45 km). Air: Buddha Air and other airlines serve Lumbini airport from Kathmandu.",
          bestTime:
            "October to March (pleasant weather for spiritual contemplation)",
          specialNote:
            "UNESCO World Heritage Site. The area around Lumbini is entirely Hindu, but the holy site itself has Buddhist temples from various nations. Long lines of colorful prayer flags carry prayers heavenward. Site remained neglected for centuries until rediscovered by German archaeologist Feuhrer in 1895.",
        },
        {
          name: "Patan Tour",
          description:
            "Lalitpur sub-metropolitan city, popularly known as Patan, is one of the most vibrant cities of Nepal located 5 kilometers south-east of Kathmandu. With urban history dating back 2300 years, it's one of three major cities in Kathmandu valley. The literary meaning of Lalitpur is 'the city of fine arts,' and it's extremely rich in arts and architecture, boasting the largest community of artisans, especially metal and wood workers. According to tradition, Patan is the oldest city in the Kathmandu Valley, possibly associated with four main Stupas built by Emperor Ashoka. The city nurtures numerous sacred buildings, temples, pagodas, Stupas, Shikharas, monasteries, and Chaityas. UNESCO has enlisted Patan Durbar Square as a World Heritage Site. Key attractions include Patan Durbar Square complex with three main courtyards (Mul Chowk, Sundari Chowk, Keshav Narayan Chowk), Krishna Temple (first Shikara architecture), Mahaboudha (Temple of Thousand Buddhas with finest terra cotta work), Kumbheshwor (five-storied pagoda-style temple), and the four Ashokan Stupas at corners of Patan. The city has produced famous artists including Arniko, who spread Nepalese artistic legacy worldwide.",
          significance: "Artistic Capital and Oldest City of Kathmandu Valley",
          location:
            "5 km south-east of Kathmandu, part of Greater Kathmandu region",
          accessibility:
            "Road: Well-connected to Kathmandu by multiple routes, regular buses and taxis. Rail: Accessible via Kathmandu (no direct rail). Air: Via Tribhuvan International Airport, Kathmandu.",
          bestTime:
            "October to March (ideal for exploring architectural marvels)",
          specialNote:
            "For centuries, Lalitpur was a sovereign city-state until 1768 AD when King Prithivi Narayan Shah assimilated it into Kingdom of Nepal. The Mahaboudha Temple was rebuilt after 1934 earthquake. Kumbeshwar Temple's water is said to come from holy Gosainkund lake. Annual Janai Purnima festival draws thousands of pilgrims.",
        },
      ],
      duration: "5-7 Days",
      price: "₹30,000",
    },
  ];
  const popularTours = [
    {
      name: "Kushinagar Tour",
      description:
        "Visit the place where Buddha attained Parinirvana. Kushinagar is where the Buddha finally attained Mahaparinirvana. Among the ruins are the Mukutbandhan Stupa and a beautiful statue of the reclining Buddha. The monuments of Kushinagar are situated in three distinct groups comprising the main site of the Nirvana Temple, the central stupa and surrounding monasteries.",
      duration: "2 Days",
      price: "₹8,000",
      rating: 4.8,
      highlights: [
        "Nirvana Temple",
        "Reclining Buddha Statue",
        "Mukutbandhan Stupa",
        "Ancient Monasteries",
      ],
    },
    {
      name: "Ladakh Tour",
      description:
        "Explore Buddhist monasteries in the high Himalayas of Ladakh, known as 'Little Tibet'. Experience ancient monasteries, colorful festivals, and breathtaking landscapes while immersing yourself in pure Tibetan Buddhist culture and traditions.",
      duration: "7 Days",
      price: "₹45,000",
      rating: 4.9,
      highlights: [
        "Hemis Monastery",
        "Thiksey Monastery",
        "Diskit Monastery",
        "Nubra Valley",
      ],
    },
    {
      name: "Lumbini Tour",
      description:
        "Pilgrimage to Buddha's birthplace in Nepal. Lumbini is marked by the sacred Bodhi Tree, Maya Devi Temple, and Ashoka Pillar. This UNESCO World Heritage Site is the supreme pilgrimage destination for Buddhists worldwide.",
      duration: "3 Days",
      price: "₹15,000",
      rating: 4.7,
      highlights: [
        "Maya Devi Temple",
        "Sacred Garden",
        "Ashoka Pillar",
        "Bodhi Tree",
      ],
    },
    {
      name: "Nalanda Tour",
      description:
        "Visit the ancient Buddhist university ruins. Nalanda was once the largest center of learning in the ancient world with students from across Asia. The archaeological remains showcase the grandeur of this ancient seat of Buddhist learning and philosophy.",
      duration: "2 Days",
      price: "₹10,000",
      rating: 4.6,
      highlights: [
        "University Ruins",
        "Ancient Library",
        "Nalanda Museum",
        "Archaeological Site",
      ],
    },
    {
      name: "Tabo Tour",
      description:
        "Explore the 1000-year-old Tabo Monastery, called the 'Ajanta of the Himalayas'. This ancient monastery in Spiti Valley houses ancient murals, sculptures, and manuscripts, representing the golden age of Buddhist art.",
      duration: "3 Days",
      price: "₹18,000",
      rating: 4.8,
      highlights: [
        "Ancient Murals",
        "Buddhist Manuscripts",
        "Spiti Valley",
        "Himalayan Views",
      ],
    },
    {
      name: "Tawang Tour",
      description:
        "Visit the largest monastery in India. Tawang Monastery houses 450 monks and contains a magnificent library of ancient Buddhist manuscripts. Experience the rich Buddhist culture of Arunachal Pradesh in stunning mountain settings.",
      duration: "5 Days",
      price: "₹32,000",
      rating: 4.9,
      highlights: [
        "Largest Indian Monastery",
        "Ancient Manuscripts",
        "Buddhist Library",
        "Mountain Views",
      ],
    },
  ];
  // Destination Details Modal Component
  const DestinationModal = ({
    destination,
    onClose,
  }: {
    destination: Destination | null;
    onClose: () => void;
  }) => {
    if (!destination) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {destination.name}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-2">
                  Significance
                </h3>
                <p className="text-gray-700">{destination.significance}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-2">
                  Description
                </h3>
                <p className="text-gray-700">{destination.description}</p>
              </div>{" "}
              {destination.location && (
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-700 flex items-center">
                    <MapPin size={16} className="text-red-500 mr-2" />
                    {destination.location}
                  </p>
                </div>
              )}
              {destination.accessibility && (
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-2">
                    How to Get There
                  </h3>
                  <div className="space-y-2">
                    {destination.accessibility.road && (
                      <div>
                        <span className="font-medium text-gray-800">
                          By Road:
                        </span>
                        <p className="text-gray-700 text-sm">
                          {destination.accessibility.road}
                        </p>
                      </div>
                    )}
                    {destination.accessibility.rail && (
                      <div>
                        <span className="font-medium text-gray-800">
                          By Rail:
                        </span>
                        <p className="text-gray-700 text-sm">
                          {destination.accessibility.rail}
                        </p>
                      </div>
                    )}
                    {destination.accessibility.air && (
                      <div>
                        <span className="font-medium text-gray-800">
                          By Air:
                        </span>
                        <p className="text-gray-700 text-sm">
                          {destination.accessibility.air}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {destination.bestTime && (
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-2">
                    Best Time to Visit
                  </h3>
                  <p className="text-gray-700">{destination.bestTime}</p>
                </div>
              )}
              {destination.specialNote && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">
                    Special Note
                  </h3>
                  <p className="text-gray-700">{destination.specialNote}</p>
                </div>
              )}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={onClose}
                  className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Destination Modal */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Buddhist Tours</h1>
            <p className="text-xl mb-8">
              Embark on a spiritual journey through sacred Buddhist sites across
              India, Nepal, and beyond. Discover ancient temples, monasteries,
              and places where Buddha walked.
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Explore Tours
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      {/* Tour Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Buddhist Tour Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg text-center px-4">
                    {category.title}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    {category.destinations.map((dest, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-700 cursor-pointer hover:text-red-600 hover:bg-red-50 p-2 rounded transition-colors"
                        onClick={() => setSelectedDestination(dest)}
                      >
                        <MapPin
                          size={14}
                          className="text-red-500 mr-2 flex-shrink-0"
                        />
                        <span className="hover:underline">{dest.name}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                    View Tours
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      {/* Regional Tours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Buddhist Tours by Region
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionTours.map((tour, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gradient-to-br from-red-300 to-red-500 flex items-center justify-center">
                  <span className="text-white font-semibold text-center px-4">
                    {tour.title}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3">
                    {tour.description}
                  </p>{" "}
                  <div className="space-y-2 mb-4">
                    {(expandedTours.has(index)
                      ? tour.destinations
                      : tour.destinations.slice(0, 2)
                    ).map((dest, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-xs text-gray-700 cursor-pointer hover:text-red-600 hover:bg-red-50 p-1 rounded transition-colors"
                        onClick={() => setSelectedDestination(dest)}
                      >
                        <MapPin
                          size={12}
                          className="text-red-500 mr-2 flex-shrink-0"
                        />
                        <span className="hover:underline">{dest.name}</span>
                      </div>
                    ))}
                    {tour.destinations.length > 2 && (
                      <div
                        className="text-xs text-gray-500 ml-5 cursor-pointer hover:text-red-600 hover:underline transition-colors"
                        onClick={() => toggleTourExpansion(index)}
                      >
                        {expandedTours.has(index)
                          ? `Show less`
                          : `+${
                              tour.destinations.length - 2
                            } more places (click to explore)`}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-xs text-gray-600">
                      <Clock size={12} className="mr-1" />
                      {tour.duration}
                    </div>
                    <div className="text-sm font-semibold text-red-600">
                      {tour.price}
                    </div>
                  </div>
                  <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      {/* Popular Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Popular Buddhist Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTours.map((tour, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl text-center px-4">
                    {tour.name}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-600 mb-2">
                      Tour Highlights:
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {tour.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-xs text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 flex-shrink-0"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock size={16} className="mr-2" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">
                        {tour.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-red-600">
                      {tour.price}
                    </div>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Best Tour Packages */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Best Buddhist Tour Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Sacred Circuit Tour
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <MapPin size={16} className="text-red-500 mr-2" />
                  Bodhgaya - Sarnath - Kushinagar
                </li>
                <li className="flex items-center text-gray-700">
                  <Clock size={16} className="text-red-500 mr-2" />8 Days / 7
                  Nights
                </li>
                <li className="flex items-center text-gray-700">
                  <Users size={16} className="text-red-500 mr-2" />
                  Group & Individual Tours
                </li>
              </ul>
              <div className="text-2xl font-bold text-red-600 mb-4">
                ₹35,000
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                View Package
              </button>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Himalayan Buddhist Tour
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <MapPin size={16} className="text-red-500 mr-2" />
                  Ladakh - Dharamshala - Sikkim
                </li>
                <li className="flex items-center text-gray-700">
                  <Clock size={16} className="text-red-500 mr-2" />
                  12 Days / 11 Nights
                </li>
                <li className="flex items-center text-gray-700">
                  <Users size={16} className="text-red-500 mr-2" />
                  Adventure & Spiritual
                </li>
              </ul>
              <div className="text-2xl font-bold text-red-600 mb-4">
                ₹65,000
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                View Package
              </button>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Complete Buddhist Heritage
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <MapPin size={16} className="text-red-500 mr-2" />
                  India & Nepal Combined
                </li>
                <li className="flex items-center text-gray-700">
                  <Clock size={16} className="text-red-500 mr-2" />
                  15 Days / 14 Nights
                </li>
                <li className="flex items-center text-gray-700">
                  <Users size={16} className="text-red-500 mr-2" />
                  Premium Experience
                </li>
              </ul>
              <div className="text-2xl font-bold text-red-600 mb-4">
                ₹85,000
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                View Package
              </button>
            </div>
          </div>
        </div>
      </section> */}
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our expert tour planners to customize your perfect Buddhist
            pilgrimage experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
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

export default BuddhistToursPage;
