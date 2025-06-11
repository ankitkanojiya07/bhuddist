import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Spiritual Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let our expert travel consultants help you create a personalized Buddhist pilgrimage 
            that will transform your understanding of this ancient wisdom tradition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg flex items-center space-x-2">
              <Phone size={20} />
              <span>Call Now: +91 9876543210</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-amber-600 transition-colors flex items-center space-x-2">
              <Mail size={20} />
              <span>Get Free Consultation</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm opacity-80">
            <MessageCircle size={16} />
            <span>Response within 2 hours • Free consultation • No obligation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;