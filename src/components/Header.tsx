import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@buddhisttour.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>Spiritual Tours Across Asia</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Buddhist Tours</h1>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive("/")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className={`font-medium transition-colors ${
                isActive("/destinations")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              Destinations
            </Link>
            <Link
              to="/tours"
              className={`font-medium transition-colors ${
                isActive("/tours")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              Tours
            </Link>
            <Link
              to="/buddhist-tours"
              className={`font-medium transition-colors ${
                isActive("/buddhist-tours")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              Buddhism Tour
            </Link>
            <Link
              to="/about-buddhism"
              className={`font-medium transition-colors ${
                isActive("/about-buddhism")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              About Buddhism
            </Link>
            <Link
              to="/packages"
              className={`font-medium transition-colors ${
                isActive("/packages")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              Our Packages
            </Link>
            <Link
              to="/testimonials"
              className={`font-medium transition-colors ${
                isActive("/testimonials")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive("/contact")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              Contact
            </Link>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-medium">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/destinations"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Destinations
              </Link>
              <Link
                to="/tours"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Tours
              </Link>
              <Link
                to="/buddhist-tours"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Buddhism Tour
              </Link>
              <Link
                to="/about-buddhism"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                About Buddhism
              </Link>
              <Link
                to="/packages"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Our Packages
              </Link>
              <Link
                to="/testimonials"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Testimonials
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Contact
              </Link>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-medium w-full">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
