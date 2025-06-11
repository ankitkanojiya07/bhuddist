import React from 'react';
import { MapPin, Users, Award, Globe } from 'lucide-react';

const stats = [
  {
    icon: MapPin,
    number: '500+',
    label: 'Sacred Sites',
    description: 'Buddhist temples and monasteries'
  },
  {
    icon: Users,
    number: '5000+',
    label: 'Happy Pilgrims',
    description: 'Spiritual journeys completed'
  },
  {
    icon: Award,
    number: '15+',
    label: 'Years Experience',
    description: 'In Buddhist tourism'
  },
  {
    icon: Globe,
    number: '8',
    label: 'Countries',
    description: 'Buddhist destinations covered'
  }
];

const QuickStats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-amber-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-lg font-medium text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;