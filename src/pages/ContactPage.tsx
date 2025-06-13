import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Award,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDates: "",
    groupSize: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#ed3237] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Ready to embark on a transformative Buddhist pilgrimage? Get in
              touch with our expert travel consultants to create your
              personalized spiritual journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our experienced team is here to help you plan the perfect
                  Buddhist pilgrimage. We offer personalized consultations to
                  ensure your journey meets your spiritual and travel goals.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Phone className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9876543210</p>
                    <p className="text-sm text-gray-500">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Mail className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@buddhisttour.com</p>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MapPin className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Office</h4>
                    <p className="text-gray-600">
                      123 Spiritual Way, Dharamshala
                      <br />
                      Himachal Pradesh, India 176215
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Clock className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Office Hours
                    </h4>
                    <p className="text-gray-600">
                      Mon - Sat: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                    <p className="text-sm text-gray-500">
                      IST (Indian Standard Time)
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-red-50 to-red-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-4">
                  Why Choose Buddhist Tours?
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="text-red-500" size={16} />
                    <span className="text-gray-600">
                      15+ years of Buddhist tourism expertise
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="text-red-500" size={16} />
                    <span className="text-gray-600">
                      Licensed spiritual guides and scholars
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="text-red-500" size={16} />
                    <span className="text-gray-600">
                      Small group sizes for intimate experiences
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="text-red-500" size={16} />
                    <span className="text-gray-600">
                      Authentic cultural immersion opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Plan Your Sacred Journey
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Destination
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select destination</option>
                      <option value="india">India Buddhist Circuit</option>
                      <option value="myanmar">Myanmar Golden Pagodas</option>
                      <option value="sri-lanka">Sri Lankan Heritage</option>
                      <option value="bhutan">Bhutan Sacred Journey</option>
                      <option value="cambodia">
                        Cambodia Angkor Experience
                      </option>
                      <option value="thailand">
                        Thailand Meditation Retreat
                      </option>
                      <option value="multi-country">Multi-Country Tour</option>
                      <option value="custom">Custom Itinerary</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Group Size
                    </label>
                    <select
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select group size</option>
                      <option value="solo">Solo Traveler</option>
                      <option value="couple">Couple (2 people)</option>
                      <option value="small">Small Group (3-6 people)</option>
                      <option value="medium">Medium Group (7-12 people)</option>
                      <option value="large">Large Group (13+ people)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Dates
                    </label>
                    <input
                      type="text"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="e.g., March 2024"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select budget preference</option>
                      <option value="budget">Budget</option>
                      <option value="mid-range">Mid-range</option>
                      <option value="luxury">Luxury</option>
                      <option value="premium">Premium</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us about your spiritual interests, special requirements, accessibility needs, or any specific temples/monasteries you'd like to visit..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Inquiry</span>
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MessageCircle size={16} />
                    <span>Free consultation</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>Response within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our Buddhist tours
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-red-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">
                  What's included in the tour packages?
                </h4>
                <p className="text-gray-600 text-sm">
                  All tours include accommodation, meals, transportation, expert
                  guides, entry fees, and cultural activities. Specific
                  inclusions vary by package.
                </p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-red-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">
                  Do I need to be Buddhist to join?
                </h4>
                <p className="text-gray-600 text-sm">
                  Not at all! Our tours welcome people of all faiths and
                  backgrounds who are interested in learning about Buddhist
                  culture and philosophy.
                </p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-red-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">
                  What's the best time to visit?
                </h4>
                <p className="text-gray-600 text-sm">
                  This varies by destination. Generally, October to March is
                  ideal for most Buddhist sites in Asia due to pleasant weather
                  conditions.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-red-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">
                  Can you customize itineraries?
                </h4>
                <p className="text-gray-600 text-sm">
                  Yes! We specialize in creating personalized itineraries based
                  on your interests, budget, and time constraints.
                </p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-red-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">
                  What about visa requirements?
                </h4>
                <p className="text-gray-600 text-sm">
                  We provide detailed visa information and assistance for all
                  destinations. Requirements vary by nationality and
                  destination.
                </p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-red-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">
                  Is travel insurance included?
                </h4>
                <p className="text-gray-600 text-sm">
                  Travel insurance is not included but highly recommended. We
                  can help you find suitable coverage for your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today for a free consultation and let us help you create
            an unforgettable Buddhist pilgrimage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Call +91 9876543210
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-amber-600 transition-colors">
              Email Us
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;
