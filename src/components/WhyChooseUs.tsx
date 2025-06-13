import React from "react";
import { Shield, Heart, Users, Award, Clock, Compass } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Authentic Experiences",
    description:
      "Genuine Buddhist cultural immersion with local monks and scholars",
  },
  {
    icon: Heart,
    title: "Spiritual Guidance",
    description:
      "Expert guides with deep knowledge of Buddhist philosophy and practices",
  },
  {
    icon: Users,
    title: "Small Groups",
    description:
      "Intimate group sizes for personalized attention and meaningful connections",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in spiritual and cultural tourism",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your spiritual journey",
  },
  {
    icon: Compass,
    title: "Custom Itineraries",
    description:
      "Tailored tours to match your spiritual interests and preferences",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Why Choose Buddhist Tours
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            We specialize in creating transformative spiritual journeys that
            honor Buddhist traditions while providing modern comfort and safety
            for our travelers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <feature.icon className="text-amber-600" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
