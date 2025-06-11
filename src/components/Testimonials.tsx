import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'California, USA',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    tour: 'Buddhist Circuit India',
    testimonial: 'This journey transformed my understanding of Buddhism and myself. Walking in Buddha\'s footsteps at Bodh Gaya was profoundly moving. Our guide was incredibly knowledgeable and the entire experience was spiritually enriching.',
    date: '2 months ago'
  },
  {
    name: 'Michael Chen',
    location: 'Singapore',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    tour: 'Golden Pagodas Myanmar',
    testimonial: 'Myanmar exceeded all expectations. The Shwedagon Pagoda at sunset was breathtaking, and the thousands of temples in Bagan created an otherworldly experience. Perfect organization and authentic cultural immersion.',
    date: '1 month ago'
  },
  {
    name: 'Emma Williams',
    location: 'London, UK',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    tour: 'Sri Lankan Heritage',
    testimonial: 'The Temple of the Tooth Relic was absolutely magnificent. Every moment of this tour was carefully planned, from the ancient caves of Dambulla to the majestic Sigiriya Rock. Highly recommend for spiritual seekers.',
    date: '3 weeks ago'
  },
  {
    name: 'David Park',
    location: 'Seoul, Korea',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    tour: 'Bhutan Sacred Journey',
    testimonial: 'Bhutan is truly the last Shangri-La. The Tigers Nest Monastery trek was challenging but incredibly rewarding. The pristine Buddhist culture and hospitality of the Bhutanese people made this unforgettable.',
    date: '2 weeks ago'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Pilgrims Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Read testimonials from fellow spiritual travelers who have experienced life-changing 
            journeys through our carefully curated Buddhist tours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
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
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="text-xs text-gray-400">{testimonial.date}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="fill-current text-amber-400" size={14} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">• {testimonial.tour}</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-1 text-amber-200" size={24} />
                <p className="text-gray-600 leading-relaxed italic pl-6">
                  "{testimonial.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">4.8</div>
                <div className="text-sm text-gray-600">Average Rating</div>
                <div className="flex items-center justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-current text-amber-400" size={12} />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;