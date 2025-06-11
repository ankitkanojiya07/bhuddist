import React from 'react';
import { Heart, Users, Compass, BookOpen } from 'lucide-react';

const teachings = [
  {
    icon: Heart,
    title: 'Four Noble Truths',
    description: 'The foundation of Buddhist teaching about the nature of suffering and the path to liberation.',
    details: 'Understanding suffering, its cause, its cessation, and the path to end suffering.'
  },
  {
    icon: Compass,
    title: 'Noble Eightfold Path',
    description: 'The practical guide to ethical and spiritual development leading to enlightenment.',
    details: 'Right understanding, intention, speech, action, livelihood, effort, mindfulness, and concentration.'
  },
  {
    icon: Users,
    title: 'Three Jewels',
    description: 'The three fundamental elements that Buddhists take refuge in on their spiritual journey.',
    details: 'The Buddha (teacher), Dharma (teachings), and Sangha (community) as sources of guidance.'
  },
  {
    icon: BookOpen,
    title: 'Meditation Practice',
    description: 'The core practice for developing mindfulness, wisdom, and inner peace.',
    details: 'Various techniques including mindfulness, loving-kindness, and insight meditation.'
  }
];

const AboutBuddhism = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Understanding Buddhism</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Buddhism is more than a religion—it's a path of spiritual development that leads to 
                insight into the true nature of reality. Founded over 2,500 years ago by Prince 
                Siddhartha Gautama, who became known as the Buddha or "Awakened One."
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Core Philosophy</h3>
                <p className="text-gray-600">
                  Buddhism teaches that all life is interconnected and that suffering arises from 
                  attachment and ignorance. Through ethical conduct, mental discipline, and wisdom, 
                  one can achieve liberation from suffering and attain enlightenment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-1">2,500+</div>
                  <div className="text-sm text-gray-600">Years of Wisdom</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-1">500M</div>
                  <div className="text-sm text-gray-600">Followers Worldwide</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Buddha Meditation"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-amber-600 mb-1">Nirvana</div>
              <div className="text-sm text-gray-600">Ultimate goal of liberation</div>
            </div>
          </div>
        </div>

        {/* Core Teachings */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Core Buddhist Teachings</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the fundamental principles that guide Buddhist philosophy and practice
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {teachings.map((teaching, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 text-white p-3 rounded-full">
                    <teaching.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{teaching.title}</h4>
                    <p className="text-gray-600 mb-3">{teaching.description}</p>
                    <p className="text-sm text-gray-500 italic">{teaching.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-600 to-orange-600 text-white p-12 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Begin Your Spiritual Journey</h3>
          <p className="text-lg mb-6 opacity-90">
            Experience these timeless teachings firsthand through our guided tours to sacred Buddhist sites
          </p>
          <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Explore Buddhist Tours
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutBuddhism;