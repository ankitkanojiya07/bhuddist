import React, { useState } from 'react';
import { Star, Quote, MapPin, Calendar, Filter } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'California, USA',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    tour: 'Buddhist Circuit India',
    destination: 'India',
    testimonial: 'This journey transformed my understanding of Buddhism and myself. Walking in Buddha\'s footsteps at Bodh Gaya was profoundly moving. Our guide was incredibly knowledgeable and the entire experience was spiritually enriching. The meditation sessions at sunrise were particularly powerful.',
    date: '2 months ago',
    highlights: ['Bodh Gaya meditation', 'Knowledgeable guide', 'Spiritual transformation', 'Sunrise sessions'],
    category: 'Spiritual'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Singapore',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    tour: 'Golden Pagodas Myanmar',
    destination: 'Myanmar',
    testimonial: 'Myanmar exceeded all expectations. The Shwedagon Pagoda at sunset was breathtaking, and the thousands of temples in Bagan created an otherworldly experience. Perfect organization and authentic cultural immersion. The local monks were so welcoming and shared profound wisdom.',
    date: '1 month ago',
    highlights: ['Shwedagon sunset', 'Bagan temples', 'Cultural immersion', 'Monk interactions'],
    category: 'Cultural'
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'London, UK',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    tour: 'Sri Lankan Heritage',
    destination: 'Sri Lanka',
    testimonial: 'The Temple of the Tooth Relic was absolutely magnificent. Every moment of this tour was carefully planned, from the ancient caves of Dambulla to the majestic Sigiriya Rock. Highly recommend for spiritual seekers. The train journey through tea plantations was magical.',
    date: '3 weeks ago',
    highlights: ['Temple of Tooth', 'Dambulla caves', 'Sigiriya Rock', 'Tea plantation journey'],
    category: 'Heritage'
  },
  {
    id: 4,
    name: 'David Park',
    location: 'Seoul, Korea',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    tour: 'Bhutan Sacred Journey',
    destination: 'Bhutan',
    testimonial: 'Bhutan is truly the last Shangri-La. The Tigers Nest Monastery trek was challenging but incredibly rewarding. The pristine Buddhist culture and hospitality of the Bhutanese people made this unforgettable. Every dzong we visited was more beautiful than the last.',
    date: '2 weeks ago',
    highlights: ['Tigers Nest trek', 'Pristine culture', 'Bhutanese hospitality', 'Beautiful dzongs'],
    category: 'Adventure'
  },
  {
    id: 5,
    name: 'Maria Rodriguez',
    location: 'Madrid, Spain',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    tour: 'Cambodia Angkor Experience',
    destination: 'Cambodia',
    testimonial: 'Angkor Wat at sunrise was a spiritual awakening. The intricate carvings and massive scale left me speechless. Our guide brought the history to life with fascinating stories. The floating villages showed us a different side of Cambodian culture.',
    date: '1 week ago',
    highlights: ['Angkor Wat sunrise', 'Intricate carvings', 'Historical stories', 'Floating villages'],
    category: 'Heritage'
  },
  {
    id: 6,
    name: 'James Thompson',
    location: 'Sydney, Australia',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    tour: 'Thailand Meditation Retreat',
    destination: 'Thailand',
    testimonial: 'The perfect blend of spiritual practice and cultural exploration. The meditation sessions at Wat Pho were transformative, and the Thai massage therapy was incredibly healing. The floating markets were a delightful cultural experience.',
    date: '3 days ago',
    highlights: ['Wat Pho meditation', 'Thai massage', 'Healing experience', 'Floating markets'],
    category: 'Wellness'
  },
  {
    id: 7,
    name: 'Lisa Anderson',
    location: 'Toronto, Canada',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    tour: 'Multi-Country Buddhist Tour',
    destination: 'Multiple',
    testimonial: 'An incredible 3-week journey across India, Nepal, and Sri Lanka. Each country offered unique perspectives on Buddhism. The organization was flawless, and our group became like family. This trip changed my life perspective completely.',
    date: '1 month ago',
    highlights: ['Multi-country experience', 'Flawless organization', 'Group bonding', 'Life-changing'],
    category: 'Pilgrimage'
  },
  {
    id: 8,
    name: 'Robert Kim',
    location: 'Vancouver, Canada',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    tour: 'Myanmar Cultural Immersion',
    destination: 'Myanmar',
    testimonial: 'Living with local families and participating in daily alms-giving ceremonies was incredibly moving. The authenticity of the experience was unmatched. Bagan\'s temple-dotted landscape at sunrise is something I\'ll never forget.',
    date: '2 weeks ago',
    highlights: ['Local family stays', 'Alms-giving ceremonies', 'Authentic experience', 'Bagan sunrise'],
    category: 'Cultural'
  }
];

const categories = ['All', 'Spiritual', 'Cultural', 'Heritage', 'Adventure', 'Wellness', 'Pilgrimage'];
const destinations = ['All', 'India', 'Myanmar', 'Sri Lanka', 'Bhutan', 'Cambodia', 'Thailand', 'Multiple'];

const TestimonialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDestination, setSelectedDestination] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesCategory = selectedCategory === 'All' || testimonial.category === selectedCategory;
    const matchesDestination = selectedDestination === 'All' || testimonial.destination === selectedDestination;
    return matchesCategory && matchesDestination;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Traveler Testimonials</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Read authentic stories from fellow spiritual travelers who have experienced 
              life-changing journeys through our carefully curated Buddhist tours.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">4.9</div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="flex items-center justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-current text-amber-400" size={16} />
                ))}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-bold text-gray-800">Filter Reviews</h2>
              <span className="text-gray-500">({filteredTestimonials.length} reviews)</span>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-full"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-amber-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-amber-500"
              >
                {destinations.map(destination => (
                  <option key={destination} value={destination}>{destination}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 p-4 bg-gray-50 rounded-xl">
              <div className="grid grid-cols-2 gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-amber-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-amber-500"
                >
                  {destinations.map(destination => (
                    <option key={destination} value={destination}>{destination}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <MapPin size={14} />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">{testimonial.date}</div>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="fill-current text-amber-400" size={14} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">• {testimonial.tour}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs">
                        {testimonial.category}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {testimonial.destination}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-1 text-amber-200" size={24} />
                  <p className="text-gray-600 leading-relaxed italic pl-6">
                    "{testimonial.testimonial}"
                  </p>
                </div>

                <div>
                  <h5 className="font-medium text-gray-800 mb-3">Experience Highlights:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {testimonial.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own Story?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of satisfied travelers who have discovered the transformative power of Buddhist pilgrimage
          </p>
          <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;